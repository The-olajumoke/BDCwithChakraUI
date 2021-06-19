import React from 'react';
import {
  ChakraProvider,
  
  theme,
} from '@chakra-ui/react';

import { BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { products } from './utils/dummy';
import About from './pages/About';
import AddItem from './pages/AddItem';
import MobileFooter from './components/MobileFooter';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import AllItems from './pages/AllItems';

function App() {

  const chunk = (arr, chunkSize) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const smallChunk = arr.slice(i, i + chunkSize);
      newArr.push(smallChunk);
    }
    return newArr;
  };
  const images = chunk(products, 5);
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route  path="/cart">
              <Cart />
            </Route>
            
            <Route path="/add-item">
              <AddItem />
            </Route>
            <Route path="/favourites">
              <Favourites/>              
            </Route>
            <Route path="/log-in">
            <Login/>
            </Route>
            <Route path="/about-us">
            <AboutUs/>
            </Route>
            <Route path="/categories">
            <Categories/>
            </Route>
            <Route path="/all-items">
            <AllItems/>
            </Route>
          </Switch>
<MobileFooter/>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
