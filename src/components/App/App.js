import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/navbar';
import Home from '../home/home';
import Comments from '../comment/comment';

const App = () => {
  return (
    <Router>
      <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments/:postId" element={<Comments />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
