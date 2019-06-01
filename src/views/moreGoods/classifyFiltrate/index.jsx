import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';
import GroupRow from './groupRow';
import GroupTag from './groupTag';

const SHOWTEXT = '显示筛选';
const CLOSETEXT = '收起筛选';

var group_rows = [
	{
		key: 0,
		group_row_num: 'group_row_0',
		classifyName: '类型：',
		id: 'group_row_0'
	},
	{
		key: 1,
		group_row_num: 'group_row_1',
		classifyName: '品牌：',
		id: 'group_row_1'
	},
	{
		key: 2,
		group_row_num: 'group_row_2',
		classifyName: '口味：',
		id: 'group_row_2'
	},
	{
		key: 3,
		group_row_num: 'group_row_3',
		classifyName: '原产地：',
		id: 'group_row_3'
	}
];

var group = {
	0: [
		'鸭肉类零食',
		'鸡肉类零食',
		'膨化食品',
		'传统糕点',
		'糖果',
		'牛肉类',
		'鱼系列',
		'西式糕点',
		'猪肉类',
		'素肉',
		'豆腐干',
		'猪肉脯',
		'蛋卷饼干',
		'鱿鱼系列',
		'曲奇饼干',
		'营养（消化）饼干',
		'夹心饼干',
		'果仁巧克力'
	],
	1: [
		'良品铺子',
		'Three Squirrels/三只松鼠',
		'Lay`s/乐事',
		'BE&CHEERY/百草味',
		'旺旺',
		'口水娃',
		'Oishi/上好佳',
		'咪咪',
		'友臣',
		'爱尚',
		'卫龙',
		'GUI FA XIANG/桂发祥十八街',
		'张飞',
		'劲仔',
		'达利园',
		'盼盼',
		'御派豪情',
		'津津',
		'乐锦记',
		'宏香记',
		'Franzzi/法丽兹',
		'卜珂',
		'绝艺',
		'福派园',
		'闲中好',
		'宝语',
		'乐吧',
		'南国',
		'星芙',
		'君仔',
		'啪啪通（印度尼西亚）'
	],
	2: [
		'原味',
		'麻辣味',
		'香辣味',
		'烧烤味',
		'香辣',
		'番茄味',
		'五香',
		'芝士味',
		'海苔味',
		'葱香味',
		'鲜虾味',
		'孜然味',
		'咖喱味',
		'沙嗲味',
		'蛋黄味',
		'黑胡椒味',
		'五香味',
		'蔓越莓味',
		'焦糖味',
		'泡椒味'
	],
	3: [
		'北京市',
		'天津市',
		'上海市',
		'重庆市',
		'河北省',
		'山西省',
		'辽宁省',
		'吉林省',
		'黑龙江省',
		'江苏省',
		'浙江省',
		'安徽省',
		'福建省',
		'江西省',
		'山东省',
		'河南省',
		'湖北省',
		'湖南省',
		'广东省',
		'海南省',
		'四川省',
		'贵州省',
		'云南省',
		'陕西省',
		'甘肃省',
		'青海省'
	]
};

export default class ClassifyFiltrate extends Component {
	state = {
		showFiltrateButton: CLOSETEXT,
		groupsBox: 'block',
		icon: 'up',
		groupRowClassName: 'group-row',
		tags: []
	};

	handleShowClick = () => {
		var nowText = this.state.showFiltrateButton;
		if (nowText === SHOWTEXT) {
			this.setState({ showFiltrateButton: CLOSETEXT, groupsBox: 'block', icon: 'up' });
		} else {
			this.setState({ showFiltrateButton: SHOWTEXT, groupsBox: 'none', icon: 'down' });
		}
	};

	handleConditionClick = (text, id) => {
		//孙子组件 点击事件返回至祖父组件方法体中 父组件某个元素隐藏
		var groupRow = document.getElementById(id);
		groupRow.style.display = 'none';

		var tagArr = this.state.tags;
		var tag = text;
		tagArr.push(tag);
		this.setState({ tags: tagArr });
	};

	mapTags = () => {
		var tags = this.state.tags;
		return tags.map((v) => {
			return <GroupTag key={v} text={v} />;
		});
	};

	mapGroupRowNums = () => {
		return group_rows.map((v, index) => {
			return (
				<GroupRow
					data={group[index]}
					classifyName={v.classifyName}
					id={v.id}
					key={index}
					handleConditionClick={(text, id) => this.handleConditionClick(text, id)}
					className={this.state.groupRowClassName}
				/>
			);
		});
	};

	render() {
		return (
			<div className="">
				<div className="total-classify-row">
					<ul className="tabs">
						<li className="tab">
							<div className="link selected">
								所有宝贝
							</div>
						</li>
					</ul>
				</div>
				<div className="all-classify-menu">
					<div className="filtrate-condition-row">
						<div className="expand-collapse" onClick={this.handleShowClick}>
							<span>
								<span>{this.state.showFiltrateButton}</span>
								<Icon type={this.state.icon} className="expand-collapse-down" />
							</span>
						</div>
						<span className="all-text">所有分类</span>
						<Icon type="right" className="icon-right" /> {this.mapTags()}
					</div>
					<div
						className="filtrate-groups-box"
						style={{
							display: this.state.groupsBox
						}}
					>
						<div className="group">{this.mapGroupRowNums()}</div>
					</div>
				</div>
			</div>
		);
	}
}
