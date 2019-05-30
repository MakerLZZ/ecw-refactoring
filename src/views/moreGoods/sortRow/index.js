import React, {Component} from 'react';
import {Icon} from 'antd';
import './index.css'

class SortRow extends Component {
    state = {
        priceClassName: 'sort has-droplist',
        sortAllName:'first link active',
        sortSalesName:'link',
        sortPriceName:'link',
        all:'综合排序',
        price:'价格',
        sales:'销量'
    }

    handleMouseOver = (e) => {
        this.setState({priceClassName: 'sort has-droplist has-droplist-hover'});
    }
    handleMouseOut = () => {
        this.setState({priceClassName: 'sort has-droplist'});
    }

    handleClick=(clickString)=>{
        this.setState({sortName:'link active'})
    }

    handleAllClick=()=>{
        this.setState({sortAllName:'first link active',
        sortSalesName:'link',
        sortPriceName:'link',
        all:'综合排序',
        price:'价格',
        sales:'销量'})
    }

    handleSalesClick=()=>{
        this.setState({sortAllName:'first link',
        sortSalesName:'link active',
        sortPriceName:'link',
        all:'综合',
        price:'价格',
        sales:'销量从高到低'})
    }

    handleUpClick=()=>{
        this.setState({sortAllName:'first link',
        sortSalesName:'link',
        sortPriceName:'link active',
        all:'综合',
        price:'价格从低到高',
        sales:'销量'})
    }

    handleDownClick=()=>{
        this.setState({sortAllName:'first link',
        sortSalesName:'link',
        sortPriceName:'link active',
        all:'综合',
        price:'价格从高到低',
        sales:'销量'})
    }


    render() {
        return (
            <div className='sort-row'>
                <div className='sort-inner'>
                    <ul className='sorts'>
                        <li className='sort'>
                            <a className={this.state.sortAllName} onClick={this.handleAllClick}>{this.state.all}</a>
                        </li>
                        <li className='sort'>
                            <a className={this.state.sortSalesName} onClick={this.handleSalesClick}>{this.state.sales}</a>
                        </li>
                        <li
                            className={this.state.priceClassName}
                            onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}>
                            <div className='trigger'>
                                <div className={this.state.sortPriceName}>
                                    <span>{this.state.price}</span>
                                    <Icon type='down' style={{marginLeft:5}} />
                                </div>
                            </div>
                            <ul className='droplist'>
                                <li className='sort'>
                                    <a className='link' onClick={this.handleUpClick}>价格从低到高</a>
                                </li>
                                <li className='sort'>
                                    <a className='link' onClick={this.handleDownClick}>价格从高到低</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default SortRow;