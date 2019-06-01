import React, { Component } from 'react';
import './index.less';
import GoodsDetailLi from './goodsDetailLi';
import lay_1 from '../../../assets/images/goodsDetail/lay_1.png';
import lay_2 from '../../../assets/images/goodsDetail/lay_2.png';
import lay_3 from '../../../assets/images/goodsDetail/lay_3.png';

var msg = [
	{
		key: 0,
		img_src: lay_1
	},
	{
		key: 1,
		img_src: lay_2
	},
	{
		key: 2,
		img_src: lay_3
	}
];

export default class GoodsDetailLeft extends Component {
	state = {
		topImg: lay_1
	};

	handleMouseOver_(e) {
		this.setState({
			topImg: e
		});
	}

	mapLi = () => {
		return msg.map((v) => {
			return (
				<GoodsDetailLi
					handleMouseOver_={(e) => this.handleMouseOver_(e)}
					liClassName={this.state.liClassName}
					key={v.key}
					img_src={v.img_src}
				/>
			);
		});
	};

	render() {
		return (
			<div className="goods-detail-left">
				<div className="top">
					<img src={this.state.topImg} alt="" />
				</div>
				<div className="bottom">
					<ul>{this.mapLi()}</ul>
				</div>
			</div>
		);
	}
}
