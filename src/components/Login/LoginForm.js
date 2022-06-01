import React from "react";
import {Formik, Form} from 'formik';
import {validator, boolErrorsTouch} from "../../Utils/Validator";
import styles from "./LoginForm.module.css"
import stylesBox from "./Checkbox.module.css"
import {Navigate} from "react-router";
import {createField} from "../common/FormControl/form-control";

const FormLogin =({isAuth,login,isLoading,errorMessage}) => (
	<div className="container bg-black">
		{isAuth && <Navigate to={`/profile`}/>}
		<Formik
			initialValues={{ email: '', password: '' ,rememberMe: false, }}
			onSubmit={(values) => {
				let {email, password, rememberMe} = values
				login(email, password, rememberMe)
			}}
		>
			{({ errors,touched, isSubmitting,handleSubmit }) => (
				<Form className={styles.form}>
					{createField("email","email","email", validator.validateEmail)}
					{boolErrorsTouch(errors, touched, 'email') && <div
						className={styles.validate}>
						{errors.email}</div>}
					{createField("password","password","password", validator.validatePassword)}
					{boolErrorsTouch(errors, touched, 'password')  && <div
						className={styles.validate}>
						{errors.password }</div>}
					<div>
						{createField("checkbox","rememberMe", '', '', stylesBox.checkbox, 'box')}
						 <label for='box' className={stylesBox.label}>Remember Me</label>
					</div>
					<div className={styles.container_button}>
						<button type="submit" disabled={isLoading} >
							Submit
						</button>
						<a
							href="https://social-network.samuraijs.com/signUp"
							rel='noopener' >Sign up</a>
					</div>
					{errorMessage.map(error => (<div className={styles.error_server}>{error}</div>))}
				</Form>
			)}
		</Formik>
	</div>
);
export default FormLogin