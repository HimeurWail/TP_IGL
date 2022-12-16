import React from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="">
          <Route index element={<Home />}/>
          <Route path="/page" element={<Page />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
