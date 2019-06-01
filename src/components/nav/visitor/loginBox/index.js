import React, { Component } from 'react';
import './index.less';
import { Form, Icon, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';
const userName = '123';
const password = '123';
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
				var userNameInput = values.userName;
				var passwordInput = values.password;
				if (userNameInput === userName && passwordInput === password) {
					message.success('欢迎来到吃货世界！');
					this.props.hideModal();
					//window.location.href='/';
					this.props.login();
				} else if (userNameInput !== userName) {
					message.error('没有找到此账号，请核实后再试');
				} else if (userNameInput === userName && passwordInput !== password) {
					message.error('密码输错了哟，亲！');
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
