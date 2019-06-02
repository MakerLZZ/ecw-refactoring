import Mock from 'mockjs';
import GoodsImg from '@/assets/images/cart/goods_img.png';

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

const goodsList = {
	code: 0,
	msg: '成功',
	'data|17-30': [
		{
			'key|+1': 0,
			'no|+1': 0,
			img_src: GoodsImg,
			'goods_price|1-1000.1-2': 1,
			'goods_sales|1-10000': 2,
			'goods_title|1': [ '【天猫超市】盼盼豆腐干', '原味' ],
			goods_location: '@county(true)'
		}
	]
};

Mock.mock(/\/getUserDetail/, userDetail);
Mock.mock(/\/getGoodsList/, goodsList);

export default Mock;
