/*
 Copyright © 2020 BYTEPAL AI, LLC And Its Affiliates. All rights reserved.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TermsView from './TermsView.js'
import HowWorks from './HowWorks'
import PrivacyView from './PrivacyView.js'
import * as serviceWorker from './serviceWorker';
import { Route,  Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/terms" component={TermsView} />
        <Route exact path="/privacy" component={PrivacyView} />
        <Route exact path="/how" component={HowWorks} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
