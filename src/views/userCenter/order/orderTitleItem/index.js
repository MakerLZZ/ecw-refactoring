import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OrderTitleItem extends Component {
	state = {
		liClassName: this.props.liClassName,
		aClassName: this.props.aClassName,
		titleName: this.props.titleName
	};

	static propsTypes = {
		handleLiClick: PropTypes.func
	};

	handleClick(condition) {
		this.props.handleLiClick(condition);
	}

	thisFocus() {
		this.setState({
			liClassName: 'li li-focus',
			aClassName: 'indent-nav-a a-focus'
		});
	}

	thisUnFocus() {
		this.setState({
			liClassName: 'li',
			aClassName: 'indent-nav-a'
		});
	}

	render() {
		return (
			<li className={`${this.state.liClassName} span-a`}>
				<span className={this.state.aClassName} onClick={(condition) => this.handleClick(this.state.titleName)}>
					{this.state.titleName}
				</span>
				{this.props.children}
			</li>
		);
	}
}
