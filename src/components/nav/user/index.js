import {Menu, Icon} from 'antd';
import React, {Component} from 'react';
import './index.less';
import Avatar from './avater'
import Cart from './cart'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const SubMenu = Menu.SubMenu;
const cart_num = "29"

export default class UserNav extends Component {
    state = {
        current: 'mail'
    }

    static propTypes = {
        className: PropTypes.string,
        logout: PropTypes.func
    }

    handleClick = (e) => {
        this.setState({current: e.key});
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="user-nav-box">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                        <SubMenu title={< span > tb2308752_2013 < Icon type = "down" />< /span>}>
                            <Avatar logout={this.props.logout}/>
                        </SubMenu>
                    </Menu>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                        <Menu.Item key="home">
                            <Link to="/">网站首页</Link>
                        </Menu.Item>

                        <SubMenu
                            key="cart"
                            title={< span > <Icon type="shopping-cart"/>购物车 {cart_num} < Icon type = "down" /> </span>}>
                            <Cart/>
                        </SubMenu>
                        <Menu.Item key="personal_center">
                            <Link to="/personal_center/mine" target="">个人中心</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}