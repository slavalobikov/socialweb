import React from 'react';
import s from './Login.module.css'
import {connect} from "react-redux";
import  {setDataLoginThunk} from "../../../Redux/Reducers/AuthReducer";

import {Redirect} from "react-router-dom";


import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const Login = (props) => {


    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }


    return (
        <div className={s.login}>
            <div className={s.main}>
                <div className={s.block}>
                    <div className={s.wrapper}>
                        <div className={s.flex}>
                            <h1>Авторизация</h1>
                        </div>
                        <NormalLoginForm
                            isFetching={props.isFetching}
                            setDataLoginThunk={props.setDataLoginThunk} />
                        {!!props.error && <div className={s.error}>{props.error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
};

const NormalLoginForm = (props) => {
    const onFinish = (values) => {
        props.setDataLoginThunk(values.username, values.password)
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введите ваш логин!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите ваш пароль!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>


            </Form.Item>

            <Form.Item>
                {!!props.isFetching &&
                <Button loading type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>}
                {!props.isFetching &&
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                }
                <span>Or <a href="https://social-network.samuraijs.com/signUp">register now!</a></span>
            </Form.Item>
        </Form>
    );
};


const mapStateToProps = (state) => ({
    isAuth: state.AuthPageReducer.isAuth,
    isFetching: state.UsersPageReducer.isFetching,
    error: state.AuthPageReducer.error,

});

export default connect(mapStateToProps, {setDataLoginThunk})(Login);