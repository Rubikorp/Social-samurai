const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messagesData: [
        {id:1, message: 'HI'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Ruslan'},
    ],
    dialogsData: [
        {id:1, name: 'Ruslan'},
        {id:2, name: 'Roman'},
        {id:3, name: 'Elina'},
        {id:4, name: 'Victor'},
        {id:5, name: 'Dmitriy'},
        {id:6, name: 'Aleksey'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {id: 5, message: state.newMessageBody}
            let stateCopy={...state}
            stateCopy.messagesData=[...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_BODY:
            let stateCopy={...state}
            stateCopy.newMessageBody = action.newMessageBody
            return stateCopy
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body})


export default dialogsReducer