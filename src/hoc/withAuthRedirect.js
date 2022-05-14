import {Navigate} from "react-router";
import {connect} from "react-redux";
import React from "react";

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});


export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if(!this.props.isAuth) return <Navigate to={"/login2"}/>
			return <Component {...this.props}/>;
		}
	}
	let connectAuthRedirectComponent =
		connect(mapStateToPropsForRedirect)(RedirectComponent)


	return connectAuthRedirectComponent
}