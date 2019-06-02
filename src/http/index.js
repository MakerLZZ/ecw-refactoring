import axios from 'axios';

// axios请求拦截器配置 请求头 条件等
// axios响应拦截器配置 错误码的封装 loading状态关闭等操作

const http = {
	/**
     * get请求
     * @param {string} url请求路径 请求路径
     */
	get(url, params) {
		// const token = cookie.getJSON('token');
		return new Promise((resolve) => {
			axios({
				method: 'GET',
				url: url,
				params: params,
				// headers: {
				// 	Authorization: 'Bearer ' + token
				// },
				validateStatus: function(status) {
					return status < 500; // 状态码在大于或等于500时才会 reject
				}
			})
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					return console.log('axios get错误:', err);
				});
		});
	},

	/**
     * post请求
     * @param {string} url 请求路径
     * @param {*} data 数据
     */
	post(url, data) {
		// const token = cookie.getJSON('token');
		return new Promise((resolve) => {
			axios({
				method: 'POST',
				url: url,
				data: data,
				// headers: {
				// 	Authorization: 'Bearer ' + token
				// },
				validateStatus: function(status) {
					// console.log(status,'错误的状态码');
					return status < 500; // 状态码在大于或等于500时才会 reject
				}
			})
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					return console.log('axios post错误:', err);
				});
		});
	}
};

export default http;
