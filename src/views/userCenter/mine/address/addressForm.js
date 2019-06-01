import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class AddressForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
			}
		});
	};
	onChange = () => {};
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 3
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
		const formItemCodeLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 3
				}
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 7
				}
			}
		};
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem {...formItemLayout} label="所在地区" hasFeedback>
					{getFieldDecorator('area', {
						rules: [
							{
								required: true,
								message: '请输入收货所在地区'
							},
							{
								pattern: '^[\u4E00-\u9FA5]+$',
								message: '只能输入汉字'
							},
							{
								min: 3,
								message: '请输入长度大于3小于12的汉字'
							},
							{
								max: 12,
								message: '请输入长度大于2小于12的汉字'
							}
						]
					})(<Input type="text" placeholder="" />)}
				</FormItem>
				<FormItem {...formItemLayout} label="详细地址" hasFeedback>
					{getFieldDecorator('address', {
						rules: [
							{
								required: true,
								message: '请输入详细地址'
							},
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
					})(<Input type="textarea" placeholder="建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息" />)}
				</FormItem>
				<FormItem {...formItemCodeLayout} label="邮政编码" hasFeedback>
					{getFieldDecorator('code', {
						rules: [
							{
								required: true,
								message: '请输入邮政编码'
							},
							{
								pattern: '^[0-9]*[1-9][0-9]*$',
								message: '只能输入数字'
							},
							{
								min: 6,
								message: '请输入6位邮编'
							},
							{
								max: 6,
								message: '请输入6位邮编'
							}
						]
					})(<Input type="text" placeholder="如您不清楚邮递区号，请填写000000" />)}
				</FormItem>
				<FormItem {...formItemCodeLayout} label="收货人姓名" hasFeedback>
					{getFieldDecorator('Name', {
						rules: [
							{
								pattern: '^[0-9a-zA-Z\u4E00-\u9FA5_]{1,}$',
								message: '只能输入汉字，数字,字母或下划线'
							},
							{
								min: 2,
								message: '请输入长度大于2小于25'
							},
							{
								max: 25,
								message: '请输入长度大于2小于25'
							}
						]
					})(<Input type="text" placeholder="长度不超过25" />)}
				</FormItem>
				<FormItem {...formItemCodeLayout} label="手机号码" hasFeedback>
					{getFieldDecorator('phoneNum', {
						rules: [
							{
								required: true,
								message: '请输入手机号码'
							},
							{
								pattern: '^[0-9]*[1-9][0-9]*$',
								message: '只能输入数字'
							},
							{
								min: 11,
								message: '请输入11位电话号码'
							},
							{
								max: 11,
								message: '请输入11位电话号码'
							}
						]
					})(<Input type="text" placeholder="请输入11位手机号" />)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('radio')(
						<Checkbox className="check" onChange={this.onChange()}>
							设置为默认地址
						</Checkbox>
					)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="address-form-button">
						保存
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(AddressForm);
export default WrappedHorizontalLoginForm;
