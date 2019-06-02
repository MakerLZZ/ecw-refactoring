import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';

import './content.css';

const FormItem = Form.Item;

class SecondContent extends Component {
	static propTypes = {
		account: PropTypes.string,
		getPassword: PropTypes.func
	};

	state = {
		confirmDirty: false
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				var password = values.password;
				let accounts = [
					{
						user: this.props.account,
						pass: password
					}
				];
				if (localStorage.getItem('accounts')) {
					accounts = [ ...accounts, ...JSON.parse(localStorage.getItem('accounts')) ];
				}
				localStorage.setItem('accounts', JSON.stringify(accounts));
				message.success('密码设置成功！');
				this.props.getPassword(password);
			}
		});
	};

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({
			confirmDirty: this.state.confirmDirty || !!value
		});
	};

	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('请输入不一致的两个密码!');
		} else {
			callback();
		}
	};

	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields([ 'confirm' ], { force: true });
		}
		callback();
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 6
				}
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 14
				}
			}
		};
		return (
			<Form className="all-content" onSubmit={this.handleSubmit}>
				<FormItem {...formItemLayout} label="密码" hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入长度大于6小于12的密码'
							},
							{
								pattern: '^[A-Za-z0-9]+$',
								message: '请输入数字或者英文字母组成的密码'
							},
							{
								min: 6,
								message: '请输入长度大于6小于12的密码'
							},
							{
								max: 12,
								message: '请输入长度大于6小于12的密码'
							},
							{
								validator: this.checkConfirm
							}
						]
					})(<Input type="password" placeholder="请输入长度大于6小于12的密码" />)}
				</FormItem>
				<FormItem {...formItemLayout} label="确认密码" hasFeedback>
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: '请确认你的密码'
							},
							{
								pattern: '^[A-Za-z0-9]+$',
								message: '请输入数字或者英文字母组成的密码'
							},
							{
								min: 6,
								message: '请输入长度大于6小于12的密码'
							},
							{
								max: 12,
								message: '请输入长度大于6小于12的密码'
							},
							{
								validator: this.checkPassword
							}
						]
					})(<Input type="password" placeholder="请确认你的密码" onBlur={this.handleConfirmBlur} />)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="">
						下一步
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(SecondContent);
export default WrappedHorizontalLoginForm;
