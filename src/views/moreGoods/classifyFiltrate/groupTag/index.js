import React, {Component} from 'react';
import {Icon} from 'antd'
import './index.css'

class GroupTag extends Component {
    state={
        iconColor:'#666'
    }
    
    render() {
        return (
            <a className='tag'>
                {this.props.text}
                <Icon type='close' className='tag-icon' />
            </a>
        );
    }
};

export default GroupTag;