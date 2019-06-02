import React, { Component } from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import OrderSubmitForm from './orderSubmitForm';

export default class OrderSubmitModel extends Component {
	render() {
		return (
			<div className="order-submit-model">
				<div className="title-row">
					<div className="left">确认收货地址</div>
					<div className="right">
						<Link to="/personal_center/mine">
							<span className="span-a">管理收货地址</span>
						</Link>
					</div>
				</div>
				<div className="form-row">
					<OrderSubmitForm />
				</div>
			</div>
		);
	}
}
