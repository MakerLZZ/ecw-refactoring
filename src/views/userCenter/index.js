import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import { Link } from 'react-router-dom';

export default class UserCenter extends Component {
	static propsTypes = {
		path: PropTypes.string
	};

	state = {
		activeMenuItem: 'cart'
	};

	componentDidMount() {
		// console.log(this.props.path);
		let urlArr = window.location.href.split('/');
		let activeStr = urlArr[urlArr.length - 1];
		this.handleClick(activeStr);
	}

	handleClick(str) {
		this.setState({ activeMenuItem: str });
	}

	render() {
		return (
			<div className="personal-center-model">
				<div className="sidebar">
					<ul>
						<li className="li">
							<span className="li-title">个人中心</span>
						</li>
						<li
							onClick={(str) => this.handleClick('cart')}
							className={`${this.state.activeMenuItem === 'cart' ? 'li-active' : 'li'}`}
							key="cart"
						>
							<Link to="/personal_center/cart">
								<span>购物车</span>
							</Link>
						</li>
						<li
							onClick={(str) => this.handleClick('order')}
							className={`${this.state.activeMenuItem === 'order' ? 'li-active' : 'li'}`}
							key="order"
						>
							<Link to="/personal_center/order">
								<span>我的订单</span>
							</Link>
						</li>
						<li
							onClick={(str) => this.handleClick('mine')}
							className={`${this.state.activeMenuItem === 'mine' ? 'li-active' : 'li'}`}
							key="mine"
						>
							<Link to="/personal_center/mine">
								<span>个人资料</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
