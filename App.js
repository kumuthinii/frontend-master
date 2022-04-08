//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { React } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Deposit from './ProductDeposit';
import Deposit2 from './ProductDeposit2';
import Home from './Home';
import Card from './ProductCard';


function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-deposit" element={<Deposit />} />
        <Route path="product-deposit-with-json" element={<Deposit2 />} />
        <Route path="product-card" element={<Card />} />
      </Routes>
    </div>

  );
}

export default App;
