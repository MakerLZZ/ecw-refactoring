import React, { Component } from 'react';
import './index.less';
import { Pagination } from 'antd';
import GoodsItem from './goods';
import GoodsImg from '@/assets/images/home/goods_img.png';

var msg = [
	{
		key: 0,
		no: '0',
		img_src: GoodsImg,
		goods_price: '0.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 1,
		no: '1',
		img_src: GoodsImg,
		goods_price: '1.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 2,
		no: '2',
		img_src: GoodsImg,
		goods_price: '2.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 3,
		no: '3',
		img_src: GoodsImg,
		goods_price: '3.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 4,
		no: '4',
		img_src: GoodsImg,
		goods_price: '4.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 5,
		no: '5',
		img_src: GoodsImg,
		goods_price: '5.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 6,
		no: '6',
		img_src: GoodsImg,
		goods_price: '6.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 7,
		no: '7',
		img_src: GoodsImg,
		goods_price: '7.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 8,
		no: '8',
		img_src: GoodsImg,
		goods_price: '8.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 9,
		no: '9',
		img_src: GoodsImg,
		goods_price: '9.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 10,
		no: '10',
		img_src: GoodsImg,
		goods_price: '10.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 11,
		no: '11',
		img_src: GoodsImg,
		goods_price: '11.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 12,
		no: '12',
		img_src: GoodsImg,
		goods_price: '12.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 13,
		no: '13',
		img_src: GoodsImg,
		goods_price: '13.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 14,
		no: '14',
		img_src: GoodsImg,
		goods_price: '14.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 15,
		no: '15',
		img_src: GoodsImg,
		goods_price: '15.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 16,
		no: '16',
		img_src: GoodsImg,
		goods_price: '16.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 17,
		no: '17',
		img_src: GoodsImg,
		goods_price: '17.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 18,
		no: '18',
		img_src: GoodsImg,
		goods_price: '18.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	},
	{
		key: 19,
		no: '19',
		img_src: GoodsImg,
		goods_price: '19.00',
		goods_sales: 50,
		goods_title: '【天猫超市】黑人牙膏双重薄荷225g清新口气有效防蛀去牙渍去口臭',
		goods_location: '浙江杭州'
	}
];

const PAGESIZE = 16;

export default class HomePageGoodsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageSize: PAGESIZE,
			goodsIndex: 0
		};
	}

	// getSortFun = (order, sortBy) => {     var ordAlpah = (order === 'asc')  ? '>'
	//         : '<';     var sortFun = new Function('a', 'b', 'return a.' + sortBy
	// + ordAlpah + 'b.' + sortBy + '?1:-1');     return sortFun; } 只遍历小于等于8个 遍历函数
	MapItem = () => {
		var flag = 0;
		var index = this.state.goodsIndex;
		var length = this.state.pageSize;
		if (msg.length - index <= length) {
			length = msg.length - index;
		}
		var newGoods = new Array(length);
		for (var i = index; i < index + length; i++) {
			newGoods[flag] = msg[i];
			flag++;
		}

		return newGoods.map((v) => {
			return (
				<GoodsItem
					goods_location={v.goods_location}
					goods_title={v.goods_title}
					goods_sales={v.goods_sales}
					goods_price={v.goods_price}
					img_src={v.img_src}
					no={v.no}
					key={v.key}
				/>
			);
		});
	};

	handlePagination = (page, pageSize) => {
		var nowPageSize = this.state.pageSize;
		var index = (page - 1) * nowPageSize;
		this.setState({ goodsIndex: index });
	};

	handleSizeChange = (current, size) => {
		this.setState({ pageSize: size });
		//当前页数与更改后总页数比较
		var oldPage = current;
		var newAllPage = msg.length % size;
		var pageSize = size;
		var index = (newAllPage - 1) * pageSize;
		var index_ = (oldPage - 1) * pageSize;
		//如果当前页数大了就往下面减 直到作为改后页数的最后一页 并修改index
		if (oldPage > newAllPage) {
			this.setState({ goodsIndex: index });
		} else {
			//如果当前页数小 就直接修改index
			this.setState({ goodsIndex: index_ });
		}
	};

	render() {
		return (
			<div className="goods-row">
				<div className="goods-list">{this.MapItem()}</div>
				<div className="float" />
				<Pagination
					className="page-row"
					size="small"
					total={msg.length}
					defaultPageSize={this.state.pageSize}
					showQuickJumper
					onChange={this.handlePagination}
					onShowSizeChange={this.handleSizeChange}
					pageSizeOptions={[ '8', '16', '32' ]}
					showSizeChanger={true}
				/>
			</div>
		);
	}
}
