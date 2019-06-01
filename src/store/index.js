/**
 * createStore：方法创建Redux Store
 * applyMiddleware：生成中间件
 */
import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger'; // 一个很便捷的 middleware，用来打印 action 日志

import thunkMiddleware from 'redux-thunk'; //允许我们异步处理Action middleware

import { composeWithDevTools } from 'redux-devtools-extension'; // 浏览器redux-devtools-extension的可视化工具。

import reducer from './reducers';

const loggerMiddleware = createLogger({ collapsed: true });

const store = createStore(reducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware)));

export default store;
