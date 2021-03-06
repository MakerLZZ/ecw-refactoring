import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import { Modal } from 'antd';
import { Link, withRouter } from 'react-router-dom';

class Avater extends Component {
	static propTypes = {
		userName: PropTypes.string,
		avatar: PropTypes.string,
		logout: PropTypes.func
	};

	state = {
		ModalText: '真的不再逛逛了吗？',
		visible: false
	};

	showModal = () => {
		this.setState({ visible: true, ModalText: '真的不再逛逛了吗？' });
	};

	handleOk = () => {
		this.setState({ ModalText: '正在注销', confirmLoading: true });
		setTimeout(() => {
			this.props.logout();
			this.setState({ visible: false, confirmLoading: false });
		}, 100);
		this.props.history.push('/');
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		const { confirmLoading, ModalText } = this.state;
		return (
			<div className="top-menu-avater">
				<div className="item-avater">
					<Link to="/personal_center/mine">
						<img src={this.props.avatar} alt="" />
					</Link>
				</div>
				<div className="item-text">
					<div className="item-text-detail">
						<Link to="/personal_center/mine" className="nav-avater-a">
							<span>信息管理</span>
						</Link>
					</div>
					<div className="item-text-logout">
						<span className="nav-avater-a span-a" onClick={this.showModal}>
							注销
						</span>
						<Modal
							title="温馨提示"
							visible={this.state.visible}
							onOk={this.handleOk}
							confirmLoading={confirmLoading}
							onCancel={this.handleCancel}
							width="250px"
							key={this.state.newKey}
							cancelText="取消"
							okText="确定"
						>
							<p>{ModalText}</p>
						</Modal>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Avater);
