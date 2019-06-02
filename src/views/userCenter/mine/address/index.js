import React, { Component } from 'react';
import './index.less';
import { Table } from 'antd';
import AddressForm from './addressForm';

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
						<span className="span-a" style={{margin: '0 3px'}} onClick={() => this.editItem(record.key)}>修改</span>
						<span className="span-a" style={{margin: '0 3px'}} onClick={() => this.deleteItem(record.key)}>删除</span>
						<span className="span-a" style={{margin: '0 3px'}} onClick={() => this.setCondition(record.key)}>{record.condition ? '默认地址' : '设为默认'}</span>
					</div>
				)
			}
		],
		data: [
			{
				key: '1',
				name: '李真真',
				area: '重庆重庆市巴南区花溪街道',
				address: '重庆理工',
				code: '401320',
				phonenumber: '18502308752',
				condition: true
			},
			{
				key: '2',
				name: '李真',
				area: '重庆 重庆市 巴南区 花溪街道',
				address: '重庆市渝中区人和街62号3单元6-1',
				code: '400015',
				phonenumber: '18502308752',
				condition: false
			},
			{
				key: '3',
				name: '李',
				area: '重庆 重庆市 巴南区 花溪街道',
				address: '重庆理工大学花溪校区',
				code: '401320',
				phonenumber: '18502308752',
				condition: false
			},
			{
				key: '4',
				name: '李真',
				area: '重庆 重庆市 巴南区 花溪街道',
				address: '重庆市渝中区人和街62号3单元6-1',
				code: '400015',
				phonenumber: '18502308752',
				condition: false
			},
			{
				key: '5',
				name: '李',
				area: '重庆 重庆市 巴南区 花溪街道',
				address: '重庆理工大学花溪校区',
				code: '401320',
				phonenumber: '18502308752',
				condition: false
			},
			{
				key: '6',
				name: '李真',
				area: '重庆 重庆市 巴南区 花溪街道',
				address: '重庆市渝中区人和街62号3单元6-1',
				code: '400015',
				phonenumber: '18502308752',
				condition: false
			}
		],
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
	addItem = (item, type, editKey) => {
		const {data} = this.state
		if (type === 'edit') {
			const index = data.findIndex(e => e.key === editKey)
			if (index >= 0) {
				data.splice(index, 1)
				data.splice(index, 0, item)
			}
		} else {
			if (item.condition) {
				data.forEach(e => e.condition = false)
			}
			data.unshift(item)
		}
		data.forEach((e,i) => e.key = i)
		this.setState({data})
	}
	deleteItem (key) {
		const {data} = this.state
		const index = data.findIndex(e => e.key === key)
		if (index >= 0) {
			data.splice(index, 1)
			data.forEach((e,i) => e.key = i)
			this.setState({data})
		}
	}
	editItem (key) {
		const {data} = this.state
		const item = data.find(e => e.key === key)
		if (item) {this.setState({defaultValue: item, type: 'edit', editKey: key})}
	}
	setCondition (key) {
		const {data} = this.state
		const index = data.findIndex(e => e.key === key)
		if (index >= 0) {
			data.forEach((e, i) => {
				if (index === i) {
					e.condition = true
				} else {
					e.condition = false
				}
			})
			this.setState({data})
		}
	}
	render() {
		const {columns, data, defaultValue, type, editKey} = this.state
		return (
			<div className="address-box">
				<div>新增收货地址</div>
				<div className="address-form">
					<AddressForm addItem={this.addItem} defaultValue={defaultValue} type={type} editKey={editKey}/>
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
