import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomeTopLogin extends Component {
	static propsTypes = {
		avatar: PropTypes.string,
		userName: PropTypes.string
	};
	render() {
		return (
			<div className="user-area">
				<div className="user-photo">
					<Link to="/personal_center/mine">
						<img src={this.props.avatar} alt="" />
					</Link>
				</div>
				<div className="user-name">
					<div>
						Hi&nbsp;<span>${this.props.userName}</span>&nbsp;您好！
					</div>
				</div>
				<div className="indent-condition">
					<div className="indent-condition">
						<Link to="/personal_center/order">
							<div className="indent-num">1</div>
							<div>待收货</div>
						</Link>
						<Link to="/personal_center/order">
							<div className="indent-num">2</div>
							<div>待发货</div>
						</Link>
						<Link to="/personal_center/order">
							<div className="indent-num">3</div>
							<div>待付款</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeTopLogin;
