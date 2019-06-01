import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopLogin from './topLogin';
import TopLogout from './topLogout';
import { Carousel } from 'antd';
import './index.less';
import ad from '@/assets/images/home/ad.png';
import TopGoods from '@/assets/images/home/top_goods.png';
// import Ad_Img_1 from './home_page_img/carousel_ad_1.png'
import Ad_Img_2 from '@/assets/images/home/carousel_ad_2.png';
import Ad_Img_3 from '@/assets/images/home/carousel_ad_3.png';

import PropTypes from 'prop-types';
export default class PageTop extends Component {
	static propsTypes = {
		loginSuccess: PropTypes.bool,
		topMenuVisitor: PropTypes.any
	};

	render() {
		return (
			<div className="home-page-top">
				<div className="carousel-ad">
					<Carousel autoplay>
						<div>
							<img src={Ad_Img_3} alt="" />
						</div>
						<div>
							<img src={Ad_Img_2} alt="" />
						</div>
						<div>
							<img src={Ad_Img_3} alt="" />
						</div>
						<div>
							<img src={Ad_Img_2} alt="" />
						</div>
					</Carousel>
				</div>
				<div className="center-ad">
					<img src={ad} alt="" />
				</div>
				<div className="home-page-top-right">
					{this.props.loginSuccess ? <TopLogin /> : <TopLogout topMenuVisitor={this.props.topMenuVisitor} />}
					<div className="goods-max">
						<div className="goods-max-title">
							<span>热门推荐</span>
						</div>
						<Link to={'/goods_detail/' + 0}>
							<div className="goods">
								<div className="goods-detail-max" id="goods-detail-max-img">
									<img src={TopGoods} alt="" />
								</div>
								<div className="goods-detail-max" id="goods-detail-max-name">
									神厨小福贵
								</div>
								<div className="goods-detail-max" id="goods-detail-max-price">
									销量：20
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
