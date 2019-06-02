import Mock from 'mockjs';
import GoodsImg from '@/assets/images/cart/goods_img.png';

// 用户详情
const userDetail = {
	code: 0,
	msg: '成功',
	data: {
		userName: /^[A-Za-z0-9]{6,12}$/,
		name: '@cname()',
		avatar: 'http://frcfile.jimicloud.com/fe244a78d0e44a7fad9e7e5cee5bd508.png',
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
			img_src: GoodsImg,
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
			cartItemImgSrc: GoodsImg,
			cartItemTitle: 'Lay’s/乐事薯片飘香麻辣锅味70g*6袋 休闲膨化吃货零食',
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
			img_src: GoodsImg,
			detail: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
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
