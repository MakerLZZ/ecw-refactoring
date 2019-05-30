import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'

export default class UserCenter extends Component {
    state = {
        activeMenuItem: 'cart'
    }

    liActive = (str) => {
        this.setState({activeMenuItem: str})
    }

    render() {
        return (
            <div className='personal-center-model'>
                <div className='sidebar'>
                    <ul>
                        <li className='li'>
                            <span className='li-title'>个人中心</span>
                        </li>
                        <li
                            className={`${this.state.activeMenuItem === 'cart'
                            ? 'li-active'
                            : 'li'}`}
                            key="cart">
                            <Link to='/personal_center/cart'>
                                <span>购物车</span>
                            </Link>
                        </li>
                        <li
                            className={`${this.state.activeMenuItem === 'order'
                            ? 'li-active'
                            : 'li'}`}
                            key="order">
                            <Link to='/personal_center/order'>
                                <span>我的订单</span>
                            </Link>
                        </li>
                        <li
                            className={`${this.state.activeMenuItem === 'mine'
                            ? 'li-active'
                            : 'li'}`}
                            key="mine">
                            <Link to='/personal_center/mine'>
                                <span>个人资料</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};