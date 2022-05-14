import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {LoginApi} from "../../api/api";
import {Navigate} from "react-router";

const basic =(props) => (
	<div>
		<Formik
			initialValues={{ email: '', password: '' ,checkbox: ''}}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={(values,{ setSubmitting }) => {
				debugger;
				setSubmitting(false)
				LoginApi.postLogin(values.email, values.password, values.rememberMe).then(response => {
					if(response.resultCode === 0) {
						debugger;
						return (<Navigate  to={`/profile/`+response.userId} />)
					}
				})
			}}
		>
			{({ isSubmitting }) => (
				<Form className="container bg">
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="div" />
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div" />
					<Field type="checkbox" name="rememberMe" />
					<ErrorMessage name="checkbox" component="div" />
					Remember Me
					<button type="submit" >
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);
export default basic