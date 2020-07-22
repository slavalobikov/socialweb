import React from "react";

class Status extends React.Component {

    state = {
        editMode:false,
        status: this.props.status
    };

    activateEditeMode = () => {
      this.setState({
          editMode:true
      })
    };

    deactivateEditeMode = () => {
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value

    })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })

        }


    }


    render() {
        return (
            <div>
                {this.state.editMode
                ? <div><input onChange={this.onStatusChange}  onBlur={this.deactivateEditeMode} autoFocus={true} value={this.state.status} /></div>
                : <div onClick={this.activateEditeMode} >Status:{this.props.status || <span>3% </span> }</div>
                }
            </div>

        )

    }
}

export default Status