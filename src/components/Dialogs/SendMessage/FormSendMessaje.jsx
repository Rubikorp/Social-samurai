import React from "react";
import {BtnAddMessage} from "../../UI/Buttons";
import styles from "./SendMessage.module.css"
import {Field, Formik, Form} from "formik";

const FormSendMessage = (props) => (
        <Formik
          className={styles.container}
          initialValues={{newMessage: ''}}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(false)
            props.sendMessage(values.newMessage)
            values.newMessage = ''
          }}
        >
          <Form>
            <Field
              className={styles.textarea}
              name ='newMessage'
              component='textarea'
            />
            <BtnAddMessage text='Send'/>
          </Form>
        </Formik>
    )

export default FormSendMessage