import React from "react";
import Dialogs from "./Dialogs";
import {sendMessage, onChangeMessage} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPages.dialogsData,
        messagesData: state.messagesPages.messagesData,
        newMessageBody: state.messagesPages.newMessageBody
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    onChangeMessage})(Dialogs)

export default DialogsContainer