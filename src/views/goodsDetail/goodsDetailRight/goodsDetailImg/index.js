import React, { Component } from 'react';
import './index.less';

export default class GoodsDetailRightImg extends Component {
	state = {
		animateClassName: ''
	};

	handleMouseOver = (e) => {
		this.setState({ animateClassName: 'animated bounce' });
	};
	handleMouseOut = () => {
		this.setState({ animateClassName: '' });
	};

	render() {
		return (
			<div>
				<div className="span-a">
					<img
						className={this.state.animateClassName}
						onMouseOver={this.handleMouseOver}
						onMouseOut={this.handleMouseOut}
						src={this.props.src}
						alt=""
					/>
					<span>{this.props.title}</span>
					{this.props.children}
				</div>
			</div>
		);
	}
}
