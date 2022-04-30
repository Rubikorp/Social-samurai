import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Nav />
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path="/"
                             element={<Profile/>} />
                      <Route path="/dialogs/*"
                             element={<DialogsContainer/>} />
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
