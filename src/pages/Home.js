
import React from 'react'
import Container from '../components/Container'
import IG from '../components/IG'
import CarouselSlide from '../components/CarouselSlide'
import ItemLayout from '../components/ItemLayout'
import ImageSlider from '../components/ImageSlider'
import { Flex } from '@chakra-ui/layout'
import Categories from '../components/Categories'

function Home() {
  
    return (
      
        <Container >
            <CarouselSlide/>
         
           
                {/* CATEGORIES*/}
<Categories/>
              <ItemLayout />
            <IG />
        </Container>
    );
}

export default Home
