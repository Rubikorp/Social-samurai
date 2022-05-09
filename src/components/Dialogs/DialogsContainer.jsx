import Dialogs from "./Dialogs";
import {sendMessage, onChangeMessage} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPages.dialogsData,
        messagesData: state.messagesPages.messagesData,
        newMessageBody: state.messagesPages.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    onChangeMessage})(AuthRedirectComponent)

export default DialogsContainer