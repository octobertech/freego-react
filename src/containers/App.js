import React, { useState, useEffect } from 'react';
import './App.css';
import { Auth } from 'aws-amplify';
import { Route, Switch, useHistory} from 'react-router-dom';
import BlogsContainer from './BlogsContainer';
import FormContainer from "./FormContainer";
import UserContainer from "./UserContainer";
import AboutContainer from "./AboutContainer";

import {
    Container, NavButton, Main, Header, Footer, LogoText, LogoDesc
} from '../common/styled';


function App() {
    const [currentCity, setCurrentCity] = useState(JSON.parse(localStorage.getItem("currentCity")));
    const [currentUser, setCurrentUser] = useState();

    let history = useHistory();
    const goToCities = () => {
        localStorage.removeItem('currentCity');
        setCurrentCity(null);
        history.push('/')
    }
    useEffect(() => {
        if (!currentUser) {
            (async () => {
                const user = await Auth.currentAuthenticatedUser();
                if (user?.username) {
                    setCurrentUser(user);
                }
            })()
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container onSubmit={(e) => handleSubmit(e)}>
            <Header>
                <LogoText href={"/"}>FreeGo</LogoText>
                <LogoDesc>Приложение для пожертвования вещей и взаимопомощи</LogoDesc>
                <h4 onClick={() => goToCities()}>{currentCity?.name}</h4>
            </Header>
            <Main>
                    <Switch>
                        <Route exact path="/" render={(props) => <BlogsContainer {...props} currentCity={currentCity} setCurrentCity={setCurrentCity} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/about" render={(props) => <AboutContainer {...props} currentCity={currentCity} setCurrentCity={setCurrentCity}  /> } />
                        <Route exact path="/new" render={(props) => <FormContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/new/:parent" render={(props) => <FormContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/new/:parent/:type" render={(props) => <FormContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/new/:parent/:type/:id" render={(props) => <FormContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/user" render={(props) => <UserContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/user/:id" render={(props) => <UserContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />
                        <Route exact path="/:id" render={(props) => <BlogsContainer {...props} currentCity={currentCity} setCurrentCity={setCurrentCity} currentUser={currentUser} setCurrentUser={setCurrentUser} /> } />

                    </Switch>

            </Main>
            <Footer><NavButton onClick={() => history.goBack()}>{'<'} Назад</NavButton><NavButton  style={{marginLeft: '10px'}} onClick={() => history.push('/user')}>Профиль</NavButton>
               </Footer>

        </Container>
    );
}

export default App;

