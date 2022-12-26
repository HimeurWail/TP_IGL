import React from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import AnnounceCard from "./components/AnnounceCard";
import AnnonceFormPage from "./pages/AnnonceFormPage";
import Home from "./pages/Home";
import Page from "./pages/Page";
import GetImgs from "./pages/GetImgs";
/*<AnnounceCard mainImg="./images/Rectangle 34.png" annonceLocation="Alger, Harrach" aiCategoryIcon='./icons/Vector-3.png' aiCategory="Sale" aiTypeIcon="./icons/Vector-1.png" aiType="Apart" aiSurfaceIcon="./icons/Vector-2.png" aiSurface="60 m2" price="350000DA"/>*/

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="">
          <Route index element={<AnnonceFormPage />}/>
          <Route path="/page" element={<Page />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
