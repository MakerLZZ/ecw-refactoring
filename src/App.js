import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Button} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Layout} from 'antd';
import SerachRow from './components/searchRow'
import OrderDetail from './views/orderDetail'
import FooterRow from './components/footerRow'

const {Header, Content, Footer} = Layout;
class App extends Component {
    render() {
        return (
            <div className="app">
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
                    <Layout>
                        <Header className="app-header">顶部</Header>
                        <Content className="app-content">
                            <SerachRow/>
                            <div className="app-content-box">
                                <Route path="/orderDetail" render={() => <OrderDetail/>}/>
                            </div>
                        </Content>
                        <FooterRow/>
                    </Layout>
                </Router>
            </div>
        )
    };
}

export default App;
