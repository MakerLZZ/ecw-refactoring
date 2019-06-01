import React, {Component} from 'react';
import './index.less'
import {Pagination} from 'antd'
import PropTypes from 'prop-types'
import {message} from 'antd'
import GoodsImg from '@/assets/images/order/goods_img.png'
import OrderTitleItem from './orderTitleItem'
import OrderItem from './orderItem'
const orderTitles = [
    {
        'key': 0,
        'liClassName': 'li li-focus',
        'aClassName': 'indent-nav-a a-focus',
        'titleName': '所有订单'
    }, {
        'key': 1,
        'liClassName': 'li',
        'aClassName': 'indent-nav-a',
        'titleName': '待付款'
    }, {
        'key': 2,
        'liClassName': 'li',
        'aClassName': 'indent-nav-a',
        'titleName': '待发货'
    }, {
        'key': 3,
        'liClassName': 'li',
        'aClassName': 'indent-nav-a',
        'titleName': '待收货'
    }, {
        'key': 4,
        'liClassName': 'li',
        'aClassName': 'indent-nav-a',
        'titleName': '交易成功'
    }
];

const orders = [
    {
        'key': 0,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 1,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待发货',
        'condition_button': '提醒发货'
    }, {
        'key': 2,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待收货',
        'condition_button': '收货'
    }, {
        'key': 3,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '交易成功',
        'condition_button': ''
    }, {
        'key': 4,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 5,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 6,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 7,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 8,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }, {
        'key': 9,
        'date': '2017-08-18',
        'no': '123123123123',
        'img_src': GoodsImg,
        'detail': '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
        'price': '10.00',
        'num': 50,
        'condition': '待付款',
        'condition_button': '付款'
    }
];

export default class Order extends Component {
    static propsTypes = {
        perCenPageModel: PropTypes.any
    }

    state = {
        orders: orders,
        tatal: orders.length,
        orderIndex: 0
    }

    componentWillMount() {
        this.props.perCenPageModel
            ? this
                .props
                .perCenPageModel
                .liActive('order')
            : message.info("发生了未知的错误！")
    }

    handleLiClick(condition) {
        orderTitles.forEach((v, i) => {
            if (this.refs[`item${i}`].state.titleName === condition) {
                this
                    .refs[`item${i}`]
                    .thisFocus()
            } else {
                this
                    .refs[`item${i}`]
                    .thisUnFocus()
            }
        })

        // var newOrders = [] orders.forEach((v,i)=>{     if(v.condition===condition){
        //     newOrders.push(orders[i])     } })

        if (condition === '所有订单') {
            this.setState({orders: orders, tatal: orders.length, orderIndex: 0})
        } else {
            var newOrders = orders.filter(v => v.condition === condition)
            this.setState({orders: newOrders, tatal: newOrders.length, orderIndex: 0})
        }
    }

    mapOrderTitleItem = () => {
        return orderTitles.map((v, i) => {
            return (
                <OrderTitleItem
                    key={v.key}
                    liClassName={v.liClassName}
                    aClassName={v.aClassName}
                    titleName={v.titleName}
                    ref={`item${i}`}
                    handleLiClick={(condition) => this.handleLiClick(condition)}></OrderTitleItem>
            )
        })
    }

    mapOrderItem = () => {
        var oldOrders = this.state.orders;
        var pageSize = 10;
        var orderIndex = this.state.orderIndex;
        var flag = 0;

        if ((oldOrders.length - orderIndex) <= pageSize) {
            pageSize = oldOrders.length - orderIndex;
        }
        var newOrders = new Array(pageSize);
        for (var i = orderIndex; i < orderIndex + pageSize; i++) {
            newOrders[flag] = oldOrders[i];
            flag++;
        }

        return newOrders.map((v, i) => {
            return (
                <OrderItem
                    key={v.key}
                    date={v.date}
                    no={v.no}
                    img_src={v.img_src}
                    detail={v.detail}
                    price={v.price}
                    num={v.num}
                    condition={v.condition}
                    condition_button={v.condition_button}></OrderItem>
            )
        })
    }

    handlePagination = (page, pageSize) => {
        var index = (page - 1) * pageSize;
        this.setState({orderIndex: index})
    }

    render() {
        return (
            <div className='order-page-model'>
                <div className='indent-nav'>
                    <ul>
                        {this.mapOrderTitleItem()}
                    </ul>
                </div>
                <div className='indent-nav-line'></div>
                <div className='title-row'>
                    <ul>
                        <li className='li-0'>宝贝</li>
                        <li className='li-1'>单价</li>
                        <li className='li-1'>数量</li>
                        <li className='li-1'>实付款</li>
                        <li className='li-2'>交易状态</li>
                        <li className='li-2'>交易操作</li>
                    </ul>
                </div>
                <div className='indent-list'>
                    {this.mapOrderItem()}
                </div>

                <Pagination
                    className="page-row"
                    total={this.state.tatal}
                    defaultPageSize={8}
                    onChange={this.handlePagination}/>
            </div>
        );
    }
};