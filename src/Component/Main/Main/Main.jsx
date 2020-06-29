import React from 'react';
import s from './Main.module.css'
import Post from "./Post/Post";

const Main = (props) => {

    let PostElement = props.profilePage.map ( p => <Post img={p.img} text={p.text} key={p.id} name={p.name} />  );

    let onChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    let addPost = () => {
        props.addPost();
    };


    return (
        <div className={s.content}>

            <img src={props.photo} alt=""/>
            <textarea value={props.newPostText} onChange={onChange}> </textarea>  <button onClick={ addPost } >Отрправить </button>
            {PostElement}
        </div>

    )
};

export default Main;