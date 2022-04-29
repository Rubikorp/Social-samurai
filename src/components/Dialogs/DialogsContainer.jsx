import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";




const DialogsContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onChangeMessage = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (<Dialogs
        sendMessage={sendMessage}
        onChangeMessage={onChangeMessage}
        dialogsData={state.messagesPages.dialogsData}
        messagesData={state.messagesPages.messagesData}
        newMessageBody={state.messagesPages.newMessageBody}
    />)
}

export default DialogsContainer