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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB-he-RnQ95Y_39HG8YfxMCCrwdBMlM_r3V6QFxlKnF7vjG6Fa&usqp=CAU" alt=""/>
            <textarea value={props.newPostText} onChange={onChange}> </textarea>  <button onClick={ addPost } >Отрправить </button>
            {PostElement}
        </div>

    )
};

export default Main;