import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import PageTop from './pageTop';
import GoodsList from '@/components/goodsList';
import BackTop from './backTop';

export default class Home extends Component {
	static propsTypes = {
		loginSuccess: PropTypes.bool,
		topMenuVisitor: PropTypes.any
	};

	render() {
		return (
			<div className="home-page">
				<PageTop loginSuccess={this.props.loginSuccess} topMenuVisitor={this.props.topMenuVisitor} />
				<GoodsList />
				<BackTop />
			</div>
		);
	}
}
