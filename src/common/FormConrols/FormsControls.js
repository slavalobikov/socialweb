import React from 'react';
import s from './FormsControls.module.css'
import {Field} from "redux-form";

export const Input = ({input, meta, text, ...props} ) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + ( hasError ? s.error : " ")} >
            <div>
                <input  className={s.Input} {...input} {...props} />
                <label htmlFor={text} className={s.Label}>{text}</label>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + ( hasError ? s.error : " ")} >
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};
