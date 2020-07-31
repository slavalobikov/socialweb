import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/FormConrols/FormsControls";
import s from './Description.module.css';



const Description = ({contacts, lookingForAJob, handleSubmit, isOwner}) => {

    const [editMode, setEditMode] = useState(false);

    return <div className={s.content}>
            {editMode
                ? <div>
                    <form onSubmit={handleSubmit}>
                        <button onClick={ () => setEditMode(false)}>Сохранить изменения</button>
                        <div><Field type='text' placeholder={'Введите ссылку на facebook'} name={'facebook'} component={Input} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на сайт'} name={'website'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на вк'} name={'vk'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на twitter'} name={'twitter'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на instagram'} name={'instagram'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на youtube'} name={'youtube'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на youtube'} name={'youtube'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на github'} name={'github'} component={'input'} /></div>
                        <div><Field type='text' placeholder={'Введите ссылку на mainLink'} name={'mainLink'} component={'input'} /></div>
                    </form>
                  </div>
                : <div>
                    {isOwner ?<button onClick={() => setEditMode(true)}>Изменить данные</button> : <div> </div>}
                    <div>{lookingForAJob ? <div>Ищу работу</div> : <div>Не ищу работу</div>}</div>

                    <div>
                        <b>Контакты</b>: {
                        Object.keys(contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
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
        <b>{contactTitle}</b>: <span>{contactValue}</span>
    </div>
};


export default DescriptoinStatusForm;