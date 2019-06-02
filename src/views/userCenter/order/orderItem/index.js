import React, { Component } from 'react';
import './index.less';
import { Link, withRouter } from 'react-router-dom';
import { message } from 'antd';

class OrderItem extends Component {
	state = {
		condition: '',
		conditionButton: '',
		conditionButtonClassName: 'condition-button',
		conditionStrClassName: 'condition-str'
	};

	componentWillMount() {
		let condition = this.props.condition;
		if (condition === 4) {
			this.setState({
				conditionButtonClassName: 'condition-button-hidden',
				conditionStrClassName: 'condition-str-change'
			});
		}
		let conditionStr = this.enumCondition(condition);
		let btnStr = this.enumBtnStr(condition);
		this.setState({
			condition: conditionStr,
			conditionButton: btnStr
		});
	}

	enumCondition(index) {
		let enumCondStrObj = {
			1: '待付款',
			2: '待发货',
			3: '待收货',
			4: '交易成功'
		};
		return enumCondStrObj[index];
	}

	enumBtnStr(index) {
		let enumBtnStrObj = {
			1: '付款',
			2: '提醒发货',
			3: '收货',
			4: ''
		};
		return enumBtnStrObj[index];
	}

	handleClick(cond) {
		if (cond === 1) {
			this.props.history.push('/order_detail');
		}
		if (cond === 2) {
			message.success('已提醒');
		}
		if (cond === 3) {
			message.success('收货成功');
		}
	}

	render() {
		return (
			<div className="order-item-box">
				<div className="number-row">
					<span className="date">{this.props.date}</span>
					<span>订单号：{this.props.no}</span>
				</div>
				<div className="detail-row">
					<ul>
						<li className="li-0">
							<div className="img">
								<img src={this.props.img_src} alt="" />
							</div>
							<div className="detail">{this.props.detail}</div>
						</li>
						<li className="li-1">
							<span>￥</span>
							<span>{this.props.price}</span>
						</li>
						<li className="li-1">
							<span>{this.props.num}</span>
						</li>
						<li className="li-1 total">
							<span>￥</span>
							<span>{(this.props.price * this.props.num).toFixed(2)}</span>
						</li>
						<li className="li-2 condition">
							<div className="li-2-condition">
								<div className={this.state.conditionStrClassName}>
									<span>{this.state.condition}</span>
								</div>
								<div className={this.state.conditionButtonClassName}>
									<button onClick={(condition) => this.handleClick(this.props.condition)}>
										{this.state.conditionButton}
									</button>
								</div>
							</div>
						</li>
						<li className="li-2 check-detail">
							<Link to="/order_detail">
								<span className="span-a">查看详情</span>
							</Link>
						</li>
					</ul>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(OrderItem);
