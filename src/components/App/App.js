import React, { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/navbar';
import Home from '../home/home';
import Comments from '../comment/comment';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route>
      <Route path='/' element={ <Home /> } />
      <Route path='/comments/:postId' element={<Comments />} />
    </Route>
  )
);


const App = () => {

    return (
        <>
        <Navbar />
        <RouterProvider router={router} />
        </>
    )
}

export default App;