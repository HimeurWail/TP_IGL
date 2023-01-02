import React from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Page from "./pages/Page";
import SingleAnnonce from "./pages/SingleAnnonce";
import Navbar from "./Components/Navbar";
import Research from "./pages/Research";
import AnnounceCard from "./Components/AnnounceCard";
import SingleProfile from "./pages/SingleProfile";
import Find from "./Components/Find";



function App() {
  return ( 

    <main className="section-container ">
      <Router>
      <Navbar/>
      <div className="">
          <Routes>
              <Route index element={<SingleProfile/>}/>
              {/*<Route path="/Research" element={<Research/>}/>
              <Route path="/page" element={<AnnounceCard/>}/>
              <Route path="/page:id" element={<SingleAnnonce/>}/>
  <Route path="/Research/:id" element={<SingleAnnonce/>}/> */}        
          </Routes>
      </div>
        
      </Router>
    </main>
   
  );
}

export default App;
