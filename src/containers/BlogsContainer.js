import React, { useEffect, useReducer } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import './App.css';
import Amplify, { API } from 'aws-amplify';

import {getBlog, blogsCities} from '../graphql/queries';

import {
    deleteComment as deleteCommentMutation, deletePost as deletePostMutation
} from '../graphql/mutations';
import {onCreateBlogByBlogId, onUpdateBlogByBlogId, onCreatePostByBlogId, onUpdatePostByBlogId,
    onCreateCommentByPostId, onUpdateCommentByPostId} from "../graphql/subscriptions";
import { Button, SmallButton, Spinner, ErrorMessage
} from '../common/styled';
import awsconfig from "../../src/aws-exports";

const types = {
    SET_BLOGS: 'SET_BLOGS',
    SET_BLOG: 'SET_BLOG',
    SET_CURRENTUSERNAME: 'SET_CURRENTUSERNAME',
    SET_CURRENTUSERGROUPS: 'SET_CURRENTUSERGROUPS',
    SET_POSTS: 'SET_POSTS',
    SET_FORMDATA: 'SET_FORMDATA',
    SET_ISLOADING: 'SET_ISLOADING',
    SET_ISERROR: 'SET_ISERROR',
    SET_ISMOUNTED: 'SET_ISMOUNTED',
    ADD_BLOG: 'ADD_BLOG',
    UP_BLOG: 'UP_BLOG',
    ADD_POST: 'ADD_POST',
    UPDATE_POST: 'UPDATE_POST',
    ADD_COMMENT: 'ADD_COMMENT',
    UPDATE_COMMENT: 'UPDATE_COMMENT'
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return { ...state, posts: action.value }
        case types.SET_BLOGS:
            return { ...state, blogs: action.value }
        case types.SET_BLOGOWNER:
            return { ...state, blogOwner: action.value }
        case types.SET_CURRENTUSERNAME:
            return { ...state, currentUsername: action.value }
        case types.SET_CURRENTUSERGROUPS:
            return { ...state, currentUserGroups: action.value }
        case types.SET_BLOG:
            return { ...state, blog: action.value }
        case types.SET_FORMDATA:
            return { ...state, formData: action.value }
        case types.SET_ISLOADING:
            return { ...state, isLoading: action.value }
        case types.SET_ISMOUNTED:
            return { ...state, isMounted: action.value }
        case types.SET_ISERROR:
            return { ...state, isError: action.value }
        case types.ADD_BLOG:
            return { ...state, blogs: [action.value, ...state.blogs]}
        case types.UP_BLOG:
            return { ...state, blogs: [action.value, ...state.blogs.filter(blog => blog.id === action.value.id)]}
        case types.ADD_POST:
            return { ...state, posts: [...state.posts, action.value]}
        case types.UPDATE_POST:
            return { ...state, posts: [...state.posts.map(post => post.id === action.value.id ? action.value : post)]}
        case types.ADD_COMMENT:
            return { ...state, posts: [...state.posts.map(post => {
                if (post.id === action.value.commentPostId) {
                    post.comments.push(action.value);
                    return post;
                }
                })]}
        case types.UPDATE_COMMENT:
            return { ...state, posts: [...state.posts.map(post => {
                    if (post.id === action.value.commentPostId) {
                        const newComments = post.comments.map(comment => comment.id === action.value.id ? action.value : comment);
                        post.comments = newComments;
                        return post;
                    }
                })]}
    }
}

const initialState = {
    blogs: [],
    blog: {},
    posts: [],
    formData: {},
    isLoading: false,
    isError: false,
    isMounted: false,
    currentUsername: '',
    currentUserGroups: []
}

