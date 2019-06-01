import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import UserAvatar from '@/assets/images/home/default_avatar.png';
import PropTypes from 'prop-types';
class HomeTopLogout extends Component {
	static propsTypes = {
		topMenuVisitor: PropTypes.any
	};

	render() {
		return (
			<div className="user-area">
				<div className="user-photo">
					<div>
						<img src={UserAvatar} alt="" />
					</div>
				</div>
				<div className="user-name">
					<div>Hi 用户您好！您还未登陆！</div>
				</div>
				<div className="indent-condition">
					<div className="not-login">
						<div className="not-login-button">
							<Button type="primary" onClick={() => this.props.topMenuVisitor.showModal()}>
								登录
							</Button>
						</div>
						<div className="not-login-button">
							<Link to="/register">
								<Button type="primary">注册</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeTopLogout;
