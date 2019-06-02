import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import TitleItem from './titleItem';
import BasicDetail from './basicDetail';
import Avatar from './avatar';
import Address from './address';

const titles = [
	{
		key: 0,
		id: 0,
		titleName: '基本资料',
		aClassName: 'a-active'
	},
	{
		key: 1,
		id: 1,
		titleName: '个人头像',
		aClassName: 'a'
	},
	{
		key: 2,
		id: 2,
		titleName: '我的地址',
		aClassName: 'a'
	}
];

export default class Mine extends Component {
	static propsTypes = {
		userDetail: PropTypes.object,
		modifyAvatar: PropTypes.func
	};

	state = {
		content: 0
	};

	handleClick(e) {
		titles.forEach((v, i) => {
			if (this.refs[`mineItem${i}`].state.id === e) {
				this.refs[`mineItem${i}`].aFocus();
			} else {
				this.refs[`mineItem${i}`].aUnFocus();
			}
		});
		this.setState({ content: e });
	}

	mapMineTitleItem = () => {
		return titles.map((v, i) => {
			return (
				<TitleItem
					key={v.key}
					titleName={v.titleName}
					aClassName={v.aClassName}
					id={v.id}
					ref={`mineItem${i}`}
					handleClick={(e) => this.handleClick(e)}
				/>
			);
		});
	};

	render() {
		let components = [
			<BasicDetail userDeatil={this.props.userDetail} handleClick={(e) => this.handleClick(e)} />,
			<Avatar
				avatar={this.props.userDetail.avatar}
				handleClick={(e) => this.handleClick(e)}
				modifyAvatar={(e) => this.props.modifyAvatar(e)}
			/>,
			<Address />
		];

		return (
			<div className="mine-page-model">
				<div className="mine-title">个人资料</div>
				<div className="mine-nav">
					<ul>{this.mapMineTitleItem()}</ul>
				</div>
				<div className="mine-center">{components[this.state.content]}</div>
			</div>
		);
	}
}
