import React, {useEffect, useReducer} from 'react';
import './App.css';
import Amplify, {API} from 'aws-amplify';
import { AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp,
    AmplifyForgotPassword, AmplifySignIn, AmplifyConfirmSignUp}  from '@aws-amplify/ui-react';
import {getUserByUsername, getBlog, getPost, getComment} from '../graphql/queries';
import { createBlog as createBlogMutation, createPost as createPostMutation, createComment as createCommentMutation,
    updateBlog as updateBlogMutation, updatePost as updatePostMutation, updateComment as updateCommentMutation,
    createUser as createUserMutation
} from '../graphql/mutations';

import {useHistory, useParams} from 'react-router-dom';

import { Spinner,  ErrorMessage, Button
} from '../common/styled';
import awsconfig from "../aws-exports";
import {onAuthUIStateChange, Translations} from "@aws-amplify/ui-components";

Translations.SIGN_IN_HEADER_TEXT = "Вход";
Translations.FORGOT_PASSWORD_TEXT = "Забыли пароль?";
Translations.RESET_PASSWORD_TEXT = "Сбросить пароль";
Translations.NO_ACCOUNT_TEXT = "Нет аккаунта?";
Translations.CREATE_ACCOUNT_TEXT = "Регистрация";
Translations.BACK_TO_SIGN_IN = "Назад к входу";
Translations.SEND_CODE = "Отправить код";
Translations.SUBMIT = "Отправить";
Translations.VERIFY_CONTACT_SUBMIT_LABEL = "Подтвердить";
Translations.SIGN_UP_HAVE_ACCOUNT_TEXT = "Уже есть аккаунт?";
Translations.SIGN_IN_TEXT = "Вход";
Translations.SIGN_IN_ACTION = "Войти"
Translations.SIGN_UP_SUBMIT_BUTTON_TEXT = "Зарегистрироваться";
Translations.CONFIRM_SIGN_UP_LOST_CODE = "Потеряли код?";
Translations.CONFIRM_SIGN_UP_RESEND_CODE = "Отправить снова";
Translations.NEW_PASSWORD_LABEL = "Новый пароль";
Translations.NEW_PASSWORD_PLACEHOLDER = "Parol123";
Translations.CODE_LABEL = "Код подтверждения";
Translations.CODE_PLACEHOLDER = "2314";
Translations.SIGN_OUT = "Выйти из аккаунта";



const initialFormState = {
    blog: { name: '', status: 'published', blogBlogId: ''},
    post: { content: '', status: 'published', postBlogId: ''},
    comment: { content: '', status: 'published', commentPostId: ''}
}

const types = {
    SET_BLOGS: 'SET_BLOGS',
    SET_POSTS: 'SET_POSTS',
    SET_FORMDATA: 'SET_FORMDATA',
    SET_ISLOADING: 'SET_ISLOADING',
    SET_ISERROR: 'SET_ISERROR',
    SET_AUTHSTATE: 'SET_AUTHSTATE',
    SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return { ...state, posts: action.value }
        case types.SET_BLOGS:
            return { ...state, blogs: action.value }
        case types.SET_FORMDATA:
            return { ...state, formData: action.value }
        case types.SET_ISLOADING:
            return { ...state, isLoading: action.value }
        case types.SET_ISERROR:
            return { ...state, isError: action.value }
        case types.SET_AUTHSTATE:
            return { ...state, authState: action.value }
        case types.SET_USER:
            return { ...state, user: action.value }
    }
}

const initialState = {
    formData: {},
    isLoading: false,
    isError: false,
    authState: '',
    user: ''
}

