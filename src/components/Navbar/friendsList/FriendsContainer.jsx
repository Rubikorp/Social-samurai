import React from "react";
import Friends from "./Friends";

const FriendsComponents =(props) => {
    let state = props.store.getState()

    return (
        <Friends
            userList={state.sitebar.userList}
        />
    )
}

export default FriendsComponents