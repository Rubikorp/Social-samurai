import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
	return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						placeholder="Login"
						component={"input"}
						name={"login"}
					/>
				</div>
				<div>
					<Field
						type={'password'}
						placeholder="Password"
						component={"input"}
						name={"password"}
					/>
				</div>
				<div>
					<Field
						type={"checkbox"}
						component={"input"}
						name={"rememberMe"}
					/> Remember me
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
	const onSubmit = (formData) => {
		console.log(formData)
	}
	return (
		<div className='container bg'>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export default LoginPage