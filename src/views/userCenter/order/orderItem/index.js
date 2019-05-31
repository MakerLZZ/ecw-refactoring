import React, {Component} from 'react';
import './index.css'

class OrderItem extends Component {
    state={
        condition:this.props.condition,
        conditionButton:this.props.condition_button,
        conditionButtonClassName:'condition-button',
        conditionStrClassName:'condition-str'
    }

    componentWillMount(){
        var condition = this.props.condition;
        if(condition==='交易成功'){
            this.setState({
                conditionButtonClassName:'condition-button-hidden',
                conditionStrClassName:'condition-str-change'
            })
        }
    }
    
    render() {
        return (
            <div className='order-item-box'>
                <div className='number-row'>
                    <span className='date'>{this.props.date}</span>
                    <span>订单号：{this.props.no}</span>
                </div>
                <div className='detail-row'>
                    <ul>
                        <li className='li-0'>
                            <div className='img'>
                                <img src={this.props.img_src} alt=""/>
                            </div>
                            <div className='detail'>{this.props.detail}</div>
                        </li>
                        <li className='li-1'><span>￥</span><span>{this.props.price}</span></li>
                        <li className='li-1'><span>{this.props.num}</span></li>
                        <li className='li-1 total'><span>￥</span><span>{this.props.price*this.props.num}</span></li>
                        <li className='li-2 condition'>
                            <div className='li-2-condition'>
                                <div className={this.state.conditionStrClassName}>
                                    <span>{this.state.condition}</span>
                                </div>
                                <div className={this.state.conditionButtonClassName}>
                                    <button>{this.state.conditionButton}</button>
                                </div>
                            </div>
                        </li>
                        <li className='li-2 check-detail'><a>查看详情</a></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default OrderItem;