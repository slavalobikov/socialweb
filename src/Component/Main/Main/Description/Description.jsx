import React, {useState} from 'react';
import {reduxForm} from "redux-form";

import s from './Description.module.css';




const Description = (props) => {

    const [fullName, setFullName] = useState( props.profile.fullName);
    const [github, setGithub] = useState( props.contacts.github);
    const [vk, setVk] = useState( props.contacts.vk);


    const Profile = {

            aboutMe: 'aboutMe',
            lookingForAJobDescription: 'Я не шучу, а играюсь',
            fullName: fullName,
            contacts: {
                facebook: '',
                website: '',
                vk: vk,
                twitter: '',
                instagram: '',
                youtube: '',
                github: github,
                mainLink: '',


            }
        };



    const saveInfo = (Profile) => {
        return props.saveProfile(Profile).then(
            () => {
                setEditMode(false)
            }
        )
    };

    const [editMode, setEditMode] = useState(false);

    return <div className={s.content}>
            {editMode
                ? <div>
{/*
                    <form onSubmit={handleSubmit}>
*/}
                        <button onClick={ () => saveInfo(Profile)}>Сохранить изменения</button>
                        <input type="text"/>
                        <div>  <input type={'text'} placeholder={'Введите ваше имя и фамилию'} value={fullName} onChange={e => setFullName(e.currentTarget.value)}/> </div>
                        <div>  <input type={'text'} placeholder={'Введите ссылку на ваш vk'} value={vk} onChange={e => setVk(e.currentTarget.value)}/> </div>
                        <div>  <input type={'text'} placeholder={'Введите ссылку на ваш github'} value={github} onChange={e => setGithub(e.currentTarget.value)}/> </div>
                        {/*<div><Field type='text' placeholder={'Введите ссылку на facebook'} name={'facebook'} component={Input} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на сайт'} name={'website'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на вк'} name={'vk'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на twitter'} name={'twitter'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на instagram'} name={'instagram'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на youtube'} name={'youtube'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на youtube'} name={'youtube'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на github'} name={'github'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на mainLink'} name={'mainLink'} component={'input'} /></div>*/}
{/*
                    </form>
*/}
                  </div>
                : <div>
                    {props.isOwner ?<button onClick={() => setEditMode(true)}>Изменить данные</button> : <div> </div>}
                    <div>{props.lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}</div>

                    <div>
                        <b>Контакты</b>: {
                        Object.keys(props.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
                        })
                    }
                    </div>
                </div>
            }
    </div>
};


const DescriptoinStatusForm = reduxForm({
    form: 'descriptionStatus'
})(Description);

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {!!contactValue && <div><b>{contactTitle}</b> <span>{contactValue}</span> </div>}
    </div>
};


export default DescriptoinStatusForm;