import React, {Component} from 'react';
import {Icon, Modal} from 'antd';
import './index.css'
import './animate.css'
import {Link} from 'react-router-dom'
import GoodsDetailImg from './goodsDetailImg'

import bottom_img_1 from '../../../assets/images/goodsDetail/indent.png'
import bottom_img_2 from '../../../assets/images/goodsDetail/seven.png'
import bottom_img_3 from '../../../assets/images/goodsDetail/safety.png'
import bottom_img_4 from '../../../assets/images/goodsDetail/antd.png'
import bottom_img_5 from '../../../assets/images/goodsDetail/card.png'
import bottom_img_6 from '../../../assets/images/goodsDetail/add.png'
import PropTypes from 'prop-types'
var msg_1 = [
    {
        'key': 0,
        'img_src': bottom_img_1,
        'img_title': '订单险'
    }, {
        'key': 1,
        'img_src': bottom_img_2,
        'img_title': '7天无理由'
    }, {
        'key': 2,
        'img_src': bottom_img_3,
        'img_title': '质量安全'
    }
]

var msg_2 = [
    {
        'key': 3,
        'img_src': bottom_img_4,
        'img_title': '蚂蚁花呗'
    }, {
        'key': 4,
        'img_src': bottom_img_5,
        'img_title': '信用卡支付'
    }, {
        'key': 5,
        'img_src': bottom_img_6,
        'img_title': '集分宝'
    }
]

var goodsDetail = [
    {
        'goodsTitle': 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
        'goodsPrice': '29.80',
        'goodsSalse': '1',
        'goodsTaste': '黑胡椒味',
        'goodsInventory': '5'
    }
]

const inventory = parseInt(goodsDetail[0].goodsInventory, 10);

var button_style = {
    disabled: 'disabled'
}

var button_able_style = {}

class GoodsDetailRight extends Component {
    MapItem = (flag) => {
        if (flag) {
            return msg_1.map(v => {
                return (<GoodsDetailImg src={v.img_src} title={v.img_title} key={v.key}/>)
            })
        } else {
            return msg_2.map(v => {
                return (<GoodsDetailImg src={v.img_src} title={v.img_title} key={v.key}/>)
            })
        }
    }

    static propsTypes = {
        loginSuccess: PropTypes.bool
    }

    state = {
        value: 1,
        reduceClassName: 'reduce',
        increaseClassName: 'increase',
        tipClassName: 'goods-num-tip hidden',
        buttonStyle: {}
    }

    componentWillMount() {
        this.setState({reduceClassName: 'disable-reduce reduce'})
    }

    onChange(o) {
        this.setState({tipClassName: 'goods-num-tip hidden'})
        const reg = /^[0-9]*[1-9][0-9]*$/;
        var newValue = parseInt(o.target.value, 10);
        var minValue = 1;
        var maxValue = inventory;
        if (newValue >= maxValue) {
            this
                .refs
                .numInput
                .select();
            this.setState({value: newValue, increaseClassName: 'disable-increase increase', reduceClassName: 'reduce', tipClassName: 'goods-num-tip'})
        } else if (newValue === minValue) {
            this.setState({value: newValue, reduceClassName: 'disable-reduce reduce', increaseClassName: 'increase'})
        } else if ((!isNaN(newValue) && reg.test(newValue)) || newValue.toString() === '') {
            this.setState({value: newValue, increaseClassName: 'increase'})
        }
    }

    handleReduceClick() {
        var currentValue = this.state.value;
        var minValue = 1;
        var maxValue = inventory;
        if (currentValue <= maxValue) {
            this.setState({tipClassName: 'goods-num-tip hidden'})
        }
        var valueReduce = currentValue - 1;

        if (valueReduce > minValue) {
            this.setState({value: valueReduce})
        } else if (valueReduce === minValue) {
            this.setState({value: valueReduce, reduceClassName: 'disable-reduce reduce'})
        }
        if (valueReduce < maxValue) {
            this.setState({increaseClassName: 'increase'})
        }
    }

    handleIncreaseClick() {
        var minValue = 1;
        var maxValue = inventory;
        var currentValue = this.state.value;
        if (currentValue <= maxValue) {
            this.setState({tipClassName: 'goods-num-tip hidden'})
        }
        var valueIncrease = currentValue + 1;
        if (valueIncrease < maxValue) {
            this.setState({value: valueIncrease})
        } else if (valueIncrease === maxValue) {
            this.setState({value: valueIncrease, increaseClassName: 'disable-increase increase'})
        }
        if (valueIncrease > minValue) {
            this.setState({reduceClassName: 'reduce'})
        }
    }

    notLoginTip() {
        Modal.warning({title: '操作有误', content: '您还没有登录，不能完成此操作'});
    }

    render() {
        return (
            <div className='goods-detail-right'>
                <div className='goods-title'>
                    <h3 className='goods-main-title'>{goodsDetail[0].goodsTitle}</h3>
                </div>
                <ul className='goods-price'>
                    <li className='goods-price-title'>
                        <span className='goods-price-type'>价格</span>
                    </li>
                    <li className='goods-price-num'>
                        <strong>
                            <span className='rmb'>￥</span>
                            <span className='rmb-num'>{goodsDetail[0].goodsPrice}</span>
                        </strong>
                    </li>
                    <li className='goods-sales'>
                        <div>
                            <div className='goods-sales-num'>
                                <span>{goodsDetail[0].goodsSalse}</span>
                            </div>
                            <div>
                                <span>交易成功</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='sep-line'></div>
                <div className='goods-taste'>
                    <span className='goods-taste-type'>口味</span>
                    <span className='goods-taste-title'>{goodsDetail[0].goodsTaste}</span>
                </div>
                <div className='goods-select-num'>
                    <div>
                        <span className='goods-select-type'>数量</span>
                        <span className='goods-select-stock'>
                            <a
                                className={this.state.reduceClassName}
                                onClick={() => this.handleReduceClick()}>-</a>
                            <input
                                ref="numInput"
                                onChange={(e) => this.onChange(e)}
                                type="text"
                                className='text'
                                value={this.state.value}
                                maxLength='8'/>
                            <a
                                className={this.state.increaseClassName}
                                onClick={() => this.handleIncreaseClick()}>+</a>
                            件
                        </span>
                        <span className='goods-select-inventory'>(库存{goodsDetail[0].goodsInventory}件)</span>
                    </div>
                </div>
                <div className={this.state.tipClassName}>
                    <Icon type="minus-circle" className='goods-num-icon'/>
                    <p className='goods-num-tips'>您填写的宝贝数量超过库存</p>
                </div>
                <div className='buy-box'>
                    <div className='buy'>
                        {this.props.loginSuccess
                            ? <Link to="/order_submit" className='btn-a'>立即购买</Link>
                            : <a className='btn-a' onClick={() => this.notLoginTip()}>立即购买</a>
}
                    </div>
                    <div className='add'>
                        {this.props.loginSuccess
                            ? <Link to="/personal_center/cart" className='btn-a'>
                                    <Icon type="shopping-cart" className='add-icon'/>加入购物车</Link>
                            : <a className='btn-a' onClick={() => this.notLoginTip()}>加入购物车</a>
}
                    </div>
                </div>
                <div className='bottom'>
                    <div className='bottom-row'>
                        <div className='bottom-title'>
                            <span>承诺</span>
                        </div>
                        <div className='bottom-a'>
                            {this.MapItem(true)}
                        </div>
                    </div>
                    <div className='bottom-row'>
                        <div className='bottom-title'>
                            <span>支付</span>
                        </div>
                        <div className='bottom-a'>
                            {this.MapItem(false)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default GoodsDetailRight;