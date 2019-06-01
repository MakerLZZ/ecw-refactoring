import React, { Component } from 'react';
import './index.less';
import ClassifyFiltrate from './classifyFiltrate';
import SortRow from './sortRow';
import ShowGoods from './showGoods';

export default class MoreGoods extends Component {
	render() {
		return (
			<div className="more-goods-page">
				<ClassifyFiltrate />
				<SortRow />
				<ShowGoods />
			</div>
		);
	}
}
