import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className='container bg height__8vh'>
            <h2 className={s.header}>Dialogs</h2>
            <div className={s.containe}>
                <div className={s.dialogs}>
                    <div className={s.users}>
                        <div className={s.list}>
                            <div className={s.item + ' ' + s.active}>
                                Ruslan
                            </div>
                            <div className={s.item}>
                                Roman
                            </div>
                            <div className={s.item}>
                                Rinat
                            </div>
                            <div className={s.item}>
                                Elina
                            </div>
                            <div className={s.item}>
                                Victor
                            </div>
                        </div>
                    </div>
                    <div className={s.chats}>
                        <div className={s.message}>
                            Hi
                        </div>
                        <div className={s.message}>
                            How are you?
                        </div>
                        <div className={s.message}>
                            Ruslan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs