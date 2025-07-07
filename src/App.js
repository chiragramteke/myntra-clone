import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Container from './Container.jsx';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header
        category={category}
        setCategory={setCategory} 
        cartItems={cartItems}
        favorites={favorites}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Container
        category={category}
        searchQuery={searchQuery}
        cartItems={cartItems}
        setCartItems={setCartItems}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <Footer />
    </>
  );
}

export default App;