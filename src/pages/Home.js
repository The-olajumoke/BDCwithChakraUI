
import React from 'react'
import Container from '../components/Container'
import IG from '../components/IG'

import ItemLayout from '../components/ItemLayout'
import ImageSlider from '../components/ImageSlider'
import { Flex } from '@chakra-ui/layout'

function Home() {
  
    return (
      
        <Container >
            <ImageSlider />
            <Flex justifyContent="center"
              p={2}>
              <ItemLayout />
            </Flex>
            {/* <IG /> */}
        </Container>
    );
}

export default Home
