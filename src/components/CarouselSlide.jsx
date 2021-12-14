import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Exports/newImg/IMG_2329.JPG';

function CarouselSlide() {
  return (
    <Box h="650px" border="2px" bgColor="purple.100">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div style={{ height: '100%', color: 'green' }}>
          <img src={img1} style={{ height: '650px' }} alt="" />
          this is slide 1
          <Box
            position="absolute"
            display="flex"
            flexDir='column'
            alignItems="center"
            justifyContent="center"
            right={0}
            top={0}
            bottom={0}
            left={0}
            bgColor="blackAlpha.500"  
            color="white"
          >
            <Heading as="h4" mb={4} zIndex={2} fontFamily='Karla' color='white' lineHeight='tall' fontSize='5xl'>GET THE RIGHT ITEMS FOR YOUR KIDS</Heading>
            <Button color='white' size='lg' width='15%' bgColor='purple' variant='solid' fontSize='xl'  _hover={{color:'purple', bgColor:'white'}}   zIndex={2} >Shop Now</Button>
          </Box>
        </div>

        {/* <img src={img1} style={{ height: '650px' }} alt="" /> */}
        {/* <Box backgroundImage={img1}></Box> */}
      </Carousel>
    </Box>
  );
}

export default CarouselSlide;
