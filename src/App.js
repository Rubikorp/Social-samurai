import './App.css';
import React, {useEffect} from "react";
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloaded from "./components/Preolader/Preloader";
import store from "./Redux/redux-store";


const App = (props) => {
    // Делаем запрос на сервер
    useEffect(( ) => {
        props.initializeApp();
    }, [props.initialized] )
        if (!props.initialized) {
            return (<Preloaded />)
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/profile"
                                   element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId"
                                   element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*"
                                   element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// export default connect(mapStateToProps, {initializeApp})(App);

//тестим компоненту
const AppContainer = connect(mapStateToProps, {initializeApp})(App)
export const SocialSamurai = (props) => (
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>
    )