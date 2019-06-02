import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import GoodsDetailLeft from './goodsDetailLeft';
import GoodsDetailRight from './goodsDetailRight';
import Test from './test';

export default class GoodsDetailPageModel extends Component {
	static propsTypes = {
		loginSuccess: PropTypes.bool
	};
	render() {
		return (
			<div className="goods-detail-page" id={this.props.no}>
				<GoodsDetailLeft />
				<GoodsDetailRight loginSuccess={this.props.loginSuccess} />
				{/* <Test /> */}
			</div>
		);
	}
}
