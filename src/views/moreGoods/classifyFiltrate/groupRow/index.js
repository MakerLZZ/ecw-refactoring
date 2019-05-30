import React, {Component} from 'react';
import './index.css'
import GroupRowItem from './groupRowItem'
import ShowMoreButton from './showMoreBtn'
import PropTypes from 'prop-types'

var showMoreStyle = {
    height: "auto",
    maxHeight: "102px",
    overflow: "auto"
}

var closeShowMoreStyle = {
    height: "36px",
    overflow: "hidden"
}

class GroupRow extends Component {
    
    static propTypes = {
        data: PropTypes.array,
        handleConditionClick:PropTypes.func
    }

    mapGroupRowItem = (classifyName,id) => {
        return this.props.data.map(v =>{
            return(
                <GroupRowItem 
                    text={v} 
                    key={v} 
                    classifyName={classifyName}
                    groupRowId={id}
                    handleConditionClick={this.props.handleConditionClick}
                />
            )
        })
    }

    state = {
        close: true
    }

    handleClose(){
        const currentClose = this.state.close;
        this.setState({close: !currentClose})
    }

    render() {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="head">
                    {this.props.classifyName}
                </div>
                <div className="body">
                    <div className="items" style={this.state.close ? closeShowMoreStyle:showMoreStyle }>
                        <div className="items-inner">
                            {this.mapGroupRowItem(this.props.classifyName,this.props.id)}
                        </div>
                    </div>
                </div>
                <div className="foot">
                      <ShowMoreButton handleClose={()=> this.handleClose()} close={this.state.close} />  
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default GroupRow;