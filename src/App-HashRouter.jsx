// Alternative Solution 2: Hash Router (No Server Configuration Needed)

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { CartProvider } from './hooks/useCart.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Deals from './pages/Deals';
import Favourite from './pages/Favourite';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background: #d4af37;
    color: #fff;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  .btn:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: #d4af37;
    border: 2px solid #d4af37;
  }

  .btn-outline:hover {
    background: #d4af37;
    color: #fff;
  }

  .section {
    padding: 80px 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-title h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .section-title p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
    
    .section {
      padding: 60px 0;
    }
    
    .section-title h2 {
      font-size: 2rem;
    }
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/favourite" element={<Favourite />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </HashRouter>
    </CartProvider>
  );
}

export default App;

// This changes URLs to:
// http://localhost/kaffees-react/#/
// http://localhost/kaffees-react/#/menu
// http://localhost/kaffees-react/#/deals
// http://localhost/kaffees-react/#/favourite
