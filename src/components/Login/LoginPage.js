import React from "react";
import FormLogin from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import styles from "./LoginForm.module.css"
import Preloaded from "../Preolader/Preloader";

const LoginPage = (props) => (
	<div className="container bg-black">
		{props.isLoading ? <Preloaded /> : ''}
		<h1 className={styles.header_form}>Login</h1>
		<FormLogin
			{...props}
		/>
	</div>
)

const mapStateToProps =(state) => ({
	isAuth: state.auth.isAuth,
	myId: state.auth.userId,
	errorMessage: state.auth.errorMessage,
	isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, {login}) (LoginPage)
