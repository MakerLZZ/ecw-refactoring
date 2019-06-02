import React, { Component } from 'react';
import './index.less';
import { Pagination } from 'antd';
import GoodsItem from './goods';
import events from '@/libs/events';
import Http from '@/http';

const PAGESIZE = 16;
let total = 0;
export default class HomePageGoodsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageSize: PAGESIZE,
			goodsIndex: 0,
			data: [],
			values: [],
			type: 0
		};
	}

	componentWillMount() {
		Http.get('/getGoodsList').then((res) => {
			this.setState({
				data: res.data.data
			});
			total = res.data.data.length;
		});
	}

	componentDidMount() {
		events.on('changeGoods', this.changeGoods);
		events.on('changeSort', this.changeSort);
	}

	componentWillUnmount() {
		events.remove('changeGoods');
	}

	changeGoods = (values) => {
		const cloneVal = JSON.parse(JSON.stringify(values));
		this.setState({ values: cloneVal });
	};

	changeSort = (type) => {
		this.setState({ type });
	};

	resetData = (values, type) => {
		let msg = this.state.data;
		let data = JSON.parse(JSON.stringify(msg));
		switch (type) {
			case 0:
				data = msg;
				break;
			case 1:
				data = data.sort((pre, cur) => cur.goods_sales - pre.goods_sales);
				break;
			case 3:
				data = data.sort((pre, cur) => +cur.goods_price - +pre.goods_price);
				break;
			case 2:
				data = data.sort((pre, cur) => +pre.goods_price - +cur.goods_price);
				break;
			default:
				data = msg;
				break;
		}
		if (values.length !== 0) {
			data = this.dataSearch(data, values, values.length);
		}
		total = data.length;
		return this.MapItem(data);
	};

	/**
	 * 数据查询
	 */
	dataSearch = (data_, values, length) => {
		length -= 1;
		if (!data_ || data_.length === 0) {
			return [];
		}
		if (length >= 0) {
			const searchKey = values.pop();
			return this.dataSearch(
				data_.filter((e) => {
					let matchStr = e.goods_title + e.goods_price + e.goods_sales + e.goods_location;
					if (matchStr.indexOf(searchKey) >= 0) {
						return true;
					} else {
						return false;
					}
				}),
				values,
				length
			);
		} else {
			return data_;
		}
	};
	// getSortFun = (order, sortBy) => {     var ordAlpah = (order === 'asc')  ? '>'
	//         : '<';     var sortFun = new Function('a', 'b', 'return a.' + sortBy
	// + ordAlpah + 'b.' + sortBy + '?1:-1');     return sortFun; } 只遍历小于等于8个 遍历函数
	MapItem = (msg) => {
		var flag = 0;
		var index = this.state.goodsIndex;
		var length = this.state.pageSize;
		if (msg.length - index <= length) {
			length = msg.length - index;
		}
		var newGoods = [];
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
		let msg = this.state.data;
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
		// let msg = this.state.data;
		const { values, type } = this.state;
		const cloneVal = JSON.parse(JSON.stringify(values));
		return (
			<div className="goods-row">
				<div className="goods-list">{this.resetData(cloneVal, type)}</div>
				<Pagination
					className="page-row"
					total={total}
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
