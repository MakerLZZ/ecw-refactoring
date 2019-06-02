import Mock from 'mockjs';
import GoodsImg0 from '@/assets/images/goods/goods_0.png';
import GoodsImg1 from '@/assets/images/goods/goods_1.jpg';
import GoodsImg2 from '@/assets/images/goods/goods_2.jpg';
import GoodsImg3 from '@/assets/images/goods/goods_3.jpg';
import GoodsImg4 from '@/assets/images/goods/goods_4.jpg';
import GoodsImg5 from '@/assets/images/goods/goods_5.jpg';

import Avatar0 from '@/assets/images/mine/avatar_0.png';
import Avatar1 from '@/assets/images/mine/avatar_1.png';
import Avatar2 from '@/assets/images/mine/avatar_2.png';
import Avatar3 from '@/assets/images/mine/avatar_3.jpg';

const goodsImgs = [ GoodsImg0, GoodsImg1, GoodsImg2, GoodsImg3, GoodsImg4, GoodsImg5 ];
const avatarImgs = [ Avatar0, Avatar1, Avatar2, Avatar3 ];

// 用户详情
const userDetail = {
	code: 0,
	msg: '成功',
	data: {
		userName: /^[A-Za-z0-9]{6,12}$/,
		name: '@cname()',
		'avatar|1': avatarImgs,
		'sex|1': [ '1', '2' ],
		'constellation|1': [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
	}
};

// 商品列表
const goodsList = {
	code: 0,
	msg: '成功',
	'data|17-30': [
		{
			'key|+1': 0,
			'no|+1': 0,
			'img_src|1': goodsImgs,
			'goods_price|1-1000.2': 1,
			'goods_sales|1-10000': 2,
			'goods_title|1': [ '【天猫超市】盼盼豆腐干', '原味豆腐干', '良品铺子海苔味火腿肠' ],
			goods_location: '@county(true)'
		}
	]
};

// 购物车列表
const cartList = {
	code: 0,
	msg: '成功',
	'data|3-7': [
		{
			'key|+1': 0,
			'no|+1': 0,
			'cartItemImgSrc|1': goodsImgs,
			cartItemTitle: '@csentence(20, 30)', // 句子
			'cartItemUnit|1-1000': 1,
			'cartItemNum|1-50': 1,
			'cartItemInventory|51-500': 1
		}
	]
};

// 订单列表
const orderList = {
	code: 0,
	msg: '成功',
	'data|5-12': [
		{
			'key|+1': 0,
			'no|': 0,
			date: '@date("yyyy-MM-dd")',
			no: /^[0-9]{12}$/, // 12数字
			'img_src|1': goodsImgs,
			detail: '@csentence(20, 30)', // 句子
			'price|1-1000.2': 1,
			'num|1-800': 1,
			'condition|1-4': 1
		}
	]
};

// 收货地址
const addressList = {
	code: 0,
	msg: '成功',
	'data|3-9': [
		{
			'key|+1': 0,
			name: '@cname',
			area: '@county(true)',
			address: '@csentence(7, 10)',
			code: /^[0-9]{6}$/,
			phonenumber: '18502308752',
			'condition|1': true
		}
	]
};

Mock.mock(/\/getUserDetail/, userDetail);
Mock.mock(/\/getGoodsList/, goodsList);
Mock.mock(/\/getCartList/, cartList);
Mock.mock(/\/getOrderList/, orderList);
Mock.mock(/\/getAddressList/, addressList);

export default Mock;
