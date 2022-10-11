import React from 'react';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NavTest from "./components/NavTest";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import NavUp from "./components/NavUp";
import Jackpot from "./pages/Jackpot";
import TestConnection from "./pages/TestConnection";
import TestConnectionQuery from "./pages/TestConnectionQuery";
import TestConnectionMutation from "./pages/TestConnectionMutation";


function App() {
  return (
      <>
        <Router>
            <NavUp sticky="top"/>
            <NavTest sticky="top"/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/packages' element={<Packages/>} />
            <Route path='/jackpot' element={<Jackpot/>} />
            <Route path='/test-connection' element={<TestConnection/>} />
            <Route path='/test-connection-query' element={<TestConnectionQuery/>} />
            <Route path='/test-connection-mutation' element={<TestConnectionMutation/>} />
          </Routes>
          {/*<Navbar/>*/}
          {/*  <Footer/>*/}
        </Router>
        <ToastContainer/>
      </>
  );
}

export default App;
