import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path="/profile" element={<Profile postData={props.postData}/>} />
                      <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
                      <Route path="/news" element={<News />} />
                      <Route path="/music" element={<Music />} />
                      <Route path="/settings" element={<Settings />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
