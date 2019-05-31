import React, {Component} from 'react';
import './content.css'
import {Icon, Button} from 'antd'
import PropTypes from 'prop-types'

export default class ThirdContent extends Component {
    static propsTypes = {
        account: PropTypes.string,
        topMenuVisitor: PropTypes.any
    }
    render() {
        return (
            <div className='all-content'>
                <div className='top'>
                    <Icon type="check-circle" className='register-success-icon'/>
                    <span className='register-success-title'>恭喜你，注册成功</span>
                </div>
                <div className='bottom'>
                    <span className='bottom-title'>登录名：</span>
                    <span className='bottom-name'>{this.props.account}</span>
                    <Button type="primary" onClick={this.props.topMenuVisitor.showModal}>立即登录</Button>
                </div>
            </div>
        );
    }
}