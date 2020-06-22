import React from "react";
import s from "./Post.module.css"


const Post = (props) => {
    
    return (
        <div>
            <div>
                <div> {props.name} </div>
                <img className={s.imgAva} src={props.img} alt={props.name} />
                 {props.text}
            </div>
        </div>
    )
}


export default Post;