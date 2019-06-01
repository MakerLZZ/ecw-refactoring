import React, { Component } from 'react';
import './index.less';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

export default class CartPageItem extends Component {
	state = {
		value: this.props.cartItemNum,
		price: this.props.cartItemNum * this.props.cartItemUnit,
		reduceClassName: 'reduce',
		increaseClassName: 'increase',
		tipClassName: 'goods-num-tip hidden',
		itemClassName: 'cart-item',
		checked: false
	};

	static propTypes = {
		checkSelectItem: PropTypes.func
	};

	componentWillMount() {
		if (this.state.value === 1) {
			this.setState({ reduceClassName: 'disable-reduce reduce' });
		}
	}

	onChange(o) {
		var unit = this.props.cartItemUnit;
		this.setState({ tipClassName: 'goods-num-tip hidden' });
		const reg = /^[0-9]*[1-9][0-9]*$/;
		var newValue = parseInt(o.target.value, 10);
		var minValue = 1;
		var maxValue = this.props.cartItemInventory;
		if (newValue >= maxValue) {
			//this.refs.numInput.select();
			this.setState(
				{
					value: maxValue,
					price: maxValue * unit,
					increaseClassName: 'disable-increase increase',
					reduceClassName: 'reduce',
					tipClassName: 'goods-num-tip'
				},
				this.props.checkSelectItem
			);
		} else if (newValue === minValue) {
			this.setState(
				{
					value: newValue,
					price: newValue * unit,
					reduceClassName: 'disable-reduce reduce',
					increaseClassName: 'increase'
				},
				this.props.checkSelectItem
			);
		} else if ((!isNaN(newValue) && reg.test(newValue)) || newValue.toString() === '') {
			this.setState(
				{
					value: newValue,
					price: newValue * unit,
					increaseClassName: 'increase'
				},
				this.props.checkSelectItem
			);
		}
	}

	handleReduceClick() {
		var unit = this.props.cartItemUnit;
		var currentValue = this.state.value;
		var minValue = 1;
		var maxValue = this.props.cartItemInventory;
		if (currentValue <= maxValue) {
			this.setState({ tipClassName: 'goods-num-tip hidden' });
		}
		var valueReduce = currentValue - 1;

		if (valueReduce > minValue) {
			this.setState(
				{
					value: valueReduce,
					price: valueReduce * unit
				},
				this.props.checkSelectItem
			);
		} else if (valueReduce === minValue) {
			this.setState(
				{
					value: valueReduce,
					price: valueReduce * unit,
					reduceClassName: 'disable-reduce reduce'
				},
				this.props.checkSelectItem
			);
		}
		if (valueReduce < maxValue) {
			this.setState({ increaseClassName: 'increase' });
		}
	}

	handleIncreaseClick() {
		var unit = this.props.cartItemUnit;
		var minValue = 1;
		var maxValue = this.props.cartItemInventory;
		var currentValue = this.state.value;
		if (currentValue <= maxValue) {
			this.setState({ tipClassName: 'goods-num-tip hidden' });
		}
		var valueIncrease = currentValue + 1;
		if (valueIncrease < maxValue) {
			this.setState(
				{
					value: valueIncrease,
					price: valueIncrease * unit
				},
				this.props.checkSelectItem
			);
		} else if (valueIncrease === maxValue) {
			this.setState(
				{
					value: valueIncrease,
					price: valueIncrease * unit,
					increaseClassName: 'disable-increase increase'
				},
				this.props.checkSelectItem
			);
		}
		if (valueIncrease > minValue) {
			this.setState({ reduceClassName: 'reduce' });
		}
	}

	deleteItem() {
		this.setState(
			{
				itemClassName: 'cart-item-hidden',
				checked: false
			},
			this.props.checkSelectItem
		);
		//异步删除购物车该条信息
	}

	checkboxChange(e) {
		var checked = e.target.checked;
		if (checked) {
			this.setState(
				{
					itemClassName: 'cart-item cart-item-checked',
					checked: true
				},
				this.props.checkSelectItem
			);
		} else {
			this.setState(
				{
					itemClassName: 'cart-item',
					checked: false
				},
				this.props.checkSelectItem
			);
		}
	}

	checked() {
		this.setState({
			itemClassName: 'cart-item cart-item-checked',
			checked: true
		});
	}

	unChecked() {
		this.setState({
			itemClassName: 'cart-item',
			checked: false
		});
	}

	iOrNChecked() {
		return this.state.checked;
	}

	render() {
		return (
			<div className={this.state.itemClassName} id={this.props.id}>
				<ul>
					<li className="detail">
						<div className="detail-row">
							<div className="detail-item detail-checkbox">
								<Checkbox checked={this.state.checked} onChange={(e) => this.checkboxChange(e)} />
							</div>
							<div className="detail-item detail-img">
								<img src={this.props.cartItemImgSrc} alt="" />
							</div>
							<div className="detail-item detail-title">{this.props.cartItemTitle}</div>
						</div>
					</li>
					<li className="unit">
						<div className="unit-row">
							<span>￥{this.props.cartItemUnit}</span>
						</div>
					</li>
					<li className="num">
						<div className="num-row">
							<div className="goods-num-box">
								<span className="goods-num-select">
									<span
										className={this.state.reduceClassName}
										onClick={() => this.handleReduceClick()}
									>
										-
									</span>
									<input
										ref="numInput"
										onChange={(e) => this.onChange(e)}
										type="text"
										className="text"
										value={this.state.value}
										maxLength="8"
									/>
									<span
										className={this.state.increaseClassName}
										onClick={() => this.handleIncreaseClick()}
									>
										+
									</span>
								</span>
							</div>
							<div className={this.state.tipClassName}>最多只能购买{this.props.cartItemInventory}件</div>
						</div>
					</li>
					<li className="price">
						<div className="price-row">
							<span>￥{this.state.price}</span>
						</div>
					</li>
					<li className="option">
						<div className="option-row">
							<span className="span-a" onClick={() => this.deleteItem()}>
								删除
							</span>
						</div>
					</li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
