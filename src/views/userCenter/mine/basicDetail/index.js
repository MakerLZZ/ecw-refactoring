import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import Avatar from '@/assets/images/mine/avatar.png';
import BasicDetailForm from './basicDetailForm';

export default class BasicDetailModel extends Component {
	static propsTypes = {
		handleClick: PropTypes.func
	};

	state = {
		hoverClassName: 'img-hidden hover-hidden'
	};

	handleLiClick(id) {
		this.props.handleClick(id);
	}

	handleMouseOver = () => {
		this.setState({ hoverClassName: 'img-hidden hover' });
	};
	handleMouseOut = () => {
		this.setState({ hoverClassName: 'img-hidden hover-hidden' });
	};
	render() {
		return (
			<div className="basic-detail-box">
				<div className="top">
					<div className="row row-title">
						<span>亲爱的xxxxxxxxx，填写真实的资料，有助于好友找到你哦</span>
					</div>
					<div className="row row-img">
						<div className="row-img-item">
							当前头像<span className="space">:</span>
						</div>
						<div
							className="row-img-item img-box"
							onMouseOver={this.handleMouseOver}
							onMouseOut={this.handleMouseOut}
						>
							<div className="img-a span-a">
								<img src={Avatar} alt="" />
							</div>
							<div
								className={`${this.state.hoverClassName} span-a`}
								onClick={(id) => this.handleLiClick(1)}
							>
								编辑头像
							</div>
						</div>
					</div>
				</div>
				<div className="form">
					<BasicDetailForm />
				</div>
			</div>
		);
	}
}
