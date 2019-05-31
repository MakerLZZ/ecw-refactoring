import React, {Component} from 'react';
import './index.css'
import {Radio} from 'antd'
export default class AddressItem extends Component {
    render() {
        return (
            <div className='radio-row'>
                <div className='title'>寄送至</div>
                <div className='radio'>
                    <Radio value={this.props.value}>
                        {this.props.area + ' ' + this.props.address + '(' + this.props.name + ' 收)' + this.props.phonenumber}
                    </Radio>
                </div>

            </div>

        );
    }
};