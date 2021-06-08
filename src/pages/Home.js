import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import Container from '../components/Container'

import ItemLayout from '../components/ItemLayout'
import Slide from '../components/Slide'

function Home() {
    return (
      <Container>
        <Box
          bgColor="red"
          borderColor="purple"
          h={['400px','500px']}
          w={'90%'}
          marginX="auto"
          marginY={0}
        >
          <Slide />
        </Box>

        <ItemLayout />
      </Container>
    );
}

export default Home
