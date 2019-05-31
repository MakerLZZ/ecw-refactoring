import React, {Component} from 'react';
import './index.less'
import PropTypes from 'prop-types'
import {Steps} from 'antd'
import FirstContent from './firstContent'
import SecondContent from './secondContent'
import ThirdContent from './thirdContent'

const Step = Steps.Step

export default class Register extends Component {
    state = {
        current: 0
    }

    static propsTypes = {
        topMenuVisitor: PropTypes.any
    }

    let = {
        account: '1',
        password: 0
    }

    componentWillMount() {
        this.props.hideFooter();
    }

    getAccount(e) {
        this.account = e
        const current = this.state.current + 1;
        this.setState({current});
    }

    getPassword(e) {
        this.password = e
        // ajax 注册用户（账号密码） 并且跳到注册完成content
        const current = this.state.current + 1;
        this.setState({current});
    }

    componentWillUnmount() {
        this
            .props
            .showFooter()
    }

    render() {
        const firstContent = (<FirstContent getAccount={(e) => this.getAccount(e)}/>)

        const secondContent = (<SecondContent getPassword={(e) => this.getPassword(e)}/>)

        const thirdContent = (<ThirdContent
            account={this.account}
            topMenuVisitor={this.props.topMenuVisitor}/>)

        const steps = [
            {
                title: '设置用户名',
                content: firstContent
            }, {
                title: '设置密码',
                content: secondContent
            }, {
                title: '注册成功',
                content: thirdContent
            }
        ];

        return (
            <div className='register-page'>
                <div className='register-page-top'>
                    <span className='register-page-title'>用户注册</span>
                </div>
                <div>
                    <Steps
                        current={this.state.current}
                        style={{
                        color: '#F40'
                    }}>
                        {steps.map(item => <Step key={item.title} title={item.title}/>)}
                    </Steps>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                </div>
            </div>
        );
    }
};