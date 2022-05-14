import React from "react";
import {Formik,Field,Form} from "formik";
import styles from "./MyPosts.module.css";
import {Btn} from "../../UI/Buttons";

const FormNewPost = (props) =>(
      <Formik
      initialValues={{newPostText: ''}}
      onSubmit={(values,{setSubmitting}) => {
        setSubmitting(false)
        props.onAddPost(values.newPostText)
        values.newPostText = ''
        }
      }
      >
       <Form>
         <Field component='textarea' name="newPostText"/>
         <div className={styles.buttons}>
         <Btn text='Add Post'></Btn>
         </div>
       </Form>
      </Formik>
    )

export default FormNewPost