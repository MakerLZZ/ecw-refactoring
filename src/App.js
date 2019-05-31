import React, {Component} from 'react';
import './App.less';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Layout, message} from 'antd';
import SerachRow from './components/searchRow'
import FooterRow from './components/footerRow'
import UserNav from './components/nav/user';
import VisitorNav from './components/nav/visitor'

import Home from './views/home'
import MoreGoods from './views/moreGoods'
import GoodsDetail from './views/goodsDetail'

import Register from './views/register'

import UserCenter from './views/userCenter'
import Cart from './views/userCenter/cart'
import Mine from './views/userCenter/mine'

import Order from './views/userCenter/order'
import OrderSubmit from './views/userCenter/order/orderSubmit'
import OrderDetail from './views/userCenter/order/orderDetail'

const {Header, Content} = Layout;
export default class App extends Component {
    state = {
        loginSuccess: false,
        needFooter: true
    }

    hideFooter() {
        this.setState({needFooter: false})
    }

    showFooter() {
        this.setState({needFooter: true})
    }

    setTopMenuVisitor(topMenuVisitor) {
        if (!this.state.topMenuVisitor) 
            this.setState({topMenuVisitor})
    }

    setPerCenPageModel(perCenPageModel) {
        if (!this.state.perCenPageModel) 
            this.setState({perCenPageModel})
    }

    login() {
        this.setState({
            loginSuccess: true
        }, () => {
            //回调函数
        });
    }

    logout() {
        message.success('注销成功！');
        this.setState({loginSuccess: false});
    }

    navFooterHidden(nowPath) {
        const path = '/register'
        if (nowPath === path) {
            this.setState({navFooterHidden: true})
        }
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <Layout className="app-layout">
                        <Header className="app-header">
                            <div className="app-header-box">
                                <VisitorNav
                                    ref={this
                                    .setTopMenuVisitor
                                    .bind(this)}
                                    className={this.state.loginSuccess
                                    ? 'visitor-nav-hidden'
                                    : 'visitor-nav'}
                                    login={() => this.login()}/>
                                <UserNav
                                    className={this.state.loginSuccess
                                    ? 'user-nav'
                                    : 'user-nav-hidden'}
                                    logout={() => this.logout()}/>
                            </div>
                        </Header>
                        <Content className="app-content">
                            <SerachRow/>
                            <div className="app-content-container">
                                <div className="app-content-box">
                                    <Route
                                        exact
                                        path="/"
                                        render={() => <Home
                                        loginSuccess={this.state.loginSuccess}
                                        topMenuVisitor={this.state.topMenuVisitor}/>}/>
                                    <Route exact path="/moreGoods" component={MoreGoods}/>
                                    <Route path="/orderDetail" render={() => <OrderDetail/>}/>
                                    <Route
                                        exact
                                        path="/goods_detail/:id"
                                        render={({match}) =>< GoodsDetail no = {
                                        match.params.id
                                    }
                                    loginSuccess = {
                                        this.state.loginSuccess
                                    } />}/>
                                    <Route
                                        exact
                                        path="/register"
                                        render={() => <Register
                                        showFooter={this
                                        .showFooter
                                        .bind(this)}
                                        hideFooter={this
                                        .hideFooter
                                        .bind(this)}
                                        topMenuVisitor={this.state.topMenuVisitor}/>}/>
                                    <Route
                                        exact
                                        path="/personal_center/:str"
                                        render={() => <UserCenter
                                        ref={this
                                        .setPerCenPageModel
                                        .bind(this)}/>}/>
                                    <Route
                                        path="/personal_center/cart"
                                        render={() => <Cart perCenPageModel={this.state.perCenPageModel}/>}/>
                                    <Route
                                        path="/personal_center/order"
                                        render={() => <Order perCenPageModel={this.state.perCenPageModel}/>}/>
                                    <Route
                                        path="/personal_center/mine"
                                        render={() => <Mine perCenPageModel={this.state.perCenPageModel}/>}/>
                                    <Route path="/order_submit" render={() => <OrderSubmit/>}/>
                                </div>
                            </div>
                        </Content>
                        <FooterRow/>
                    </Layout>
                </Router>
            </div>
        )
    };
}