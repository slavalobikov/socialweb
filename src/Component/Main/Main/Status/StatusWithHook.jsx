import React, {useEffect, useState} from "react";

const StatusHook = (props) => {

    let userID = props.userID;
    if (!userID) {
        userID = props.id;
    }

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const deactivateEditeMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const activateEditeMode = () => {
        setEditMode(true)
        /*if (props.id === props.userID) {
            return alert('hello')
/!*            return (
                setEditMode(true)
                alert('hello')
            ) *!/
        }*/
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>

            {editMode
                ? (props.id == userID)
                    ? <div> <input onChange={onStatusChange} onBlur={deactivateEditeMode}
                                autoFocus={true} value={status} /></div>
                    : <div onClick={activateEditeMode }>Status:{props.status || <span>3% </span>}</div>
                :  <div onClick={activateEditeMode }>Status:{props.status || <span>3% </span>}</div>
            }


        </div>

    )

};


export default StatusHook;