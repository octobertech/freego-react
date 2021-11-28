import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import Amplify, {API, Auth} from 'aws-amplify';
import {
    AmplifySignOut,
    AmplifyAuthContainer,
    AmplifyAuthenticator,
    AmplifySignUp, AmplifySignIn, AmplifyForgotPassword, AmplifyConfirmSignUp
} from '@aws-amplify/ui-react';
import {getUserByUsername} from '../graphql/queries';

import {BrowserRouter, Route, Switch, useHistory, useParams} from 'react-router-dom';
import BlogsContainer from './BlogsContainer';
import { createUser as createUserMutation, updateUser as updateUserMutation
} from '../graphql/mutations';
import {
    Container, Button, Title, Main, Header, Spinner, InputContainer, AddButton, SetListContainer,
    Input, EmptyListMessage, SetContainer, StyledModal, SpecialModalBackground, ErrorMessage, Footer
} from '../common/styled';
import awsconfig from "../aws-exports";
import {AuthState, onAuthUIStateChange, Translations} from "@aws-amplify/ui-components";

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
Translations.SIGN_UP_SUBMIT_BUTTON_TEXT = "Регистрация";
Translations.CONFIRM_SIGN_UP_LOST_CODE = "Потеряли код?";
Translations.CONFIRM_SIGN_UP_RESEND_CODE = "Отправить снова";
Translations.NEW_PASSWORD_LABEL = "Новый пароль";
Translations.NEW_PASSWORD_PLACEHOLDER = "Parol123";
Translations.CODE_LABEL = "Код подтверждения";
Translations.CODE_PLACEHOLDER = "2314";
Translations.SIGN_OUT = "Выйти из аккаунта";


const initialFormState = {
    userCognito: { username: '', email: ''  },
    userDynamo: { name: '', city: '', bio: '' }
}

const types = {
    SET_BLOGS: 'SET_BLOGS',
    SET_POSTS: 'SET_POSTS',
    SET_USERDYNAMO: 'SET_USERDYNAMO',
    SET_USERCOGNITO: 'SET_USERCOGNITO',
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
        case types.SET_USERDYNAMO:
            return { ...state, userDynamo: action.value }
        case types.SET_USERCOGNITO:
            return { ...state, userCognito: action.value }
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
    userDynamo: {},
    userCognito: {},
    isLoading: false,
    isError: false,
    authState: '',
    user: ''
}

function UserContainer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    let history = useHistory();
    console.log('currentUser', props.currentUser)

    useEffect(() => {
        if (props.currentUser?.signInUserSession) {
            initialFormState.userCognito.username = props.currentUser?.username;
            initialFormState.userCognito.email = props.currentUser?.attributes?.email;
            dispatch({type: types.SET_USERCOGNITO, value: initialFormState.userCognito});
            fetchUserDynamo(props.currentUser?.username);
        }
        if (id) {
            fetchUserDynamo(id);
        }

    }, [id, props.currentUser]);

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            dispatch({type: types.SET_AUTHSTATE, value: nextAuthState});
            dispatch({type: types.SET_USER, value: authData});
            props?.setCurrentUser(authData);
        });
    }, [])
    
    if (state.isLoading) {
        return (<div>
            <br/><br/><br/><br/><br/>
            <Spinner/>
        </div>)
    }
    
    async function fetchUserDynamo(username) {
        dispatch({type: types.SET_ISERROR, value: false });
        dispatch({type: types.SET_ISLOADING, value: true });
        const apiData = await API.graphql({ query: getUserByUsername, variables: {username} });
        if (apiData?.data?.getUserByUsername?.items?.length) {
            dispatch({type: types.SET_USERDYNAMO, value: apiData?.data?.getUserByUsername?.items[0]});
        } else {
            // dispatch({type: types.SET_ISERROR, value: 'Error when fetching post data'});
        }
        dispatch({type: types.SET_ISLOADING, value: false });
    };

    async function createUserDynamo(username) {
        const apiData = await API.graphql({ query: createUserMutation, variables: {input: {username }} });
        console.log('create user data', apiData?.data?.createUser)
    }
    async function updateUserDynamo() {
        const apiData = await API.graphql({ query: updateUserMutation, variables: {input: state.userDynamo} });
        console.log('create user data', apiData?.data?.updateUser)
    }

    async function updateUserCognito() {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
            'email': state.userCognito?.email
        });
    }

    return props.currentUser?.signInUserSession ? (
        <div><br/>
            <h3>Профиль</h3>
            <br/><br/>
            <div style={{flexDirection: 'row'}}>
                <label>Имя пользователя:  </label>
                <input
                    onChange={e => dispatch({type: types.SET_USERCOGNITO, value: {...state.userCognito, 'content': e.target.value} } )}
                    placeholder=""
                    value={state.userCognito.username}
                    disabled={true}
                />
            </div>
            <div style={{flexDirection: 'row'}}>
                <label>Эл. почта:  </label>
                <input
                    onChange={e => dispatch({type: types.SET_USERCOGNITO, value: {...state.userCognito, 'email': e.target.value} } )}
                    placeholder=""
                    value={state.userCognito.email}
                />
            </div>
            {/*<div style={{flexDirection: 'row'}}>*/}
            {/*    <label>Имя (публичное)</label>*/}
            {/*    <input*/}
            {/*        onChange={e => dispatch({type: types.SET_USERDYNAMO, value: {...state.userDynamo, 'name': e.target.value} } )}*/}
            {/*        placeholder="Содержание поста"*/}
            {/*        value={state.userDynamo.name}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div style={{flexDirection: 'row'}}>*/}
            {/*    <label>Био (коротко о себе)(публичное)</label>*/}
            {/*    <input*/}
            {/*        onChange={e => dispatch({type: types.SET_USERDYNAMO, value: {...state.userDynamo, 'bio': e.target.value} } )}*/}
            {/*        placeholder=""*/}
            {/*        value={state.userDynamo.bio}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div style={{flexDirection: 'row'}}>*/}
            {/*    <label>Город (публичное)</label>*/}
            {/*    <input*/}
            {/*        onChange={e => dispatch({type: types.SET_USERDYNAMO, value: {...state.userDynamo, 'city': e.target.value} } )}*/}
            {/*        placeholder=""*/}
            {/*        value={state.userDynamo.city}*/}
            {/*    />*/}
            {/*</div>*/}

            <br/><br/>
            <Button onClick={() => updateUserCognito() }>Обновить</Button>
            <br/><br/>
            <AmplifySignOut />
        </div>
    ) : (
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
    );
}

export default UserContainer;

