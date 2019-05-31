import React, {Component} from 'react';
import PropTypes from 'prop-types'

class GoodsDetailLeftLi extends Component {
    
    state={
        liClassName:''
    }

    static propTypes = {
        handleMouseOver_: PropTypes.func
    }

    handleMouseOver=()=> {
        var img = this.props.img_src
        this.props.handleMouseOver_(img);
        this.setState({liClassName: 'select'});
        
    }

    handleMouseOut=()=> {
        this.setState({liClassName: ''});
    }

    render() {
        return (
            <li className={this.state.liClassName}>
                <div className='pic'>
                    <a
                        href="javascript:;"
                        className='pic-a'
                        onMouseOver={this.handleMouseOver} 
                        onMouseOut={this.handleMouseOut}
                        >
                        <img src={this.props.img_src} alt=""/>
                    </a>
                </div>
                {this.props.children}
            </li>

        );
    }
};

export default GoodsDetailLeftLi;