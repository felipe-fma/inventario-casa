import React from 'react';
import './App.css';
import ItensPage from '../Item/ItensPage';
import HomePage from '../Home/HomePage';
import ItemPage from '../Item/ItemPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from '../Item/ItemForm';
import { Item } from '../Item/Item';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itens" element={<ItensPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/item/" element={<ItemForm item={new Item()} />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
