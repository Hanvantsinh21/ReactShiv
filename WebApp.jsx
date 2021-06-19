import React from 'react';
import 'bootstrap/js/dist/dropdown';                                                                                                                                                                                                                                                                 
import WebAbout from './WebAbout';
import WebContact from './WebContact';
import WebHome from './WebHome';
import WebService from './WebService';
import WebNav from './WebNav';
import WebFooter from './WebFooter';
import { Switch, Route, Redirect } from 'react-router-dom'

const WebApp = () =>{

    return (
        <>
            <WebNav /> 
            <Switch>
                   <Route exact path="/" component={WebHome} />
                   <Route exact path="/contact" component={WebContact} />
                   <Route exact path="/about" component={WebAbout} />
                   <Route exact path="/service" component={WebService} />
                   <Redirect to="/" />
            </Switch>
            <WebFooter />

        </>
    );
};

export default WebApp;