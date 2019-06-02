import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import moment from 'moment';
import CountDown from '@/libs/countDown';
import './index.less';

export default class OrderDetail extends Component {
	state = {
		orderInfo: {}
	};
	componentWillMount() {
		const orderInfo_ = {
			address: '阿卡洁白的拉升的侃大山达拉斯可能打开咖喱开始的拿手的内裤奥斯卡了烦恼沙口路法拉盛开发来看阿卡丽',
			id: '4515133232515155',
			createTime: '2019-5-24 15:22:11'
		};
		this.setState({ orderInfo: orderInfo_ });
	}
	payOrder = () => {
		alert('支付订单');
	};
	cancleOrder = () => {
		alert('取消订单');
	};
	render() {
		const { orderInfo } = this.state;
		return (
			<div className="orderDetail-container">
				<div className="orderDetail-container-left">
					<div className="orderDetail-container-left-title">订单信息</div>
					<div className="orderDetail-container-left-item">
						<div>收货地址：</div>
						<div>{orderInfo.address}</div>
					</div>
					<div className="orderDetail-container-left-item">
						<div>订单编号：</div>
						<div>{orderInfo.id}</div>
					</div>
					<div className="orderDetail-container-left-item">
						<div>成交时间：</div>
						<div>{orderInfo.createTime}</div>
					</div>
				</div>
				<div className="orderDetail-container-right">
					<div className="orderDetail-container-right-status">
						<Icon type="info-circle" />
						<span>订单状态：商品已拍下，等待买家付款</span>
					</div>
					<div className="orderDetail-container-right-time">
						您还有
						<span>
							<CountDown
								endTime={moment(orderInfo.createTime).add(7, 'days').format('YYYY-MM-DD HH:mm:ss')}
							/>
						</span>
						来付款，超时订单自动关闭
					</div>
					<div className="orderDetail-container-right-submit">
						您可以
						<Button type="primary" onClick={this.payOrder}>
							付款
						</Button>
						<Button type="link" onClick={this.cancleOrder}>
							取消订单
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
