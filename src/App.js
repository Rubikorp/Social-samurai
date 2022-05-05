import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path="/profile/*"
                             element={<ProfileContainer userId={2}/>} />
                      <Route path="/dialogs/*"
                             element={<DialogsContainer/>} />
                      <Route path="/news" element={<News />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/users" element={<UsersContainer />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
