import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Modal, Icon} from 'antd'
import './index.less'
import LoginBox from './loginBox'
import PropTypes from 'prop-types'

export default class VisitorNav extends Component {
    static propTypes = {
        className: PropTypes.string,
        login: PropTypes.func
    }

    state = {
        visible: false
    }

    showModal = () => {
        this.setState({visible: true})
    }

    hideModal = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="visitor-nav-box">
                    <ul className="visitor-ul">
                        <li className="login">
                            <a onClick={this.showModal}>亲，请登录</a>
                        </li>
                        <li className="register">
                            <Link to="/register">免费注册</Link>
                        </li>
                    </ul>
                    <ul className="visitor-ul">
                        <li className="home">
                            <Link to="/">网站首页</Link>
                        </li>
                        <li className="cart">
                            <Icon type="shopping-cart" className="shopping-cart-icon"/>
                            <a disabled>购物车</a>
                        </li>
                        <li className="person-center">
                            <a disabled>个人中心</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Modal
                        className="login-box"
                        maskClosable={false}
                        title="密码登录"
                        visible={this.state.visible}
                        onCancel={this.hideModal}
                        footer={null}
                        width="300px">
                        <LoginBox hideModal={() => this.hideModal()} login={this.props.login}/>
                    </Modal>
                </div>
            </div>
        );
    }
}