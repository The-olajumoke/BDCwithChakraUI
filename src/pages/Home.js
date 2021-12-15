import React from 'react';
import Container from '../components/Container';
import IG from '../components/IG';
import CarouselSlide from '../components/CarouselSlide';
import ItemLayout from '../components/ItemLayout';
import ImageSlider from '../components/ImageSlider';
import { Flex, Box, Heading } from '@chakra-ui/layout';
import Categories from '../components/Categories';

function Home() {
  return (
    <Container>
      <CarouselSlide />

      {/* CATEGORIES*/}
      <Categories />
      <Box>
        <Heading
          as="h3"
          px={['17px', '48px']}
          fontSize="4xl"
          fontWeight="normal"
          mb={10}
        >
          Top Products
        </Heading>
        <ItemLayout />
      </Box>
      <IG />
    </Container>
  );
}

export default Home;
