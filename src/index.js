import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <BrowserRouter basename="/demo/star-admin-free/react/template/demo_1/preview">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();