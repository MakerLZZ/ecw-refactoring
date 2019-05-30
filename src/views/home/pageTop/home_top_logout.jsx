import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import UserAvatar from '../../../assets/images/home/default_avatar.png';
import PropTypes from 'prop-types'
class HomeTopLogout extends Component {

    static propsTypes = {
        topMenuVisitor: PropTypes.any
    }

    render() {
        return (
            <div className="user-area">
                <div className="user-photo">
                    <a>
                        <img src={UserAvatar} alt=""/>
                    </a>
                </div>
                <div className="user-name">
                    <div>
                        Hi 用户您好！您还未登陆！
                    </div>
                </div>
                <div className="indent-condition">
                    <div className="not-login">
                        <div className="not-login-button">
                            <a
                                onClick={()=>this.props.topMenuVisitor.showModal()}
                            >登录</a>
                        </div>
                        <div className="not-login-button">
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTopLogout