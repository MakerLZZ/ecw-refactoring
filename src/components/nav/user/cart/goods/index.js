import React, { Component } from 'react';
import './index.less';

export default class MiniGoods extends Component {
	render() {
		return (
			<ul className="top-menu-cart-goods">
				<li className="top-menu-cart-item">
					<div className="mini-cart-img">
						<img src={this.props.img_src} alt="" />
					</div>
					<div
						className="mini-cart-count"
						style={{
							fontFamily: 'Arial',
							float: 'right'
						}}
					>
						￥
						<strong className="mini-cart-price h">{this.props.price}</strong>
					</div>
					<div className="mini-cart-title">
						<span
							className="span-a"
							style={{
								width: '162px',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis'
							}}
						>
							{this.props.title}
						</span>
					</div>
					<div className="mini-cart-del">
						<span className="span-a">删除</span>
					</div>
					<div className="mini-cart-info">
						<span>{this.props.info}</span>
					</div>
				</li>
				{this.props.children}
			</ul>
		);
	}
}
