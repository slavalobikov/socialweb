import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import AuthPageReducer, {setDataLoginThunk} from "../../../Redux/Reducers/AuthReducer";
import {Input} from "../../../common/FormConrols/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "./../../../common/FormConrols/FormsControls.module.css"
import Preloader from "../../../common/Preloader";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.setDataLoginThunk(formData.Login, formData.Password);
        console.log(formData.Password)
    };

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    if (props.isFetching) {
        return  <Preloader/>
    }

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
            <div><Field placeholder='login' name={"Login"} component={Input}
                        validate={[required]}/>  </div>
            <div><Field placeholder='password' name={"Password"} type={"password"} component={Input}
                        validate={[required]} />  </div>
            <div><Field type='checkbox' name={"Remember me"} component={"c"} /> Запомнить меня  </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div><button> Войти в акаунт </button></div>
        </form>
    )
};



const  LoginReduxForm  = reduxForm({form: 'login'})(LoginForm);


const mapStateToProps = (state) => ({
    isAuth:state.AuthPageReducer.isAuth,
    isFetching:state.UsersPageReducer.isFetching,
});

export default connect(mapStateToProps,{setDataLoginThunk})(Login);