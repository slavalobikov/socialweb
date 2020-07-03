import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {setDataLoginThunk} from "../../../Redux/Reducers/AuthReducer";


const Login = (props) => {

    const onSubmit = (formData) => {
        setDataLoginThunk(formData);
        console.log(formData)
    };

    return (
        <div className={s.login}>
            Авторизация
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='login' name={"Login"} component={"input"} />  </div>
            <div><Field placeholder='password' name={"Password"} component={"input"} />  </div>
            <div><Field type='checkbox' name={"Remember me"} component={"c"} /> Запомнить меня  </div>
            <div><button> Войти в акаунт </button></div>
        </form>
    )
};

const  LoginReduxForm  = reduxForm({form: 'login'})(LoginForm);

export default Login;