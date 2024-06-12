
import React from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Anotherlink from './pages/Anotherlink';
import SecondPage from './pages/SecondPage';


const App = () => {
  return (
 <>
     <BrowserRouter>
     <Header/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} >
              <Route path="/anotherlink" element={<Anotherlink/>} />
        </Route> 
        <Route path="/contact" element={<Contact/>}/>

        <Route path="/blog" element={<Blog/>}>
           <Route path="second" element={<SecondPage/>}/>
        </Route>
      </Routes>
     <Footer/>
    </BrowserRouter>

   </>
  );
};

export default App;