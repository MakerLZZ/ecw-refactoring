import React, { Component } from 'react';
import './index.less';

export default class FooterRow extends Component {
	render() {
		return (
			<footer className="page-bottom">
				{/* <div>
					<span className="title">吃货网</span>
					<span className="chat">|</span>
					<span className="title">JAVASCRIPT</span>
					<span className="chat">|</span>
					<span className="title">REACT</span>
					<span className="chat">|</span>
					<span className="title">前端</span>
					<span className="chat">|</span>
					<span className="title">电商网站</span>
					<span className="chat">|</span>
					<span className="title">奇点俱乐部</span>
				</div> */}
				<div className="row-2">
					<span className="versions">© 2018-2019 ChiHuo.com 版权所有</span>
				</div>
			</footer>
		);
	}
}
