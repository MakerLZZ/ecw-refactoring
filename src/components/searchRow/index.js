import React, {Component} from 'react';
import './index.less'
import {Input} from 'antd';
import {Link} from 'react-router-dom'

const Search = Input.Search;
class SearchRow extends Component {
    render() {
        return (
            <div className="search-row">
                <Link to="/">
                    <div className="logo">
                        logo
                    </div>
                </Link>
                <div className="search-box">
                    <Search enterButton="搜索" onSearch={value => console.log(value)}/>
                    <div className="more-text">
                        更多
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchRow;