import React, {useState} from 'react';
import s from './Main.module.css'
import Post from "./Post/Post";
import Preloader from "../../../common/Preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import StatusHook from "./Status/StatusWithHook";
import DescriptoinStatusForm from "./Description/Description";


const Main = (props) => {


    if (!props.profile) {
        return <Preloader/>
    }

    const handleSubmit = (formData) => {
        console.log('formData', formData)
    };


    let PostElement = props.profilePage.map(p => <Post img={p.img} text={p.text} key={p.id} name={p.name}/>);


    const addNewPost = (postData) => {
        props.addPost(postData.newPostBody)
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };


    return (
        <div className={s.content}>
            {props.isFetching ? <Preloader/>
                : <div className={s.ava}>
                    <img
                        src={!props.photo ? 'https://img8.eadaily.com/r650x450/o/7ac/95f49146b4501082acd22918d4cc2.jpg' : props.photo}
                        alt=""/>

                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
            }
            <div className={s.me}>
                {props.profile.fullName}
                <StatusHook status={props.status} updateStatus={props.updateStatusThunk} id={props.id}
                            userID={props.match.params.userID}/>
            </div>
            <DescriptoinStatusForm handleSubmit={handleSubmit} contacts={props.profile.contacts}
                                   lookingForAJob={props.lookingForAJob}/>
            <div className={s.posts}>
                <AddPostFormRedux onSubmit={addNewPost}/>
                {PostElement}
            </div>

        </div>

    )
};

const maxLength = maxLengthCreator(300);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostBody"} placeholder={"Написать пост"}
                   validate={[required, maxLength]}/>
            <button>Отрправить</button>
        </form>

    )
};

const AddPostFormRedux = reduxForm({form: "postAddPostForm"})(AddPostForm);

/*
const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b>: <span>{contactValue}</span>
    </div>
}
*/


export default Main;