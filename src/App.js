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


function App() {
  return (
      <>
        <Router>
            <NavTest sticky="top"/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/packages' element={<Packages/>} />
          </Routes>
          {/*<Navbar/>*/}
          {/*  <Footer/>*/}
        </Router>
        <ToastContainer/>
      </>
  );
}

export default App;
