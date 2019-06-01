import Mock from 'mockjs';

const userDetail = {
	code: 0,
	msg: '成功',
	data: {
		userName: /^[A-Za-z0-9]{6,12}$/,
		name: '@cname()',
		avatar: 'http://frcfile.jimicloud.com/fe244a78d0e44a7fad9e7e5cee5bd508.png',
		'sex|1': [ '男', '女' ],
		'constellation|1': [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
	}
};

Mock.mock(/\/getUserDetail/, userDetail);

export default Mock;
