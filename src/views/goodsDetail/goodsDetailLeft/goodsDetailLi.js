import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoodsDetailLeftLi extends Component {
	state = {
		liClassName: ''
	};

	static propTypes = {
		handleMouseOver_: PropTypes.func
	};

	handleMouseOver = () => {
		var img = this.props.img_src;
		this.props.handleMouseOver_(img);
		this.setState({ liClassName: 'select' });
	};

	handleMouseOut = () => {
		this.setState({ liClassName: '' });
	};

	render() {
		return (
			<li className={this.state.liClassName}>
				<div className="pic">
					<div className="pic-a span-a" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
						<img src={this.props.img_src} alt="" />
					</div>
				</div>
				{this.props.children}
			</li>
		);
	}
}
