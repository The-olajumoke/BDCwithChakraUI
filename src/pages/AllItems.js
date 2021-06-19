import { Img } from '@chakra-ui/image'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import Container from '../components/Container';
import image from '../newImg/fire-and-water-2354583_1920.jpg';
function AllItems() {
    return (
      <Box>
        <Container>
          <Heading textAlign="center" m={5}>All Items</Heading>
          <Flex>
            <Img src={image} />
          </Flex>
        </Container>
      </Box>
    );
}

export default AllItems
