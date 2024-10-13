import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Leftnav from './components/leftNav/Leftnav';
import Home from './pages/Home';
import Form from './pages/Form';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/rix-app/",
      element: <Home />,
    },
    {
      path: "/rix-app/form",
      element: <Form />,
    },
  ]);


  return (

    
    <>
   
   <Header />

    <Leftnav />

    <main id="contHolder">
     
      <div className="mainContHolder">   

      <RouterProvider router={router} />
              
      </div>

    </main>
    <Footer />
    

    
    
    </>
  )
}

export default App
