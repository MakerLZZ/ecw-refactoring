import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';

export default class GroupTag extends Component {
	state = {
		iconColor: '#666'
	};

	render() {
		return (
			<div className="tag">
				{this.props.text}
				<Icon type="close" className="tag-icon" />
			</div>
		);
	}
}
