import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal, Icon } from 'antd';
import LoginBox from './loginBox';

export default class VisitorNav extends Component {
	static propTypes = {
		className: PropTypes.string,
		login: PropTypes.func
	};

	state = {
		visible: false
	};

	showModal = () => {
		this.setState({ visible: true });
	};

	hideModal = () => {
		this.setState({ visible: false });
	};

	render() {
		return (
			<div className={this.props.className}>
				<div className="visitor-nav-box">
					<ul className="visitor-ul">
						<li className="login">
							<span onClick={this.showModal}>亲，请登录</span>
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
							<Icon type="shopping-cart" className="shopping-cart-icon" />
							<span>购物车</span>
						</li>
						<li className="person-center">
							<span>个人中心</span>
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
						width="300px"
					>
						<LoginBox hideModal={() => this.hideModal()} login={this.props.login} />
					</Modal>
				</div>
			</div>
		);
	}
}
