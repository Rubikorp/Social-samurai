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
    ]
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.newMessage}]
            };
        default:
            return state
    }
}

export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage});

export const onChangeMessage = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body})


export default dialogsReducer