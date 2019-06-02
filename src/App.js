import React, { Component } from 'react';
import './App.less';
import './assets/less/base.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, message } from 'antd';
import './mock';
import Cookie from 'js-cookie';
// 页面元素组件
import SerachRow from './components/searchRow';
import FooterRow from './components/footerRow';
import UserNav from './components/nav/user';
import VisitorNav from './components/nav/visitor';
// 页面
import Home from './views/home';
import MoreGoods from './views/moreGoods';
import GoodsDetail from './views/goodsDetail';
import Register from './views/register';
import UserCenter from './views/userCenter';
import Cart from './views/userCenter/cart';
import Mine from './views/userCenter/mine';
import Order from './views/userCenter/order';
import OrderSubmit from './views/userCenter/order/orderSubmit';
import OrderDetail from './views/userCenter/order/orderDetail';

const { Header, Content } = Layout;

export default class App extends Component {
	// static contextTypes = {
	// 	router: React.PropTypes.object
	// };

	state = {
		loginSuccess: false,
		userDetail: {}
	};

	componentWillMount() {
		let userDetail = Cookie.get('userDetail');
		if (userDetail) {
			this.setState({
				loginSuccess: true,
				userDetail: JSON.parse(userDetail)
			});
		}
	}

	setTopMenuVisitor(topMenuVisitor) {
		if (!this.state.topMenuVisitor) {
			this.setState({ topMenuVisitor });
		}
	}

	login(data) {
		this.setState({
			userDetail: data,
			loginSuccess: true
		});
	}

	logout = () => {
		message.success('注销成功！');
		Cookie.remove('userDetail');
		this.setState({
			loginSuccess: false
		});
	};

	render() {
		return (
			<div className="app">
				<Router>
					<Layout className="app-layout">
						<Header className="app-header">
							<div className="app-header-box">
								<VisitorNav
									ref={this.setTopMenuVisitor.bind(this)}
									className={this.state.loginSuccess ? 'visitor-nav-hidden' : 'visitor-nav'}
									login={(data) => this.login(data)}
								/>
								<UserNav
									className={this.state.loginSuccess ? 'user-nav' : 'user-nav-hidden'}
									logout={() => this.logout()}
									userDetail={this.state.userDetail}
								/>
							</div>
						</Header>
						<Content className="app-content">
							<SerachRow />
							<div className="app-content-container">
								<div className="app-content-box">
									<Route
										exact
										path="/"
										render={() => (
											<Home
												loginSuccess={this.state.loginSuccess}
												topMenuVisitor={this.state.topMenuVisitor}
												avatar={this.state.userDetail.avatar}
												userName={this.state.userDetail.userName}
											/>
										)}
									/>
									<Route exact path="/more_goods" component={MoreGoods} />
									<Route path="/order_detail" render={() => <OrderDetail />} />
									<Route
										exact
										path="/goods_detail/:id"
										render={({ match }) => (
											<GoodsDetail no={match.params.id} loginSuccess={this.state.loginSuccess} />
										)}
									/>
									<Route
										exact
										path="/register"
										render={() => <Register topMenuVisitor={this.state.topMenuVisitor} />}
									/>
									<Route exact path="/personal_center/:str" render={() => <UserCenter />} />
									<Route path="/personal_center/cart" render={() => <Cart />} />
									<Route path="/personal_center/order" render={() => <Order />} />
									<Route
										exact
										path="/personal_center/mine"
										render={() => <Mine userDetail={this.state.userDetail} />}
									/>
									<Route path="/order_submit" render={() => <OrderSubmit />} />
								</div>
							</div>
						</Content>
						<FooterRow />
					</Layout>
				</Router>
			</div>
		);
	}
}
