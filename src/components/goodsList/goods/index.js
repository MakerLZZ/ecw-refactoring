import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'

class GoodsItem extends Component {

    state={
        className: 'goods-box'
    }

    handleMouseOver = (e) => {
        this.setState({className: 'goods-box goods-box-active'});
    }
    handleMouseOut = () => {
        this.setState({className: 'goods-box'});
    }
    
    render() {
        return (
            <div
                className={this.state.className}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                id={this.props.no}>
                <div className="pic-box">
                    <Link
                        className="goods_box_a"
                        /* href="/Reception/GoodsDetailsView?no={this.props.no}" */
                        to={"/goods_detail/"+this.props.no}
                        /* target="_blank" */
                        >
                        <div className="goods-img">
                            <img src={this.props.img_src} alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="ctx-box">
                    <div className="ctx-box-row-1">
                        <div className="ctx-box-row-price">
                            <span>¥</span>
                            <strong>{this.props.goods_price}</strong>
                        </div>
                        <div className="deal-cnt">{this.props.goods_sales}
                            人付款</div>
                    </div>
                    <div className="ctx-box-row-2">
                        <Link
                            className="goods_box_a"
                            to={"/goods_detail/"+this.props.no}
                            /* target="_blank" */
                            >
                            <span className="ctx-box-row-tilte">{this.props.goods_title}</span>
                        </Link>
                    </div>
                    <div className="ctx-box-row-3">
                        <div className="location">{this.props.goods_location}</div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default GoodsItem