function FormContainer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { parent, type, id } = useParams();
    let history = useHistory();
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

        switch (type) {
            case 'blog':
                if (parent !== 'undefined') {
                    initialFormState.blog.blogBlogId = parent;
                } else {
                    initialFormState.blog.blogBlogId = 'City';
                }
                dispatch({type: types.SET_FORMDATA, value: initialFormState.blog});
                if (id) {
                    fetchBlog(id);
                }
                break;
            case 'post':
                if (parent !== 'undefined') {
                    initialFormState.post.postBlogId = parent;
                }

                dispatch({type: types.SET_FORMDATA, value: initialFormState.post});
                if (id) {
                    fetchPost(id);
                }
                break;
            case 'comment':
                if (parent !== 'undefined') {
                    initialFormState.comment.commentPostId = parent;
                }
                dispatch({type: types.SET_FORMDATA, value: initialFormState.comment});
                if (id) {
                   fetchComment(id);
                }
                break;
            default:
                dispatch({type: types.SET_FORMDATA, value: initialFormState.blog});
        }

    }, [type]);

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            dispatch({type: types.SET_AUTHSTATE, value: nextAuthState});
            dispatch({type: types.SET_USER, value: authData});
            props?.setCurrentUser(authData);
        });
    }, [])

    async function fetchBlog(id) {
        dispatch({type: types.SET_ISLOADING, value: true });
        dispatch({type: types.SET_ISERROR, value: false });
        const apiData = await API.graphql({ query: getBlog, variables: {id} });
        if (apiData?.data?.getBlog) {
            dispatch({type: types.SET_FORMDATA, value: {...state.formData, name: apiData?.data?.getBlog?.name, id: apiData?.data?.getBlog?.id } });
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when fetching blog data'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function fetchPost(id) {
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: getPost, variables: {id} });
        if (apiData?.data?.getPost) {
            dispatch({type: types.SET_FORMDATA, value: {...state.formData, content: apiData?.data?.getPost?.content, id: apiData?.data?.getPost?.id } });
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when fetching post data'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function fetchComment(id) {
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: getComment, variables: {id} });
        if (apiData?.data?.getComment) {
            dispatch({type: types.SET_FORMDATA, value: {...state.formData, content: apiData?.data?.getComment?.content, id: apiData?.data?.getComment?.id }});
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when fetching comment data'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }

    async function createBlog() {
        if (!state.formData?.name) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле названия блога' });
            return
        }
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: createBlogMutation, variables: {input: state.formData} });
        if (apiData?.data?.createBlog) {
            await createUser(props.currentUser?.username);
            if (parent !== 'undefined') {
                history.push('/new/' + apiData?.data?.createBlog?.id + '/post/');
            } else {
                history.push('/');
            }
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when creating blog'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function createPost() {
        if (!state.formData?.content) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле описания поста' });
            return
        }
        dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': state.formData.content} } );
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: createPostMutation, variables: {input: state.formData} });
        if (apiData?.data?.createPost) {
            await createUser(props.currentUser?.username);
            history.push('/'+apiData?.data?.createPost?.postBlogId)
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when creating post'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function createComment() {
        if (!state.formData?.content) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле описания комментария' });
            return
        }
        dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': state.formData.content} } );
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: createCommentMutation, variables: {input: state.formData} });
        if (apiData?.data?.createComment) {
            await createUser(props.currentUser?.username);
            history.push('/'+apiData?.data?.createComment?.post?.postBlogId)
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when creating comment'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    // check if user created in Dynamodb if not create
    async function createUser(username) {
        const checkUser = await API.graphql({ query: getUserByUsername, variables: {username}})
        if (checkUser?.data?.getUserByUsername?.items?.length) {
        } else {
            const apiData = await API.graphql({ query: createUserMutation, variables: {input: {username }} });
        }
    }

    async function updateBlog(id) {
        if (!state.formData?.name) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле названия темы' });
        return
        }
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: updateBlogMutation, variables: {input: state.formData} });
        if (apiData?.data?.updateBlog) {
            history.push('/'+apiData?.data?.updateBlog?.id)
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when updating blog'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function updatePost(id) {
        if (!state.formData?.content) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле описания поста' });
            return
        }
        dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': state.formData.content} } );
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: updatePostMutation, variables: {input: state.formData} });
        if (apiData?.data?.updatePost) {
            history.push('/'+apiData?.data?.updatePost?.postBlogId)
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when updating post'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }
    async function updateComment(id) {
        if (!state.formData?.content) {
            dispatch({type: types.SET_ISERROR, value: 'Ошибка: Пустое поле описания комментария' });
            return
        }
        dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': state.formData.content} } );
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: updateCommentMutation, variables: {input: state.formData} });
        if (apiData?.data?.updateComment) {
            history.push('/'+apiData?.data?.updateComment?.post?.postBlogId)
        } else {
            dispatch({type: types.SET_ISERROR, value: 'Error when updating comment'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    }

    const authForm = () => (
        <AmplifyAuthContainer>
            <AmplifyAuthenticator usernameAlias="username">
                <AmplifySignUp
                    slot="sign-up"
                    headerText="Регистрация"
                    usernameAlias="username"
                    formFields={[
                        {
                            type: "email",
                            label: "Ваш email",
                            placeholder: "atai@gmail.com",
                            inputProps: { required: true, autocomplete: "email" },
                        },
                        {
                            type: "username",
                            label: "Имя пользователя",
                            placeholder: "atai",
                            inputProps: { required: true, autocomplete: "username" },
                        },
                        {
                            type: "password",
                            label: "Пароль (8 знаков с числами)",
                            placeholder: "Parol123",
                            inputProps: { required: true, autocomplete: "new-password" },
                        }
                    ]}
                />
                <AmplifySignIn slot="sign-in"
                               usernameAlias="username"
                               formFields={[
                                   {
                                       type: "username",
                                       label: "Имя пользователя",
                                       placeholder: "atai",
                                       inputProps: { required: true, autocomplete: "username" },
                                   },
                                   {
                                       type: "password",
                                       label: "Ваш пароль (как указан при регистрации)",
                                       placeholder: "Parol123",
                                       inputProps: { required: true, autocomplete: "new-password" },
                                   }
                               ]}
                />
                <AmplifyForgotPassword
                    headerText="Восстановление пароля"
                    slot="forgot-password"
                    formFields={[
                        {
                            type: "username",
                            label: "Имя пользователя",
                            placeholder: "atai",
                            inputProps: { required: true, autocomplete: "username" },
                        }
                    ]}

                />
                <AmplifyConfirmSignUp
                    headerText="Подтвердите регистрацию"
                    slot="confirm-sign-up"
                    submitButtonText={'Подтвердить'}
                    formFields={[
                        {
                            type: "username",
                            label: "Имя пользователя",
                            placeholder: "atai",
                            inputProps: { required: true, autocomplete: "username" },
                        },
                        {
                            type: "code",
                            label: "Код подтверждения (выслан на почту)",
                            placeholder: "1234",
                            inputProps: { required: true, autocomplete: "" },
                        }
                    ]}
                ></AmplifyConfirmSignUp>
            </AmplifyAuthenticator>
        </AmplifyAuthContainer>
    )

    if (state.isLoading) {
        return (<div>
            <br/><br/><br/><br/><br/>
            <Spinner/>
        </div>)
    }

    if (type) {
        if (type === 'blog') {
            return props.currentUser?.signInUserSession ? (
                <div>
                    <br/>
                    { state.isError ? <ErrorMessage>{state.isError}</ErrorMessage> : ''}
                    <br/>
                    <textarea
                        onChange={e => dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'name': e.target.value} } )}
                        placeholder="Название"
                    >{state.formData.name}</textarea>
                    <br/>
                    <Button onClick={() => id ? updateBlog(id) : createBlog()}>{ id ? 'Обновить' : 'Создать'} { parent !== 'undefined' ? 'тему' : 'город'}</Button>

                </div>
            ) : authForm();
        } else if (type === 'post') {

            return props.currentUser?.signInUserSession ? (
                <div>
                    <br/>
                    { state.isError ? <ErrorMessage>{state.isError}</ErrorMessage> : ''}
                    <br/>
                    <textarea
                        onChange={e => dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': e.target.value} } )}
                        placeholder="Содержание поста"
                    >{state.formData.content}</textarea>
                    <br/>
                    <Button onClick={() => id ? updatePost(id) : createPost()}>{ id ? 'Обновить' : 'Создать'} пост</Button>
                    <br/><br/>


                </div>
            ) : authForm();
        } else if (type === 'comment') {

            return props.currentUser?.signInUserSession ? (
                <div>
                    <br/>
                    { state.isError ? <ErrorMessage>{state.isError}</ErrorMessage> : ''}
                    <br/>
                    <textarea
                            onChange={e => dispatch({type: types.SET_FORMDATA, value: {...state.formData, 'content': e.target.value} } )}
                        placeholder="Содержание комментария"
                    >{state.formData.content}</textarea>

                    <br/>
                    <Button onClick={() => id ? updateComment(id) : createComment()}>{ id ? 'Обновить' : 'Создать'} комментарий</Button>

                </div>
            ) : authForm();
        } else {

        }
    }
    return props.currentUser?.signInUserSession ? (
        <div>
            <br/>
            { state.isError ? <ErrorMessage>{state.isError}</ErrorMessage> : ''}
            <br/>
            <Button onClick={() => history.push('/new/'+parent+'/blog')}>Создать тему</Button>
            <Button onClick={() => history.push('/new/'+parent+'/post')}>Создать пост</Button>
            <Button onClick={() => history.push('/new/'+parent+'/comment')}>Создать комментарий</Button>
        </div>
    ) : authForm();
}

export default FormContainer;
