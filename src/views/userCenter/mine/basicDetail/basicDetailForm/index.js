import React, { Component } from 'react';
import './index.less';
import { Form, Input, Radio, Select, Button } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class BasicDetailForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// var userNameInput = values.userName;
				// var passwordInput = values.password;
				// if (userNameInput === userName && passwordInput === password) {
				//     message.success('欢迎来到吃货世界！');
				//     this.props.hideModal();
				//     //window.location.href='/';
				//     this.props.login();
				// }else if(userNameInput !==userName){
				//     message.error('没有找到此账号，请核实后再试');
				// }else if(userNameInput === userName&&passwordInput!==password ){
				//     message.error('密码输错了哟，亲！');
				// }
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 2
				}
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 4
				}
			}
		};
		const formItemColatLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 2
				}
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 10
				}
			}
		};
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem {...formItemLayout} label="真实姓名" hasFeedback>
					{getFieldDecorator('realName', {
						rules: [
							{
								pattern: '^[\u4E00-\u9FA5]+$',
								message: '只能输入汉字'
							},
							{
								min: 2,
								message: '请输入长度大于2小于6的汉字'
							},
							{
								max: 6,
								message: '请输入长度大于2小于6的汉字'
							}
						]
					})(<Input type="text" />)}
				</FormItem>
				<FormItem {...formItemLayout} label="性别">
					{getFieldDecorator('sex', {
						rules: [
							{
								required: true,
								message: '至少选择一种性别'
							}
						]
					})(
						<RadioGroup>
							<Radio value="男">男</Radio>
							<Radio value="女">女</Radio>
						</RadioGroup>
					)}
				</FormItem>
				<FormItem {...formItemColatLayout} label="星座" hasFeedback>
					{getFieldDecorator('constellation', {
						rules: []
					})(
						<Select placeholder="请选择一种星座">
							<Option value="1">摩羯座</Option>
							<Option value="2">水瓶座</Option>
							<Option value="3">双鱼座</Option>
							<Option value="4">白羊座</Option>
							<Option value="5">金牛座</Option>
							<Option value="6">双子座</Option>
							<Option value="7">巨蟹座</Option>
							<Option value="8">狮子座</Option>
							<Option value="9">处女座</Option>
							<Option value="10">天秤座</Option>
							<Option value="11">天蝎座</Option>
							<Option value="12">射手座</Option>
						</Select>
					)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="basicDetail-form-button">
						保存
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(BasicDetailForm);
export default WrappedHorizontalLoginForm;
