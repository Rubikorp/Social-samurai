import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {LoginApi} from "../../api/api";
import {Navigate} from "react-router";

const basic =(props) => (
	<div>
		<Formik
			initialValues={{ email: '', password: '' ,rememberMe: ''}}
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
				alert(JSON.stringify(values))
				}
			}
		>
			{({ isSubmitting }) => (
				<Form className="container bg">
					<Field type="email" name="email" />
					<ErrorMessage name="email" component="div" />
					<Field type="password" name="password" />
					<ErrorMessage name="password" component="div" />
					<Field type="checkbox" name="rememberMe" />
					<ErrorMessage name="rememberMe" component="div" />
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