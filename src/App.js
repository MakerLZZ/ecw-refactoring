import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import OrderDetail from './views/orderDetail'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit
                        <code>src/App.js</code>
                        and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                    <Button type="primary">Button</Button>
                </header> */}
                <Router>
                    <div>顶部</div>
                    <Route path="/orderDetail" render={() => <OrderDetail/>}/>
                </Router>
            </div>
        )
    };
}

export default App;
