import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import { Checkbox, message } from 'antd';
import CartItem from './cartItem';
import GoodsImg from '../../../assets/images/cart/goods_img.png';
import { Link } from 'react-router-dom';
// import $ from 'jquery'

const cartAll = [
	{
		key: 0,
		id: '0',
		cartItemImgSrc: GoodsImg,
		cartItemTitle: 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
		cartItemUnit: 19.0,
		cartItemNum: 10,
		cartItemInventory: 520
	},
	{
		key: 1,
		id: '1',
		cartItemImgSrc: GoodsImg,
		cartItemTitle: 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
		cartItemUnit: 1.0,
		cartItemNum: 120,
		cartItemInventory: 250
	},
	{
		key: 2,
		id: '2',
		cartItemImgSrc: GoodsImg,
		cartItemTitle: 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
		cartItemUnit: 9.0,
		cartItemNum: 1,
		cartItemInventory: 20
	},
	{
		key: 3,
		id: '3',
		cartItemImgSrc: GoodsImg,
		cartItemTitle: 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
		cartItemUnit: 91.0,
		cartItemNum: 12,
		cartItemInventory: 20
	}
];

export default class CartPageModel extends Component {
	static propsTypes = {
		perCenPageModel: PropTypes.any
	};

	state = {
		allChecked: false,
		spanIconClassName: 'right-span-icon-hidden',
		submitButtonClassName: 'submit-button',
		submitButtonAbleClassName: 'submit-button-able-hidden',
		selectRowClassName: 'cart-submit-row',
		selectedNum: 0,
		tatalPrice: 0.0
	};

	componentWillMount() {
		this.props.perCenPageModel ? this.props.perCenPageModel.liActive('cart') : message.info('发生了未知的错误！');
	}

	//全选
	onChange(e) {
		if (e.target.checked) {
			cartAll.forEach((v, i) => {
				this.refs[`item${i}`].checked();
			});
			this.setState(
				{
					allChecked: true,
					spanIconClassName: 'right-span-icon',
					submitButtonClassName: 'submit-button-hidden',
					submitButtonAbleClassName: 'submit-button-able'
				},
				() => this.checkSelectItem()
			);
		} else {
			cartAll.forEach((v, i) => {
				this.refs[`item${i}`].unChecked();
			});
			this.setState(
				{
					allChecked: false,
					spanIconClassName: 'right-span-icon-hidden',
					submitButtonClassName: 'submit-button',
					submitButtonAbleClassName: 'submit-button-able-hidden'
				},
				() => this.checkSelectItem()
			);
		}
	}

	onChangeA() {
		if (this.state.allChecked) {
			cartAll.forEach((v, i) => {
				this.refs[`item${i}`].unChecked();
			});
			this.setState(
				{
					allChecked: false,
					spanIconClassName: 'right-span-icon-hidden',
					submitButtonClassName: 'submit-button-hidden',
					submitButtonAbleClassName: 'submit-button-able'
				},
				() => this.checkSelectItem()
			);
		} else {
			cartAll.forEach((v, i) => {
				this.refs[`item${i}`].checked();
			});
			this.setState(
				{
					allChecked: true,
					spanIconClassName: 'right-span-icon',
					submitButtonClassName: 'submit-button',
					submitButtonAbleClassName: 'submit-button-able-hidden'
				},
				() => this.checkSelectItem()
			);
		}
	}

	mapCartItem = () => {
		return cartAll.map((v, i) => {
			return (
				<CartItem
					id={v.id}
					cartItemImgSrc={v.cartItemImgSrc}
					cartItemTitle={v.cartItemTitle}
					cartItemUnit={v.cartItemUnit}
					cartItemNum={v.cartItemNum}
					cartItemInventory={v.cartItemInventory}
					key={v.key}
					ref={`item${i}`}
					checkSelectItem={() => this.checkSelectItem()}
				/>
			);
		});
	};

