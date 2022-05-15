import React from "react";
import { Formik, Form, Field} from 'formik';
import Validation from "./Validation";
import styles from "./LoginFormik.module.css"
import stylesBox from "./Checkbox.module.css"

const FormLogin =() => (
	<div className="container bg-black">
		<Formik
			initialValues={{ email: '', password: '' ,rememberMe: ''}}
			onSubmit={(values,{ setSubmitting }) => {
				debugger;
				setSubmitting(false)
				alert(JSON.stringify(values))
				}
			}
		>
			{({ errors,touched, isValidating }) => (
				<Form className={styles.form}>
					<h1>Sign in</h1>
					<Field
						autocomplete="off"
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
						<button type="submit" >
							Submit
						</button>
						<a
							href="https://social-network.samuraijs.com/signUp"
							target="_blank">Sign up</a>
					</div>
				</Form>
			)}
		</Formik>
	</div>
);
export default FormLogin