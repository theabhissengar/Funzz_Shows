import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/home/home';
import Buy from './Components/home/Buy';
import './App.css';


const App = () =>{
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book' element={<Buy/>}></Route>
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
