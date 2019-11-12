import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import $ from 'jquery';
import Popper from 'popper.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'toastr/build/toastr.min.css';
import 'toastr/build/toastr.min';
import Login from '../src/components/Accounts/Login';
import SignUp from '../src/components/Accounts/Signup';
import CreatePost from './components/CreatePost/CreatePost';
import ShowPost from '../src/components/ShowPost/ShowPost';

require ('dotenv').config();


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route  path='/login' component={Login}/>
                <Route  path='/signup' component={SignUp}/>
                 <Route  path='/posts/:post_id' component={ShowPost}/> 
                <Route  path='/create-post' component={CreatePost}/>

                {/*<Route  path='/' component={}/> */}

                {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
