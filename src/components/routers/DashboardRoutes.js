import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Switch, Route } from 'react-router-dom';
import HeroScreen from '../heroes/HeroScreen';
import MarvelScreen from '../marvel/MarvelScreen';
import DcScreen from '../dc/DcScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3"> 
                <Switch> 
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>  
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;