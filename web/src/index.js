import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { Home } from './Home';
import { About } from './About'
import { Apparel } from './Apparel'
import { PageHeader } from './shared/PageHeader'
import { PageFooter } from './shared/PageFooter'
import { Collections } from './Collections'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './fonts/fonts.css'
import './index.css'

ReactDOM.render (
    <Provider>
        <Router>
            <div>
                <PageHeader />
                <Route exact path="/" component={Home} />
                <Route exact path="/about-shakeema-reid" component={About} />
                <Route exact path="/apparel" component={Apparel} />
                <Route exact path="/collections" component={Collections} />
                <PageFooter />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
