import React, {Component} from 'react';
import './index.css'
import Avatar from '../../../../assets/images/mine/avatar.png'
import BasicDetailForm from './basicDetailForm'
class BasicDetailModel extends Component {
    state={
        hoverClassName:'img-hidden hover-hidden'
    }

    handleMouseOver = () => {
        this.setState({hoverClassName: 'img-hidden hover'});
    }
    handleMouseOut = () => {
        this.setState({hoverClassName: 'img-hidden hover-hidden'});
    }
    render() {
        return (
            <div className='basic-detail-box'>
                <div className='top'>
                    <div className='row row-title'><span>亲爱的xxxxxxxxx，填写真实的资料，有助于好友找到你哦</span></div>
                    <div className='row row-img'>
                        <div className='row-img-item'>当前头像<span className='space'>:</span></div>
                        <div className='row-img-item img-box' onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut}>
                            <a className='img-a'><img src={Avatar} alt='' /></a>
                            <a 
                                className={this.state.hoverClassName} 
                                >编辑头像</a>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <BasicDetailForm/>
                </div>
            </div>
        );
    }
};

export default BasicDetailModel;