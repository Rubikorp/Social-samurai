import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        userList: state.sitebar.userList
    }
}

const FriendsComponents = connect(mapStateToProps)(Friends)

export default FriendsComponents