function BlogsContainer(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    let history = useHistory();
    const { id } = useParams();
    // check if logged in and setup auth type
    if (props.currentUser?.signInUserSession) {
        awsconfig.aws_appsync_authenticationType = "AMAZON_COGNITO_USER_POOLS";
        Amplify.configure({
            ...awsconfig
        });
    } else {
        awsconfig.aws_appsync_authenticationType = "API_KEY";
        Amplify.configure({
            ...awsconfig
        });
    }

    useEffect(() => {
        (() => {
            const user = props.currentUser;
            if (user?.username) {
                dispatch({type: types.SET_CURRENTUSERNAME, value: user?.username });
                dispatch({type: types.SET_CURRENTUSERGROUPS, value: user?.signInUserSession?.accessToken?.payload["cognito:groups"] });
            }
        })()

        //dispatch({type: types.SET_ISMOUNTED, value: true});
        let onCreateBlogSubscription, onUpdateBlogSubscription, onCreatePostSubscription, onUpdatePostSubscription,
            onCreateCommentSubscription, onUpdateCommentSubscription;
        fetchBlog(id, onCreateCommentSubscription, onUpdateCommentSubscription).catch(err => {
                console.error(err);
                dispatch({type: types.SET_ISERROR, value: 'Error in fetchBlog function: ' + err.message });
        });

        // if (id) {
        //     onCreateBlogSubscription = () => {
        //         const listener = API.graphql(
        //             graphqlOperation(onCreateBlogByBlogId, {
        //                 blogBlogId: id
        //             })
        //         );
        //         console.log('onCreateBlogSubs listener', listener);
        //         return listener.subscribe(
        //             response => {
        //                 const blog = response.value.data.onCreateBlogByBlogId;
        //                 if (blog === null) return;
        //                 console.log('onCreateBlog data', blog);
        //                 dispatch({
        //                     type: types.ADD_BLOG,
        //                     value: blog
        //                 });
        //             },
        //             err => {
        //                 console.warn("onCreateBlogSubscription error ", err);
        //             }
        //         );
        //     }
        //     onUpdateBlogSubscription = () => {
        //         const listener = API.graphql(
        //             graphqlOperation(onUpdateBlogByBlogId, {
        //                 blogBlogId: id
        //             })
        //         );
        //         return listener.subscribe(
        //             response => {
        //                 const blog = response.value.data.onUpdateBlogByBlogId;
        //                 if (blog === null) return;
        //                 console.log('onUpdateBlog data', blog);
        //                 dispatch({
        //                     type: types.UP_BLOG,
        //                     value: blog
        //                 });
        //             },
        //             err => {
        //                 console.warn("onUpdateBlogSubscription error ", err);
        //             }
        //         );
        //     }
        //     onCreatePostSubscription = () => {
        //         const listener = API.graphql(
        //             graphqlOperation(onCreatePostByBlogId, {
        //                 postBlogId: id
        //             })
        //         );
        //         return listener.subscribe(
        //             response => {
        //                 const post = response.value.data.onCreatePostByBlogId;
        //                 if (post === null) return;
        //                 console.log('onCreatePost data', post);
        //                 dispatch({
        //                     type: types.ADD_POST,
        //                     value: post
        //                 });
        //             },
        //             err => {
        //                 console.warn("onCreatePostSubscription error ", err);
        //             }
        //         );
        //     }
        //     onUpdatePostSubscription = () => {
        //         const listener = API.graphql(
        //             graphqlOperation(onUpdatePostByBlogId, {
        //                 postBlogId: id
        //             })
        //         );
        //         return listener.subscribe(
        //             response => {
        //                 const post = response.value.data.onUpdatePostByBlogId;
        //                 if (post === null) return;
        //                 console.log('onUpdatePost data', post);
        //                 dispatch({
        //                     type: types.UPDATE_POST,
        //                     value: post
        //                 });
        //             },
        //             err => {
        //                 console.warn("onUpdatePostSubscription error ", err);
        //             }
        //         );
        //     }
        // }

        return () => {

            dispatch({type: types.SET_POSTS, value: []});
            dispatch({type: types.SET_BLOGS, value: []});
            dispatch({type: types.SET_ISERROR, value: false});
            dispatch({type: types.SET_BLOG, value: {}});
            // if (id) {
            //     onCreateBlogSubscription?.unsubscribe();
            //     onUpdateBlogSubscription?.unsubscribe();
            //     onCreatePostSubscription?.unsubscribe();
            //     onUpdatePostSubscription?.unsubscribe();
            //     onCreateCommentSubscription?.unsubscribe();
            //     onUpdateCommentSubscription?.unsubscribe();
            // }
        };
    }, [id]);

    const chooseCity = (city) => {
        localStorage.setItem('currentCity', JSON.stringify(city));
        props.setCurrentCity(city)
        history.push("/"+city?.id);
    }

    const fetchBlogCore = async (id) => {
        const apiData = await API.graphql({ query: getBlog, variables: {id} }); // {id: 'f745b2c0-7187-45d6-b67d-5cf7157f862d'} });
        if (apiData?.data?.getBlog) {
            dispatch({type: types.SET_BLOG, value: apiData?.data?.getBlog});
            dispatch({type: types.SET_BLOGS, value: apiData?.data?.getBlog?.blogs?.items});
            dispatch({type: types.SET_POSTS, value: apiData?.data?.getBlog?.posts?.items});
        } else {
            throw new Error('No blogs data');
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }

    async function fetchBlog(id, onCreateCommentSubscription, onUpdateCommentSubscription) {
        dispatch({type: types.SET_ISLOADING, value: true });
        dispatch({type: types.SET_ISERROR, value: false });
        if (id) {
            await fetchBlogCore(id) //.then(() => {
            //     state.posts.map(post => {
            //         onCreateCommentSubscription = () => {
            //             const listener = API.graphql(
            //                 graphqlOperation(onCreateCommentByPostId, {
            //                     commentPostId: post.id
            //                 })
            //             );
            //             return listener.subscribe(
            //                 response => {
            //                     const comment = response.value.data.onCreateCommentByPostId;
            //                     if (comment === null) return;
            //                     console.log('onCreateComment data', comment);
            //                     dispatch({
            //                         type: types.ADD_COMMENT,
            //                         value: comment
            //                     });
            //                 },
            //                 err => {
            //                     console.warn("onCreatePostSubscription error ", err);
            //                 }
            //             );
            //         }
            //         onUpdateCommentSubscription = () => {
            //             const listener = API.graphql(
            //                 graphqlOperation(onUpdateCommentByPostId, {
            //                     commentPostId: post.id
            //                 })
            //             );
            //             return listener.subscribe(
            //                 response => {
            //                     const comment = response.value.data.onUpdateCommentByPostId;
            //                     if (comment === null) return;
            //                     console.log('onUpdateComment data', comment);
            //                     dispatch({
            //                         type: types.UPDATE_COMMENT,
            //                         value: comment
            //                     });
            //                 },
            //                 err => {
            //                     console.warn("onUpdatePostSubscription error ", err);
            //                 }
            //             );
            //         }
            //
            //
            //     })
            // });
        } else {
            if (props.currentCity) {
                history.push("/"+props.currentCity?.id);
            } else {
                const apiData = await API.graphql({ query: blogsCities, variables: {blogBlogId: 'City'} }); // {id: 'f745b2c0-7187-45d6-b67d-5cf7157f862d'} });
                if (apiData?.data?.blogsCities) {
                    dispatch({type: types.SET_BLOGS, value: apiData?.data?.blogsCities?.items})
                } else {
                    throw new Error('No blogs-cities data');
                }
                dispatch({type: types.SET_ISLOADING, value: false });
            }
        }
    }


    async function deletePost(id) {
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: deletePostMutation, variables: {input: {id}} });
        if (apiData?.data?.deletePost) {
            const newPosts = state.posts.filter(post => post.id !== id);
            dispatch({type: types.SET_POSTS, value: [...newPosts]})
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка при удалении поста'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }

    async function deleteComment(id) {
        dispatch({type: types.SET_ISLOADING, value: true });
        dispatch({type: types.SET_ISERROR, value: false });
        const apiData = await API.graphql({ query: deleteCommentMutation, variables: {input: {id}} });
        if (apiData?.data?.deleteComment) {
            const newPosts = state.posts.map(post => {
                const newComms = post.comments.items.filter(comm => comm.id !== id);
                post.comments.items = [...newComms]
                return post;
            });
            dispatch({type: types.SET_POSTS, value: [...newPosts]})
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка при удалении комментария'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }

    if (state.isLoading) {
        return (<div>
            <br/><br/><br/><br/><br/>
            <Spinner/>
        </div>)
    }

    return (
        <div>
            <br />
            { state.isError ? <ErrorMessage>{state.isError}</ErrorMessage> : ''}
            {
                state.blog?.blogBlogId && state.blog?.blogBlogId !== 'City' && (
                    <div>
                        <h3>{state.blog?.name}</h3>
                        <p style={{fontSize: '10px'}}>Создано: {state.blog?.owner} | {state.blog?.createdAt?.split('T')[0]+' '+state.blog?.createdAt?.split('T')[1].slice(0,5)} | Обновлено: {state.blog?.updatedAt?.split('T')[0]+' '+state.blog?.updatedAt?.split('T')[1].slice(0,5)} </p>
                        {
                            state.currentUsername === state.blog?.owner || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') || state.currentUserGroups?.includes('moderators') ? <p>
                                <SmallButton onClick={() => history.push('/new/'+state.blog?.blogBlogId+'/blog/'+state.blog?.id)}>Редактировать</SmallButton>
                            </p> : ''
                        }
                    </div>
                )
            }
            {
                id && <div>
                    <Button onClick={() => history.push('/new/'+id+'/blog')}>Создать тему</Button>
                    {
                        state.currentUsername && state.blog?.owner && state.blog?.owner === state.currentUsername || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') ?
                            <Button style={{marginLeft: '10px'}}  onClick={() => history.push('/new/'+id+'/post')}>Создать пост</Button>
                            : ''
                    }

                </div>
            }
            <br/>
            { id && state.blogs?.length ? <div>
                <h5>Темы: </h5>
                <br />
            </div> : '' }

            { state.blogs?.map( (blog, index) => {
                if (blog?.status === 'published' || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') || state.currentUserGroups?.includes('moderators')) { return (<div key={index} style={{marginBottom: '5px'}}>
                    {id ?
                        <div>
                            <h4><Link to={"/"+blog.id}>{blog?.name}{blog?.status !== 'published' && `  [${blog?.status}]`}</Link></h4>
                            <p style={{fontSize: '10px'}}>Создано: {blog?.owner} | {blog?.createdAt.split('T')[0]+' '+blog?.createdAt.split('T')[1].slice(0,5)} | Обновлено: {blog?.updatedAt.split('T')[0]+' '+blog?.updatedAt.split('T')[1].slice(0,5)} </p>
                            {
                                state.currentUsername === blog?.owner || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') || state.currentUserGroups?.includes('moderators') ? <p>
                                    <SmallButton onClick={() => history.push('/new/'+blog?.blogBlogId+'/blog/'+blog?.id)}>Редактировать</SmallButton>
                                </p> : ''
                            }
                        </div>
                        :
                        <h1 style={{textDecoration: "underline",
                            textDecorationColor: "#8f2e56"}} onClick={() => chooseCity(blog)}>{blog?.name}</h1>
                    }
                </div>)
                }
            })}
            { state.blogs?.length ? <br /> : ''}

            { id && state.posts?.length ? <h5>Посты:</h5> : ''}
            <br />
            { state.posts?.map( (post, index) => (
                <div key={index}>
                    <p>{post?.content}</p>
                    <p style={{fontSize: '10px'}}>Создано: {post?.owner} | {post?.createdAt.split('T')[0]+' '+post?.createdAt.split('T')[1].slice(0,5)} | Обновлено: {post?.updatedAt.split('T')[0]+' '+post?.updatedAt.split('T')[1].slice(0,5)} </p>
                    {
                        state.currentUsername === post.owner || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') || state.currentUserGroups?.includes('moderators') ? <p>
                            <SmallButton onClick={() => history.push('/new/'+post.postBlogId+'/post/'+post.id)}>Редактировать</SmallButton>
                            <SmallButton onClick={() => deletePost(post.id)}>Удалить</SmallButton>
                        </p> : ''
                    }
                    <br/>
                    <p style={{fontSize: '13px'}}>Комментарии:</p>
                    {post?.comments?.items?.length ? <br/> : ''}
                    {post?.comments?.items?.map(comment => (
                        <div style={{marginBottom: '2px'}}>
                            <p style={{fontSize: '13px'}}>{comment?.content}</p>
                            <p style={{fontSize: '10px'}}>Создано: {comment?.owner} | {comment?.createdAt.split('T')[0]+' '+comment?.createdAt.split('T')[1].slice(0,5)} | Обновлено: {comment?.updatedAt.split('T')[0]+' '+comment?.updatedAt.split('T')[1].slice(0,5)} </p>
                            {
                                state.currentUsername === comment.owner || state.currentUserGroups?.includes('admins') || state.currentUserGroups?.includes('managers') || state.currentUserGroups?.includes('moderators') ? <p>
                                    <SmallButton onClick={() => history.push('/new/'+comment.commentPostId+'/comment/'+comment.id)}>Редактировать</SmallButton>
                                    <SmallButton onClick={() => deleteComment(comment.id)}>Удалить</SmallButton>
                                </p> : ''
                            }
                        </div>
                    ) )}
                    <br/>
                    <p><Button onClick={() => history.push('/new/'+post.id+'/comment')}>Создать комментарий</Button></p>
                    <br />
                </div>
            ))}
            {
                !id && <div>
                <Button onClick={() => history.push('/new/'+id+'/blog')}>Создать город</Button>
                </div>
            }
            <br/><br/>
            <div>
                <p style={{fontSize: '13px'}}>© 2021 freegou.org</p><br/>
                <p style={{fontSize: '13px'}}>О проекте:</p>
                <p style={{fontSize: '13px'}}><Link to={"/about"} >/about</Link></p>
                <p style={{fontSize: '13px'}}>Телеграм:</p>
                <p style={{fontSize: '13px'}}><a href={"https://t.me/freegokanal"} target={"_blank"}>https://t.me/freegokanal</a></p>

            </div>

        </div>

    );
}

export default BlogsContainer;

