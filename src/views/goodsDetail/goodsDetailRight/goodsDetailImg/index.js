import React, {Component} from 'react';
import './index.css'

class GoodsDetailRightImg extends Component {
    state = {
        animateClassName: ''
    }

    handleMouseOver = (e) => {
        this.setState({animateClassName: 'animated bounce'});
    }
    handleMouseOut = () => {
        this.setState({animateClassName: ''});
    }

    render() {
        return (
            <a href="javascript:;" >
                <img
                    className={this.state.animateClassName}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    src={this.props.src}
                    alt=""/>
                <span>{this.props.title}</span>
                {this.props.children}
            </a>
        );
    }
};

export default GoodsDetailRightImg;