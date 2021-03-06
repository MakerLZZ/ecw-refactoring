import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

export default class ShowMoreButton extends Component {
	static propTypes = {
		close: PropTypes.bool,
		handleClose: PropTypes.func
	};

	render() {
		return (
			<div className="show-more" onClick={this.props.handleClose}>
				<span>
					<span>{this.props.close ? '更多' : '收起'}</span>
					<Icon
						style={{
							fontSize: 12
						}}
						type={this.props.close ? 'down' : 'up'}
						className="show-more-down"
					/>
				</span>
			</div>
		);
	}
}
