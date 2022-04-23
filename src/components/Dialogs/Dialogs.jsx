import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className='container bg'>
            <div className={s.containe}>
                <div className={s.dialogs}>
                    <div className={s.users}>
                        users
                    </div>
                    <div className={s.chat}>
                        chat
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs