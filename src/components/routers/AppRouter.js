import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar } from '../ui/Navbar';
import LoginScreen from '../login/LoginScreen';
import MarvelScreen from '../marvel/MarvelScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route  path="/" component={ DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;