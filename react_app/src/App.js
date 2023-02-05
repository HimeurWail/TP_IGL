import React, { useState } from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import SingleAnnonce from "./pages/SingleAnnonce";
import SingleProfile from "./pages/SingleProfile"
import Navbar from "./Components/Navbar";
import Research from "./pages/Research";
import AnnounceCard from "./Components/AnnounceCard";
import AnnonceFormPage from "./pages/AnnonceFormPage";
import GetImgs from "./pages/GetImgs";

import PlainList from "./pages/PlainListAnn";
import MessagesPage from "./pages/MessagesPage";



function App() {
  /* user's authentification state is passed as props to all the components of the application */
  const [userName, setUserName] = useState('');
  const [userPic, setUserPic] = useState('');
  const [name, setName] = useState('');
  const [auth, setAuth] = useState(false);

  const setUser = (user) =>{
    setAuth(true);
    setUserName(user.userName);
    setUserPic(user.pic);
    setName(user.name);
  }

  const resetUser = () =>{
    setAuth(false);
    setUserName('');
    setUserPic('');
    setName('');
  }

  /*<div className={`${(!auth) && 'hidden'}`}>
          <h1>username: {userName}</h1>
          <img alt="pic" src={userPic} />
          <h4>name: {name}</h4>
        </div>*/

  //<LandingPage auth={auth} userName={userName} userPic={userPic} name={name}/>
  //<AnnonceFormPage auth={auth} userName={userName} userPic={userPic} name={name}/>

  return ( 

    <main className="section-container relative">
      <Router>
        <Navbar auth={auth} userName={userName} userPic={userPic} name={name} setUserCallback={setUser} className="absolute z-20 "></Navbar>
      <div className="">

          <Routes>
              <Route index path="/" element={<LandingPage auth={auth} userName={userName} userPic={userPic} name={name}/>}/>
              <Route path="/Research" element={<Research auth={auth} userName={userName} userPic={userPic} name={name}/>}/>
              <Route path="/Profile" element={<SingleProfile resetUserCallback = {resetUser}  auth={auth} userName={userName} userPic={userPic} name={name}/>}/>
              <Route path="/page:id" element={<SingleAnnonce auth={auth} userName={userName}/>}/>
              <Route path="/Research/:id" element={<SingleAnnonce auth={auth} userName={userName}/>}/> 
              <Route path="/Plainlist" element={<PlainList/>}/> 
              <Route path="/MsgPage" element={<MessagesPage userName={userName}/>}></Route>
              <Route path="/Add" element={<AnnonceFormPage auth={auth} userName={userName} userPic={userPic} name={name}/>}/>

          </Routes>
      </div>
        
      </Router>
    </main>
   
  );
}

export default App;