	iOrNAllChecked = () => {
		var allItemChecked = true;
		var haveItemChecked = false;
		cartAll.forEach((v, i) => {
			if (!this.refs[`item${i}`].iOrNChecked()) {
				allItemChecked = false;
			}
			if (this.refs[`item${i}`].iOrNChecked()) {
				haveItemChecked = true;
			}
		});

		if (allItemChecked) {
			this.setState({ allChecked: true });
		} else {
			this.setState({ allChecked: false });
		}

		if (haveItemChecked) {
			this.setState({
				spanIconClassName: 'right-span-icon',
				submitButtonClassName: 'submit-button-hidden',
				submitButtonAbleClassName: 'submit-button-able'
			});
		} else {
			this.setState({
				spanIconClassName: 'right-span-icon-hidden',
				submitButtonClassName: 'submit-button',
				submitButtonAbleClassName: 'submit-button-able-hidden'
			});
		}
	};

	//计算选择了多少件商品
	staSelectedNum = () => {
		var num = 0;
		cartAll.forEach((v, i) => {
			if (this.refs[`item${i}`].iOrNChecked()) {
				++num;
			}
		});
		this.setState({ selectedNum: num });
	};

	//计算选择的商品的总价
	staTatalPrice = () => {
		var tatalPrice = 0.0;
		cartAll.forEach((v, i) => {
			if (this.refs[`item${i}`].iOrNChecked()) {
				tatalPrice += this.refs[`item${i}`].state.price;
			}
		});
		this.setState({ tatalPrice: tatalPrice });
	};

	checkSelectItem() {
		this.iOrNAllChecked();
		this.staTatalPrice();
		this.staSelectedNum();
	}

	// scrollRoll=()=>{     var botLocDiv = this.refs.bottom_location;
	// $(window).scroll( ()=> {         if ($(botLocDiv).offset().top +
	// $(botLocDiv).height() - window.innerHeight > document.body.scrollTop) {
	//       this.setState({                 selectRowClassName:'cart-submit-row'
	//          })         }         else {             this.setState({
	//    selectRowClassName:'cart-submit-row row-unfixed'             })         }
	//    }) }

	cartSubmit() {}

	componentDidMount() {
		// this.scrollRoll();
	}

	render() {
		return (
			<div className="cart-page-model">
				<div className="cart-title">
					<ul>
						<li className="all">
							<Checkbox onChange={(e) => this.onChange(e)} checked={this.state.allChecked} />
							<span className="all-a span-a" onClick={() => this.onChangeA()}>
								全选
							</span>
						</li>
						<li className="goods-detail">商品信息</li>
						<li className="unit">单价</li>
						<li className="num">数量</li>
						<li className="price">金额</li>
						<li className="option">操作</li>
					</ul>
				</div>
				<div className="clear-both" />
				<div className="cart-item-box">{this.mapCartItem()}</div>
				<div className="cart-bottom-border" ref="bottom_location" />
				<div className={this.state.selectRowClassName}>
					<div className="left">
						<Checkbox onChange={(e) => this.onChange(e)} checked={this.state.allChecked} />
						<span className="select-all span-a" onClick={() => this.onChangeA()}>
							全选
						</span>
					</div>
					<div className="left">
						<span className="delete-all span-a">删除</span>
					</div>
					<div className="right submit">
						<Link to="/personal_center/cart" className={this.state.submitButtonClassName}>
							结&nbsp;算
						</Link>
						<Link to="/order_submit" className={this.state.submitButtonAbleClassName}>
							结&nbsp;算
						</Link>
					</div>
					<div className="right">
						<span className="right-span-title">合计&nbsp;:</span>
						<span className={this.state.spanIconClassName}>￥</span>
						<span className="right-span-num">{this.state.tatalPrice}</span>
					</div>
					<div className="right selected-num">
						<span>已选商品</span>
						<span className="right-span-num">{this.state.selectedNum}</span>
						<span>件</span>
					</div>
				</div>
			</div>
		);
	}
}
