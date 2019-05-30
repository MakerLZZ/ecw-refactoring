import React, {Component} from 'react';
import './index.css'
import PropTypes from 'prop-types'
import GoodsDetailLeft from './goodsDetailLeft';
import GoodsDetailRight from './goodsDetailRight';

class GoodsDetailPageModel extends Component {
    static propsTypes = {
        loginSuccess: PropTypes.bool
    }
    render() {
        return (
            <div className='goods-detail-page' id={this.props.no}>
                <GoodsDetailLeft/>
                <GoodsDetailRight loginSuccess={this.props.loginSuccess}/>
            </div>
        );
    }
};

export default GoodsDetailPageModel;