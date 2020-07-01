import React from "react";

class Status extends React.Component {

    state = {
        editMode:true
    };





    render() {
        let editMode = () => {
            this.setState({
                editMode:!this.state.editMode
            })

        }

        return (
            <div>
                {this.state.editMode
                ? <div onClick={editMode} >Status:{this.props.status || <span>3% </span> }</div>
                : <div><input onBlur={editMode} autoFocus={true} value={this.props.status} /></div>
                }
            </div>

        )

    }
}

export default Status