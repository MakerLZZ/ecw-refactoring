import React, {Component} from 'react';
import './index.css'

class MiniGoods extends Component {
    render() {
        return (
            <ul className="top-menu-cart-goods">
                <li className="top-menu-cart-item">
                    <div className="mini-cart-img">
                        <a><img src={this.props.img_src} alt=""/></a>
                    </div>
                    <div
                        className="mini-cart-count"
                        style={{
                        fontFamily: "Arial",
                        float: "right"
                    }}>
                        ￥
                        <strong className="mini-cart-price h">{this.props.price}</strong>
                    </div>
                    <div className="mini-cart-title">
                        <a
                            style={{
                            width: "162px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className="mini-cart-del">
                        <a>删除</a>
                    </div>
                    <div className="mini-cart-info">
                        <span>{this.props.info}</span>
                    </div>
                </li>
                {this.props.children}
            </ul>
        );
    }
}

export default MiniGoods