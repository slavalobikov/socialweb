import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    return (

        <div className={s.post}>

            <img className={s.imgAva} src={props.photo
            || 'https://img8.eadaily.com/r650x450/o/7ac/95f49146b4501082acd22918d4cc2.jpg'} alt={props.name}/>

            <div className={s.postArea}>
                <div className={s.postName}>
                    {props.fullname}
                </div>
                <div className={s.postText}>
                    {props.text}
                </div>
            </div>
        </div>

    )
};


export default Post;