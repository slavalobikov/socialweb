import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setDataLoginThunk} from "../../../Redux/Reducers/AuthReducer";
/*
import {Input} from "../../../common/FormConrols/FormsControls";
*/
import {required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "./../../../common/FormConrols/FormsControls.module.css"
import Preloader from "../../../common/Preloader";

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const Login = (props) => {


/*    const onSubmit = (formData) => {
        props.setDataLoginThunk(formData.Login, formData.Password);
        console.log(formData.Password)
    };*/

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

/*    if (props.isFetching) {
        return <Preloader/>
    }*/

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
                    </div>
                </div>
            </div>
        </div>
    )
};

const NormalLoginForm = (props) => {
    console.log(props)
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
                        message: 'Please input your Username!',
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
                        message: 'Please input your Password!',
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

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
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
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};
/*
const LoginForm = (props) => {
    return (
        /!*<div className={s.background}>
            <div className={s.box}>
                <h1>Авторизация</h1>

                <form onSubmit={props.handleSubmit}>
                    <div className={s.inputBlock}>
                        <Field className={s.auth} placeholder='login' name={"Login"} component={Input}
                               validate={[required]}/>
                        <label className={s.label} >Login</label>

                    </div>
                    <div className={s.inputBlock}>
                        <Field className={s.auth} placeholder='password' name={"Password"} type={"password"} component={Input}
                               validate={[required]} />
                        <label className={s.label} >Пароль</label>

                    </div>

                    { props.error && <div className={style.formSummaryError}>
                        {props.error}
                    </div>}
                    <div className={s.btn}><button> Войти в акаунт </button></div>
                </form>
            </div>

        </div>*!/

        <div className={s.wrapper}>
        <div className={s.main}>
        <h1 className={s.authorization}>Авторизация</h1>
    <form onSubmit={props.handleSubmit}>
        <div className={s.field}>
            <Field id="login" name={"Login"} component={Input}
                   validate={[required]} text={'login'}/>
        </div>
        <div className={s.field}>
            <Field id="passwd" name={"Password"} type={"password"} component={Input}
                   validate={[required]} text={'password'} />
        </div>
        <div className={s.btn}><button> Войти в акаунт </button></div>
    </form>
    </div>

</div>
    )
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);*/


const mapStateToProps = (state) => ({
    isAuth: state.AuthPageReducer.isAuth,
    isFetching: state.UsersPageReducer.isFetching,
});

export default connect(mapStateToProps, {setDataLoginThunk})(Login);