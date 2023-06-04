import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import HomeScreen from "./App/Screen/Home/Home.Screen";
import LoginScreen from "./App/Screen/Login/Login.Screen";

function App() {

    return (
        <div>
            <Switch>
                <Route
                    path="/home"
                    children={<HomeScreen />}
                />
                <Route path="/login" children={<LoginScreen />}/>
                <Redirect to="home"/>
            </Switch>
        </div>
    );
}

export default App;
