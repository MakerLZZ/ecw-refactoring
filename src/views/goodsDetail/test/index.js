import React from 'react';
import { connect } from 'react-redux';
import { addBookAction, deleteBookAction } from '@/store/action';

/**
 * 基于react-redux 的一书籍管理的示例Dome
 * 字段：{
 *  2、bookName：书籍名称
 * }
 */
const Content = ({ dataList, addBook, deleteBook }) => {
	let onAdd = () => {
		let bookname = document.getElementById('inputs').value;
		if (bookname) {
			addBook(bookname);
		}
	};

	let onDelete = (value) => {
		deleteBook(value);
	};
	return (
		<div id="view5">
			<p>
				<input id="inputs" type="text" placeholder="请输入书籍名称" />&emsp;
				<button onClick={() => onAdd()}>添加</button>
			</p>

			<ul>
				<li>Number</li>
				<li>书籍名称</li>
				<li>操作</li>
			</ul>
			{dataList.map((value, index) => {
				return (
					<ul key={index}>
						<li>{index + 1}</li>
						<li>{value}</li>
						<li className="delete" onClick={() => onDelete(value)}>
							删除
						</li>
					</ul>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		dataList: state.toBook
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addBook: (bookname) => {
			dispatch(addBookAction(bookname));
		},
		deleteBook: (bookname) => {
			dispatch(deleteBookAction(bookname));
		}
	};
};

const Connects = connect(mapStateToProps, mapDispatchToProps)(Content);

class Test extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Connects />
			</div>
		);
	}
}

export default Test;
