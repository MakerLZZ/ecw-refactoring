import React, { Component } from 'react';
import './index.less';
import { Pagination } from 'antd';
import OrderTitleItem from './orderTitleItem';
import OrderItem from './orderItem';
import Http from '@/http';

const orderTitles = [
	{
		key: 0,
		liClassName: 'li li-focus',
		aClassName: 'indent-nav-a a-focus',
		titleName: '所有订单',
		titleCode: 0
	},
	{
		key: 1,
		liClassName: 'li',
		aClassName: 'indent-nav-a',
		titleName: '待付款',
		titleCode: 1
	},
	{
		key: 2,
		liClassName: 'li',
		aClassName: 'indent-nav-a',
		titleName: '待发货',
		titleCode: 2
	},
	{
		key: 3,
		liClassName: 'li',
		aClassName: 'indent-nav-a',
		titleName: '待收货',
		titleCode: 3
	},
	{
		key: 4,
		liClassName: 'li',
		aClassName: 'indent-nav-a',
		titleName: '交易成功',
		titleCode: 4
	}
];

export default class Order extends Component {
	state = {
		getOrders: [],
		orders: [],
		tatal: 0,
		orderIndex: 0
	};

	componentWillMount() {
		Http.get('/getOrderList').then((res) => {
			this.setState({
				getOrders: res.data.data,
				orders: res.data.data,
				tatal: res.data.data.length
			});
		});
	}

	handleLiClick(condition) {
		// debugger;
		orderTitles.forEach((v, i) => {
			if (this.refs[`item${i}`].state.titleCode === condition) {
				this.refs[`item${i}`].thisFocus();
			} else {
				this.refs[`item${i}`].thisUnFocus();
			}
		});

		// var newOrders = [] orders.forEach((v,i)=>{     if(v.condition===condition){
		//     newOrders.push(orders[i])     } })

		if (condition === 0) {
			this.setState({
				orders: this.state.getOrders,
				tatal: this.state.getOrders.length,
				orderIndex: 0
			});
		} else {
			var newOrders = this.state.getOrders.filter((v) => v.condition === condition);
			this.setState({
				orders: newOrders,
				tatal: newOrders.length,
				orderIndex: 0
			});
		}
	}

	mapOrderTitleItem = () => {
		return orderTitles.map((v, i) => {
			return (
				<OrderTitleItem
					key={v.key}
					liClassName={v.liClassName}
					aClassName={v.aClassName}
					titleName={v.titleName}
					titleCode={v.titleCode}
					ref={`item${i}`}
					handleLiClick={(condition) => this.handleLiClick(condition)}
				/>
			);
		});
	};

	mapOrderItem = () => {
		var oldOrders = this.state.orders;
		var pageSize = 10;
		var orderIndex = this.state.orderIndex;
		var flag = 0;

		if (oldOrders.length - orderIndex <= pageSize) {
			pageSize = oldOrders.length - orderIndex;
		}
		var newOrders = [];
		for (var i = orderIndex; i < orderIndex + pageSize; i++) {
			newOrders[flag] = oldOrders[i];
			flag++;
		}

		return newOrders.map((v, i) => {
			return (
				<OrderItem
					key={v.key}
					date={v.date}
					no={v.no}
					img_src={v.img_src}
					detail={v.detail}
					price={v.price}
					num={v.num}
					condition={v.condition}
					condition_button={v.condition_button}
				/>
			);
		});
	};

	handlePagination = (page, pageSize) => {
		var index = (page - 1) * pageSize;
		this.setState({ orderIndex: index });
	};

	render() {
		return (
			<div className="order-page-model">
				<div className="indent-nav">
					<ul>{this.mapOrderTitleItem()}</ul>
				</div>
				<div className="indent-nav-line" />
				<div className="title-row">
					<ul>
						<li className="li-0">宝贝</li>
						<li className="li-1">单价</li>
						<li className="li-1">数量</li>
						<li className="li-1">实付款</li>
						<li className="li-2">交易状态</li>
						<li className="li-2">交易操作</li>
					</ul>
				</div>
				<div className="indent-list">{this.mapOrderItem()}</div>

				<Pagination
					className="page-row"
					total={this.state.tatal}
					defaultPageSize={8}
					onChange={this.handlePagination}
				/>
			</div>
		);
	}
}
