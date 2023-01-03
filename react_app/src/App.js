import React from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Page from "./pages/Page";
import SingleAnnonce from "./pages/SingleAnnonce";
import SingleProfile from "./pages/SingleProfile"
import Navbar from "./Components/Navbar";
import Research from "./pages/Research";
import AnnounceCard from "./Components/AnnounceCard";



function App() {
  return ( 

    <main className="section-container relative">
      <Router>
        <Navbar className="absolute z-20 "></Navbar>
     
      <div className="">
        
          <Routes>
              <Route index element={<SingleProfile/>}/>
              <Route path="/Research" element={<Research/>}/>
              <Route path="/page" element={<AnnounceCard/>}/>
              <Route path="/page:id" element={<SingleAnnonce/>}/>
              <Route path="/Research/:id" element={<SingleAnnonce/>}/>         
          </Routes>
      </div>
        
      </Router>
    </main>
   
  );
}

export default App;
