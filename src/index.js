import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './common/globalstyle'
import {BrowserRouter} from "react-router-dom";
import Amplify, {AuthModeStrategyType} from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure({
    ...awsconfig,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    }
});

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
