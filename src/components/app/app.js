import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route 
                    path='/'
                    component={MainPage}
                    exact/>
                    
                <Route 
                    path='/cart'
                    component={CartPage}/>
            </Switch>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default App;