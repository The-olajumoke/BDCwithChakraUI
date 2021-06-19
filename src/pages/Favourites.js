import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import Container from '../components/Container'
import Item from "../components/Item"

import {LikedItems} from "../utils/dummy"
function Favourites() {
    return (
      <Box w="95vw" >
      <Container>
        <Heading textAlign="center" fontSize="2xl" m={5}>
          Liked Items
        </Heading>
        <Flex direction={["column","row"]} justifyContent="center" alignItems="center">
          {LikedItems.map((product, index) => (
            <Item product={product} id={index} key={index} />
          ))}
        </Flex>
      </Container>
      </Box>
    );
}

export default Favourites;
