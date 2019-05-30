import React, {Component} from 'react';
import PropTypes from 'prop-types'
class TitleItem extends Component {
    static propsTypes = {
        handleClick : PropTypes.func
    }

    state={
        aClassName:this.props.aClassName,
        id :this.props.id
    }

    handleLiClick(id){
        this.props.handleClick(id)
    }

    aFocus(){
        this.setState({
            aClassName:'a-active'
        })
    }

    aUnFocus(){
        this.setState({
            aClassName:'a'
        })
    }

    render() {
        return (
            <li>
                <a className={this.state.aClassName} onClick={(id)=>this.handleLiClick(this.state.id)}>{this.props.titleName}</a>
                {this.props.children}
            </li>
        );
    }
};

export default TitleItem;