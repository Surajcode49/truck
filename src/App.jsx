import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import ModelViewer from "./components/canvas/ModelViewer.jsx";
import BuildYourOwn from './components/BuildYourOwn.jsx';
import TruckViewer from "./components/canvas2/TruckViewer.jsx";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar is visible on all routes */}
        <Navbar />

        {/* Main content area with routes */}
        <Routes>
          {/* Define your routes here */} 
          <Route path="/" element={<BuildYourOwn />} />
          {/* <Route path="/truckviewer" element={<TruckViewer />} />  */}
          <Route path="/modelviewer" element={<ModelViewer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
