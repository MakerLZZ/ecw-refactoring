import React, { Component } from 'react';
import './index.less';
import { Table } from 'antd';
import AddressForm from './addressForm';
import Http from '@/http';

export default class AddressModel extends Component {
	state = {
		columns: [
			{
				title: '收货人',
				dataIndex: 'name',
				key: 'name',
				width: '90px'
			},
			{
				title: '所在地区',
				dataIndex: 'area',
				key: 'area',
				width: '140px'
			},
			{
				title: '详细地址',
				dataIndex: 'address',
				key: 'address',
				width: '200px'
			},
			{
				title: '邮编',
				dataIndex: 'code',
				key: 'code',
				width: '60px'
			},
			{
				title: '电话号码',
				dataIndex: 'phonenumber',
				key: 'phonenumber',
				width: '130px'
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				render: (text, record) => (
					<div>
						{/* <span className="span-a" style={{margin: '0 3px'}} onClick={() => this.editItem(record.key)}>修改</span> */}
						<span
							className="span-a"
							style={{ margin: '0 3px' }}
							onClick={() => this.deleteItem(record.key)}
						>
							删除
						</span>
						<span
							className="span-a"
							style={({ margin: '0 3px' }, record.condition ? { color: '#f40' } : { color: '#000' })}
							onClick={() => this.setCondition(record.key)}
						>
							{record.condition ? '默认地址' : '设为默认'}
						</span>
					</div>
				)
			}
		],
		data: [],
		defaultValue: {
			name: '',
			area: '',
			address: '',
			code: '',
			phonenumber: '',
			condition: ''
		},
		type: 'add',
		editKey: ''
	};

	componentWillMount() {
		Http.get('/getAddressList').then((res) => {
			this.setState({
				data: res.data.data
			});
		});
	}

	addItem = (item, type, editKey) => {
		const { data } = this.state;
		if (type === 'edit') {
			const index = data.findIndex((e) => e.key === editKey);
			if (index >= 0) {
				data.splice(index, 1);
				data.splice(index, 0, item);
			}
		} else {
			if (item.condition) {
				data.forEach((e) => (e.condition = false));
			}
			data.unshift(item);
		}
		data.forEach((e, i) => (e.key = i));
		this.setState({ data });
	};

	deleteItem(key) {
		const { data } = this.state;
		const index = data.findIndex((e) => e.key === key);
		if (index >= 0) {
			data.splice(index, 1);
			data.forEach((e, i) => (e.key = i));
			this.setState({ data });
		}
	}

	editItem(key) {
		const { data } = this.state;
		const item = data.find((e) => e.key === key);
		if (item) {
			this.setState({ defaultValue: item, type: 'edit', editKey: key });
		}
	}

	setCondition(key) {
		const { data } = this.state;
		const index = data.findIndex((e) => e.key === key);
		if (index >= 0) {
			data.forEach((e, i) => {
				if (index === i) {
					e.condition = true;
				} else {
					e.condition = false;
				}
			});
			this.setState({ data });
		}
	}

	render() {
		const { columns, data, defaultValue, type, editKey } = this.state;
		return (
			<div className="address-box">
				<div>新增收货地址</div>
				<div className="address-form">
					<AddressForm addItem={this.addItem} defaultValue={defaultValue} type={type} editKey={editKey} />
				</div>
				<div className="address-tip">
					已经保存了{data.length}条地址，还能保存{20 - data.length}条地址
				</div>
				<div className="address-table">
					<Table columns={columns} dataSource={data} />
				</div>
			</div>
		);
	}
}
