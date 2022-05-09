import Dialogs from "./Dialogs";
import {sendMessage, onChangeMessage} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPages.dialogsData,
        messagesData: state.messagesPages.messagesData,
        newMessageBody: state.messagesPages.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

export default compose(
  connect(mapStateToProps, {sendMessage,onChangeMessage}),
  withAuthRedirect
)(Dialogs)