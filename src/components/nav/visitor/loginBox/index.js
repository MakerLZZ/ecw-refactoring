import React, { Component } from 'react';
import './index.less';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, message } from 'antd';
import Http from '@/http';

const FormItem = Form.Item;

class LoginBox extends Component {
	static propTypes = {
		hideModal: PropTypes.func,
		login: PropTypes.func
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let userNameInput = values.userName;
				let passwordInput = values.password;
				let accounts = JSON.parse(localStorage.getItem('accounts'));
				if (accounts) {
					let acc = accounts.find((v) => v.user === userNameInput);
					if (acc && acc.pass !== passwordInput) {
						message.error('密码输错了哟，亲！');
					} else if (acc && acc.pass === passwordInput) {
						Http.get('/getUserDetail')
							.then((res) => {
								console.log(res);
							})
							.catch((err) => {
								console.log(err);
							});
						message.success('欢迎来到吃货世界！');
						this.props.hideModal();
						//window.location.href='/';
						this.props.login();
					} else {
						message.error('没有找到此账号，请核实后再试');
					}
				}
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('userName', {
						rules: [
							{
								required: true,
								message: '请输入你的账号!',
								whitespace: true
							}
						]
					})(
						/* <Tooltip
                            visible={this.state.accountVisible}
                            placement="right"
                            title="账号不存在"> */ <Input
							prefix={<Icon type="user" style={{ fontSize: 13 }} />}
							placeholder="账号"
						/>
						//</Tooltip>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入你的密码!',
								whitespace: true
							}
						]
					})(
						/* <Tooltip
                            visible={this.state.passwordVisible}
                            placement="right"
                            title="密码错误"> */ <Input
							prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="密码"
						/>
						//</Tooltip>
					)}
				</FormItem>
				<Button type="primary" htmlType="submit" className="login-form-btn">
					登录
				</Button>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(LoginBox);
export default WrappedHorizontalLoginForm;
