import React, { Component } from 'react';
import './index.less';
import { Input } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import logo from '@/assets/images/nav/logo110x55.png';
import events from '@/libs/events';

const Search = Input.Search;
class SearchRow extends Component {
	handleSearch = (value) => {
		this.props.history.push('/more_goods');
		events.emit('changeGoods', [ value ]);
	};

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
						<Search enterButton="搜索" onSearch={(value) => this.handleSearch(value)} />
						<Link className="more-text" to="/more_goods" target="">
							更多>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchRow);
