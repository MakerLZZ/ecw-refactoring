import React, {Component} from 'react';
import './index.css'
import {Table} from 'antd';
import AddressForm from './addressForm'
const columns = [
    {
        title: '收货人',
        dataIndex: 'name',
        key: 'name',
        width: '65px',
        // render: text => <a href="#">{text}</a>,
    }, {
        title: '所在地区',
        dataIndex: 'area',
        key: 'area',
        width: '140px'
    }, {
        title: '详细地址',
        dataIndex: 'address',
        key: 'address',
        width: '200px'
    }, {
        title: '邮编',
        dataIndex: 'code',
        key: 'code',
        width: '60px'
    }, {
        title: '电话号码',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
        width: '130px'
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">修改</a>
                <span className="ant-divider"/>
                <a href="javascript:;">删除</a>
                <span className="ant-divider"/>
                <a href="javascript:;">{record.condition}</a>
            </span>
        )
    }
];

const data = [
    {
        key: '1',
        name: '李真真',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆理工大学花溪校区',
        code: '401320',
        phonenumber: '18502308752',
        condition: '默认地址'
    }, {
        key: '2',
        name: '李真',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆市渝中区人和街62号3单元6-1',
        code: '400015',
        phonenumber: '18502308752',
        condition: '设为默认'
    }, {
        key: '3',
        name: '李',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆理工大学花溪校区',
        code: '401320',
        phonenumber: '18502308752',
        condition: '设为默认'
    }, {
        key: '4',
        name: '李真',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆市渝中区人和街62号3单元6-1',
        code: '400015',
        phonenumber: '18502308752',
        condition: '设为默认'
    }, {
        key: '5',
        name: '李',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆理工大学花溪校区',
        code: '401320',
        phonenumber: '18502308752',
        condition: '设为默认'
    }, {
        key: '6',
        name: '李真',
        area: '重庆 重庆市 巴南区 花溪街道',
        address: '重庆市渝中区人和街62号3单元6-1',
        code: '400015',
        phonenumber: '18502308752',
        condition: '设为默认'
    }
];

class AddressModel extends Component {
    state = {
        totalAddress: data.length
    }
    render() {
        return (
            <div className='address-box'>
                <div>新增收货地址</div>
                <div className='address-form'>
                    <AddressForm/>
                </div>
                <div className='address-tip'>已经保存了{this.state.totalAddress}条地址，还能保存{20 - this.state.totalAddress}条地址</div>
                <div className='address-table'>
                    <Table columns={columns} dataSource={data}/>
                </div>
            </div>
        );
    }
};

export default AddressModel;