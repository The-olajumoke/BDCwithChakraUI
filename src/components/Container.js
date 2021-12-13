import { Flex,Box } from '@chakra-ui/layout';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './SideBar';

function Container({ children }) {
  return (
    <Flex>
      <Sidebar />   
      <Box flex={1}>
        <Header />
        {children}
      <Footer/>
        </Box >
    </Flex>
  );
}

export default Container;
