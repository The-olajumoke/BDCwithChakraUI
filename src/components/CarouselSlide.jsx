import { Box, Button, Heading, Img } from '@chakra-ui/react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Exports/newImg/IMG_2329.JPG';
import img2 from '../Exports/newImg/children-817365_1920.jpg';
import img3 from '../Exports/schoolstationary face2.JPG';
function CarouselSlide() {
  return (
    <Box h={['500px', '650px']} bgColor="purple.100">
      <Carousel
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={2000}
      >
        <div style={{ height: '100%', color: 'green' }}>
          <Img
            src={img2}
            h={['500px', '650px']}
            alt=""
          />
          <Box
            position="absolute"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            right={0}
            top={0}
            bottom={0}
            left={0}
            bgColor="blackAlpha.600"
            color="white"
          >
            <Box px={3}>
              <Heading
                as="h4"
                mb={4}
                zIndex={2}
                fontFamily="Karla"
                color="white"
                fontSize={['3xl', '5xl']}
              >
                GET THE RIGHT ITEMS FOR YOUR KIDS
              </Heading>
              <Heading
                as="h6"
                mb={6}
                zIndex={2}
                fontFamily="Poppins"
                color="white"
                fontSize="xl"
                fontWeight="normal"
              >
                Let's help your kids appear bright and radiant
              </Heading>
            </Box>
            <Button
              color="white"
              size="lg"
              width={['50%', '15%']}
              bgColor="purple"
              variant="solid"
              fontSize="xl"
              _hover={{
                color: 'purple',
                bgColor: 'white',
                transform: 'scale(0.95)',
              }}
              outline="none"
              zIndex={2}
              rightIcon={<FiArrowRight />}
            >
              Shop Now
            </Button>
          </Box>
        </div>
      </Carousel>
    </Box>
  );
}

export default CarouselSlide;
