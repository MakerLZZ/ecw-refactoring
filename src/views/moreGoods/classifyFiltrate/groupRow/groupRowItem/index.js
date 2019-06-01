import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';

export default class GroupRowItem extends Component {
	static propTypes = {
		handleConditionClick: PropTypes.func
	};

	render() {
		return (
			<div
				className="item span-a"
				onClick={() =>
					this.props.handleConditionClick(this.props.classifyName + this.props.text, this.props.groupRowId)}
			>
				<span className="text">{this.props.text}</span>
				{this.props.children}
			</div>
		);
	}
}
