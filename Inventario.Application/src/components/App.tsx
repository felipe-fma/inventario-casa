import React from 'react';
import './App.css';
import ItensPage from '../Items/ItensPage';
import HomePage from '../Home/HomePage';
import ItemPage from '../Items/ItemPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from '../Items/ItemForm';
import { Item } from '../Items/Item';
import NavBar from './NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itens" element={<ItensPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/item/" element={<ItemForm item={new Item()} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
