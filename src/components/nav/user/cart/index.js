import React, { Component } from 'react';
import './index.less';
import MiniGoods from './goods';
import avater from '@/assets/images/nav/tool.png';
import { Link } from 'react-router-dom';

var msg = [
	{
		key: 0,
		img_src: avater,
		price: '12.00',
		title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		info: '净含量:225g'
	},
	{
		key: 1,
		img_src: avater,
		price: '13.00',
		title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		info: '净含量:225g'
	},
	{
		key: 2,
		img_src: avater,
		price: '14.00',
		title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		info: '净含量:225g'
	}
];

export default class Cart extends Component {
	MapLi() {
		return msg.map((v) => {
			return <MiniGoods img_src={v.img_src} price={v.price} title={v.title} info={v.info} key={v.key} />;
		});
	}

	render() {
		return (
			<div className="top-menu-cart">
				<div className="top-menu-cart-title">最近加入的宝贝:</div>
				<div className="top-menu-cart-ul">{this.MapLi()}</div>
				<div className="top-menu-cart-bottom">
					<p>
						<strong>购物车里还有20件宝贝</strong>
					</p>
				</div>
				<div className="top-menu-cart-bottom">
					<p>
						<Link
							to="/personal_center/cart"
							className="top-menu-cart-check"
							target=""
							style={{ textDecoration: 'none' }}
						>
							查看我的购物车
						</Link>
					</p>
				</div>
			</div>
		);
	}
}
