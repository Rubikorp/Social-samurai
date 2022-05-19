import React from "react";
import FormLogin from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";

const LoginPage = (props) => (
	<div className='container bg-black'>
		<h1>Login</h1>
		<FormLogin
			{...props}
		/>
	</div>
)

const mapStateToProps =(state) => ({
	isAuth: state.auth.isAuth,
	myId: state.auth.userId,
	errorMessage: state.auth.errorMessage,
})

export default connect(mapStateToProps, {login}) (LoginPage)
