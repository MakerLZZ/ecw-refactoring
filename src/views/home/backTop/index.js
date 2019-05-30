import React, {Component} from 'react';
import {BackTop} from 'antd';
import './index.css';
import BackTopImg from '../../../assets/images/home/back_top.png'
class BackTop_ extends Component {
    render() {
        return (
            <div className="">
                <BackTop>
                    <div className="ant-back-top-inner">
                        <img src={BackTopImg} alt=""/>
                    </div>
                </BackTop>
            </div>
        );
    }
}

export default BackTop_