import React, { Component } from 'react';

import './App.css';
import Home from './components/Home';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Input from './components/Input';

import Header from './components/Layout/Header';
import Drawer from './components/Layout/Drawer';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    state = {
        mobileSideDrawerOpen: false
    };

    toggleDrawer = () => {
        this.setState(prevState => ({
            mobileSideDrawerOpen: !prevState.mobileSideDrawerOpen
        }));
    };

    render() {
        return (
            <div className="App">
                <Header clickButton={this.toggleDrawer} sidebar={this.state.mobileSideDrawerOpen}/>
                <div
                    style={{
                        flexGrow: 1,
                        height: 430,
                        zIndex: 1,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%'
                    }}
                >
                    <Drawer
                        toggleDrawer={this.toggleDrawer}
                        closeDrawer={this.closeDrawer}
                        sidebar={this.state.mobileSideDrawerOpen}
                    />

<div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/buttons" component={Buttons} />
                        <Route path="/cards" component={Cards} />
                        <Route path="/input" component={Input} />
                    </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
