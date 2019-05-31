import React, {Component} from 'react';
import './index.less'
import {Input} from 'antd';
import {Link} from 'react-router-dom'
// import logo from '../../assets/images/nav/logo.png';
import title from '../../assets/images/nav/title.png';

const Search = Input.Search;
class SearchRow extends Component {
    render() {
        return (
            <div className="search-row">
                <div className="search-box">
                    <Link to="/">
                        <div className="logo">
                            {/* <img src={logo} alt='' /> */}
                            <img src={title} alt='' />
                        </div>
                    </Link>
                    <div className="search-input">
                        <Search enterButton="搜索" onSearch={value => console.log(value)}/>
                        <Link className="more-text" to="/moreGoods" target="">更多></Link>
                    </div>
                </div>

            </div>
        );
    }
};

export default SearchRow;