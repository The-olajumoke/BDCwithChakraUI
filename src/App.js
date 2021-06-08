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
import { FiHeart, FiHome } from 'react-icons/fi';
import MobileFooter from './components/MobileFooter';

function App() {
  const history = useHistory();

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
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/add-item">
              <AddItem />
            </Route>
          </Switch>
<MobileFooter/>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
