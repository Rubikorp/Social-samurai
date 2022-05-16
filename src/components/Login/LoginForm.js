import React from "react";
import { Formik, Form, Field} from 'formik';
import Validation from "./Validation";
import styles from "./LoginForm.module.css"
import stylesBox from "./Checkbox.module.css"
import {Navigate} from "react-router";


const FormLogin =(props) => (
	<div className="container bg-black">
		{props.isAuth && <Navigate to={`/profile`}/>}
		<Formik
			initialValues={{ email: '', password: '' ,rememberMe: ''}}
			onSubmit={(values,{ setSubmitting }) => {
				setSubmitting(true)
				let {email, password, rememberMe} = values
				props.login(email, password, rememberMe)
				props.isAuth && setSubmitting(false)
			}}
		>
			{({ errors,touched, isSubmitting }) => (
				<Form className={styles.form}>
					<Field
						type="email" name="email"
						placeholder="email"
						validate={Validation.validateEmail}/>
					{errors.email && touched.email && <div
						className={styles.validate}>
						{errors.email}</div>}
					<Field
						type="password" name="password"
						validate={Validation.validatePassword}
						placeholder="password"/>
					{errors.password && touched.password  && <div
						className={styles.validate}>
						{errors.password }</div>}
					<div>
						<Field type="checkbox" name="rememberMe" component="input"
						className={stylesBox.checkbox}
						id='box'/>
						 <label for='box' className={stylesBox.label}>Remember Me</label>
					</div>
					<div className={styles.container_button}>
						<button type="submit" disabled={isSubmitting} >
							Submit
						</button>
						<a
							href="https://social-network.samuraijs.com/signUp"
							rel='noopener' >Sign up</a>
					</div>
				</Form>
			)}
		</Formik>
	</div>
);
export default FormLogin