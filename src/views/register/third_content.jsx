import React, {Component} from 'react';
import './all_content.css'
import {Icon} from 'antd'
import PropTypes from 'prop-types'

class ThirdContent extends Component {
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
                    <button
                        className='ant-btn ant-btn-primary bottom-button'
                        onClick={this.props.topMenuVisitor.showModal}>立即登录</button>
                </div>
            </div>
        );
    }
}

export default ThirdContent;