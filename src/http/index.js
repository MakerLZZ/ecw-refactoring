import loading from '../components/loading/index'; // 加载动画插件

import message from '../components/message/index'; // 提示动画插件

import axios from 'axios';

import Vue from 'vue';

import qs from 'qs';

import {store} from '../store';

import router from '../router/index';

axios.defaults.timeout = 30 * 1000; // 响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 配置请求头

/**
 * 环境的切换 - 配置接口地址
 */
if (process.env.NODE_ENV === 'development') { // 开发环境
    // axios.defaults.baseURL = '/api'; // 代理
    axios.defaults.baseURL = 'http://10.0.10.7/imc'; // 测试服务器
} else if (process.env.NODE_ENV === 'production') { // 线上环境
    axios.defaults.baseURL = window.config.baseURL; // 线上地址
}

const LOADING = loading.install();
const MESSAGE = message.install(Vue, {
    animation: 'jump'
});

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {

    if (store.state.login.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = 'Bearer ' + store.state.login.token;
    }

    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
        config.data = qs.stringify(config.data, {
            arrayFormat: 'repeat'
        }); // 序列化请求参数
    }

    return config;

}, error => {
    LOADING.hide();
    return Promise.reject(error);
});

/**
 * 响应拦截器
 */
axios.interceptors.response.use(res => {

    LOADING.hide();
    if (res.data.code) {
        MESSAGE.destroy();
        MESSAGE.show('error', `${res.data.message}`);
    }

    if (res.data.code === 1201 || res.data.code === 1202 || res.data.code === 1206) {
        router.replace({
            path: '/login',
        });
    }

    return res;

}, err => {
    LOADING.hide();
    MESSAGE.destroy();
    MESSAGE.show('error', '出错了, 请稍后再试!');
    return Promise.reject(err);
});

export default axios;

/** 
 * get方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 */
export function get(url, params) {
    let time = new Date().getTime();
    return new Promise((resolve, reject) => {
        axios.get(`${url}?time=${time}`, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

/** 
 * post方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 请求的配置
 */
export function post(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

/** 
 * put方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 请求的配置
 */
export function put(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.put(url, params, config).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}

/** 
 * delete方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 请求的配置
 */
export function del(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
}


import axios from 'axios';
// import qs from 'qs';
import cookie from 'js-cookie';
import store from '../vuex/store';

let refreshCount = 0;//用于重新请求时计数
let prevent = true;//请求全局控制器，禁止修改或取消
axios.interceptors.request.use(function (config) {
    if(config.url.indexOf('/oauth/token') != -1){
        return config;
    }
    if(config.url.indexOf('/logout') != -1){
        return config;
    }
    if(config.url.indexOf('/getPlatform') != -1){
        return config;
    }
    if(config.method === 'get'){
        config.data = {unused: 0};
    }
    if(cookie.getJSON('token')){
        cookie.set('tokenTime',1,{  expires:1/24*2 });//每次接口访问，便刷新用户的访问时间
        return config;
    }else{
        const tokenTime = cookie.getJSON('tokenTime');//用户记录用户是否有操作状态
        // 有无操作状态
        if(!tokenTime){
            window.location.href = '/#/login/';
        }else{
            if(refreshCount >= 1){
                return;
            }
            refreshCount++;
            const refreshTokens = cookie.getJSON('refreshToken');//每次接口访问，便刷新用户的访问时间
            store.dispatch('refreshToken',refreshTokens).then(res =>{
                const data = res.data ||{};
                cookie.set('token',data.access_token,{  expires: 1/24*2 });
                window.history.go(0);
            });
        }
    }
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8';
// 添加响应拦截器
axios.interceptors.response.use(
    function(res) {
        prevent = true;
        const status = res.data.code;
        switch (status) {
        case 1002:
            window.location.href = '/#/login/';
            window.history.go(0);
            break; 
        case 1202:
            window.location.href = '/#/login/'; 
            window.history.go(0);
            break;
        case 1204:
            window.location.href = '/#/login/'; 
            window.history.go(0);
            break;
        case 1206:
            window.location.href = '/#/login/'; 
            window.history.go(0);
            break;
        default:
            return res.data;
        }
        
        
    },
    function(err) { 
        prevent = true;
        // 计算用户树是否两个小时无操作进行返回登录
        // console.log(err,'获取的错误信息');
        // //token失效
        // if(err == 'Error: Request failed with status code 401'){
            
        // }
        // if(err && err.response){
        //     console.log('获取的错误信息11111111111',err);
        // }
        return Promise.reject(err);
    },
);
const http = {
    /**
     * 统一get请求
     * @param {string} url请求路径 请求路径
     * @param {*} params 数据
     * @param {Boolean} stop 是否开启阻止重复点击，默认不阻止
     */
    get(url, params,stop) {
        if(stop){
            stopRepeatClick();
        }
        const token = cookie.getJSON('token');
        return new Promise(resolve => {
            axios({
                method: 'GET',
                url: url,
                params: params,
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                validateStatus: function (status) {
                    return status < 500; // 状态码在大于或等于500时才会 reject
                }
            })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    return console.log('axios get错误:', err);
                    
                });
        });
    },

    /**
     * 统一post请求
     * @param {string} url 请求路径
     * @param {*} data 数据
     * @param {Boolean} stop 是否开启阻止重复点击，默认不阻止
     */
    post(url, data,stop) {
        if(stop){
            stopRepeatClick();
        }
        const token = cookie.getJSON('token');
        return new Promise(resolve => {
            axios({
                method: 'POST',
                url: url,
                data: data,
                // transformRequest: [function (data) {
                //     let ret = data;
                //     ret = qs.stringify(data);
                //     return ret;
                // }],
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                validateStatus: function (status) {
                    // console.log(status,'错误的状态码');
                    return status < 500; // 状态码在大于或等于500时才会 reject
                }
            })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    console.log('axios post错误:', err);
                    return;
                });
        });
    },
};

const stopRepeatClick = ()=>{
    if(!prevent){
        return;
    }
    prevent = false;
};

export default http;

