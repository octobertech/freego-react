import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import './App.css';
import Amplify, { API, graphqlOperation, Auth, AuthModeStrategyType } from 'aws-amplify';
//import '@aws-amplify/ui-react/styles.css';
import {listBlogs, getBlog, blogsCities} from '../graphql/queries';

import {
    createBlog as createBlogMutation,
    deleteBlog as deleteBlogMutation,
    deleteComment as deleteCommentMutation, deletePost as deletePostMutation
} from '../graphql/mutations';
import {onCreateBlogByBlogId, onUpdateBlogByBlogId, onCreatePostByBlogId, onUpdatePostByBlogId,
    onCreateCommentByPostId, onUpdateCommentByPostId} from "../graphql/subscriptions";
import {
    Container, Button, SmallButton, Title, Main, Header, Spinner, InputContainer, AddButton, SetListContainer,
    Input, EmptyListMessage, SetContainer, StyledModal, SpecialModalBackground, ErrorMessage, Footer
} from '../common/styled';
import awsconfig from "../../src/aws-exports";


function AboutContainer(props) {

    let history = useHistory();

    return (
        <div>
            <br />

            <h3>О проекте</h3><br/>
            <p style={{fontSize: '13px'}}>FreeGo - это новое веб приложение и сообщество которое помогает кому угодно пожертвовать свои ненужные (или нужные) вещи, а также оказать всякую помощь всем тем кто в этом нуждается. Вы можете создать тему с пост-описанием в соответствующей категории (Отдам / Приму), а люди могут создавать комментарии как заявки на ваше предложение указывая информацию о себе и контактные данные (требуется регистрация через почту). Также есть телеграм канал <a href={'https://t.me/freegokanal'} target={'_blank'}>https://t.me/freegokanal</a>  куда будут копироваться все новые объявления и где можно тоже оставлять свои заявки в комментариях и связываться в случае интереса. </p>
            <br/>
            <p style={{fontSize: '13px'}}>FreeGo - это некоммерческий проект который делается на собственные средства команды, поэтому мы ищем волонтеров и открыты любой поддержке всех неравнодушных.</p>
            <br/><br/>
            <div>
                <p style={{fontSize: '13px'}}>© 2021 freegou.org</p><br/>
                <p style={{fontSize: '13px'}}>Телеграм:</p>
                <p style={{fontSize: '13px'}}><a href={"https://t.me/freegokanal"} target={"_blank"}>https://t.me/freegokanal</a></p>

            </div>

        </div>

    );
}

export default AboutContainer;

