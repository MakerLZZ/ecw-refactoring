import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import PropTypes from 'prop-types'

import './content.css'

const FormItem = Form.Item;

const accounts = ['123123', '321123', '213123']

class FirstContent extends Component {
    static propTypes = {
        getAccount: PropTypes.func
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    var account = values.account;
                    if (accounts.indexOf(account) > -1) {
                        message.error('账号已存在！');
                    } else {
                        message.success('账号设置成功！');
                        this
                            .props
                            .getAccount(account)
                    }
                }
            });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 6
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 14
                }
            }
        };
        return (
            <Form className='all-content' onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="用户名" hasFeedback>
                    {getFieldDecorator('account', {
                        rules: [
                            {
                                type: 'string',
                                message: '输入一个用户名!'
                            }, {
                                required: true,
                                message: '请输入长度大于6小于12的用户名'
                            }, {
                                pattern: '^[A-Za-z0-9]+$',
                                message: '请输入数字或者英文字母组成的用户名'
                            }, {
                                min: 6,
                                message: '请输入长度大于6小于12的用户名'
                            }, {
                                max: 12,
                                message: '请输入长度大于6小于12的用户名'
                            }
                        ]
                    })(<Input/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="">
                        下一步
                    </Button>
                </FormItem>
            </Form>
        );
    }
};

const WrappedHorizontalLoginForm = Form.create()(FirstContent);
export default WrappedHorizontalLoginForm;