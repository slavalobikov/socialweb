import {connect} from "react-redux";
import React from 'react'

import Me from "./Me";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withProfileInfo} from "../../../../hoc/withProfileInfo";


class MeContainer extends React.Component {

/*

    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.id;
        }

        this.props.getProfileThunk(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID != prevProps.match.params.userID ) {
            this.refreshProfile();
        }
    }
*/

    render() {
        return <Me {...this.props} /*isOwner={!this.props.match.params.userID}*/ />
    }
}


let mapStateToProps = (state) => ( {

    profile: state.ProfilePageReducer.profile,
});



export default compose (
    connect(mapStateToProps, {}),
    withRouter,
    withAuthRedirect,
    withProfileInfo,
)(MeContainer)