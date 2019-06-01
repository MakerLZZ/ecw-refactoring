import React, { Component } from 'react';
import './index.less';
import OrderSubmitForm from './orderSubmitForm';

export default class OrderSubmitModel extends Component {
	render() {
		return (
			<div className="order-submit-model">
				<div className="title-row">
					<div className="left">确认收货地址</div>
					<div className="right">
						<span className="span-a">管理收货地址</span>
					</div>
				</div>
				<div className="form-row">
					<OrderSubmitForm />
				</div>
			</div>
		);
	}
}
