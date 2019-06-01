import React, { Component } from 'react';
import './index.less';
import { Form, Radio, Table, Button, Modal } from 'antd';
import AddressItem from './addressItem';
import GoodsImg from '../../../../../assets/images/order/goods_img.png';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const address = [
	{
		key: 0,
		area: '重庆 重庆市 巴南区 花溪街道',
		address: '重庆理工大学花溪校区',
		name: '李真真',
		phonenumber: '18502308752',
		condition: true
	},
	{
		key: 1,
		area: '重庆 重庆市 巴南区 花溪街道',
		address: '重庆理工大学花溪校区',
		name: '李斟',
		phonenumber: '18502308752',
		condition: false
	}
];

const columns = [
	{
		title: '',
		dataIndex: 'img',
		key: 'img',
		width: '50px',
		render: (text, record) => <img className="img" src={record.img} alt="" />
	},
	{
		title: '商品',
		dataIndex: 'goods',
		key: 'goods',
		width: '450px'
	},
	{
		title: '单价',
		dataIndex: 'unitPrice',
		key: 'unitPrice',
		width: '150px'
	},
	{
		title: '数量',
		dataIndex: 'num',
		key: 'num',
		width: '150px'
	},
	{
		title: '总价',
		dataIndex: 'total',
		key: 'total',
		width: '150px'
	}
];

const data = [
	{
		key: '1',
		img: GoodsImg,
		goods: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		unitPrice: '10',
		num: '2',
		total: 20
	}
];

class OrderSubmitForm extends Component {
	state = {
		totalPrice: 0,
		address: '',
		name: ''
	};

	componentDidMount() {
		//直接从后端获取数据
		var totalPrice_ = 90;
		var address_ = '重庆 重庆市 巴南区 花溪街道 重庆理工大学花溪校区';
		var name_ = '李真真 18502308752';

		this.setState({ totalPrice: totalPrice_, address: address_, name: name_ });
	}

	mapRadioTitle = () => {
		return address.map((v, i) => {
			return (
				<AddressItem
					value={v.key}
					key={v.key}
					area={v.area}
					address={v.address}
					name={v.name}
					phonenumber={v.phonenumber}
				/>
			);
		});
	};

	radioOnChange = (e) => {
		Modal.info({ title: '提示', content: '更换地址后，您需要重新确认订单信息' });
		var key = e.target.value;
		address.forEach((v, i) => {
			if (v.key === key) {
				this.setState({
					address: v.area + ' ' + v.address,
					name: v.name + ' ' + v.phonenumber
				});
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
		return (
			<Form>
				<FormItem {...formItemLayout} label="">
					{getFieldDecorator('address-key', {
						initialValue: 0,
						exclusive: true
					})(<RadioGroup onChange={this.radioOnChange}>{this.mapRadioTitle()}</RadioGroup>)}
				</FormItem>
				<div className="form-button">
					<Button type="primary">使用新地址</Button>
				</div>
				<div className="verify-row">确认订单信息</div>
				<div className="goods-table">
					<Table columns={columns} dataSource={data} />
				</div>
				<div className="submit-box">
					<div className="submit-box-border">
						<div className="box-price-row">
							<span className="box-title">实付款&nbsp;:&nbsp;</span>
							<span className="box-icon">￥</span>
							<span className="box-price">{this.state.totalPrice}</span>
						</div>
						<div className="box-address-row">
							<span className="box-title">寄送至&nbsp;:&nbsp;</span>
							<span className="">{this.state.address}</span>
						</div>
						<div className="box-name-row">
							<span className="box-title">收货人&nbsp;:&nbsp;</span>
							<span className="">{this.state.name}</span>
						</div>
					</div>
				</div>
				<div className="clear-float" />
				<FormItem className="submit-button">
					<Button type="primary" htmlType="submit" className="">
						确认订单
					</Button>
				</FormItem>
			</Form>
		);
	}
}

const WrappedHorizontalLoginForm = Form.create()(OrderSubmitForm);
export default WrappedHorizontalLoginForm;
