import React, { Component } from 'react';
import './index.less';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/nav/logo110x55.png';

const Search = Input.Search;
export default class SearchRow extends Component {
	render() {
		return (
			<div className="search-row">
				<div className="search-box">
					<Link to="/">
						<div className="logo">
							<img src={logo} alt="" />
						</div>
					</Link>
					<div className="search-input">
						<Search enterButton="搜索" onSearch={(value) => console.log(value)} />
						<Link className="more-text" to="/moreGoods" target="">
							更多>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
