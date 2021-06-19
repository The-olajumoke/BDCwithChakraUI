import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Img } from '@chakra-ui/image';
import image2 from '../newImg/fire-and-water-2354583_1920.jpg';
import image3 from '../newImg/girl-2696947_1920.jpg';
import image4 from '../newImg/ice-cubes-1914351_1920.jpg';
import image5 from '../newImg/gadgets-336635_1920.jpg';
import { FaFacebook } from 'react-icons/fa';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
function ImageSlider() {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box
      className="carousel"
      d="block"
      w={["70vw","90vw"]}
      margin="auto"
      h={["300px","650px"]}
      // h={["auto","650px"]}
      py="25px"
      px={["5px","50px"]}
      // overflow="hidden"
      position="relative"
      backgroundColor="white"
    >
      <Slider className="slider" {...settings}>
        <Box className="card-wrapper">
          <Box h={["300px","550px"]} className="card">
            <Box className="card-image">
              <Img h={["100%","650px"]} className="img" src={image5} />
            </Box>
            <Button className="social-icons">SHOP NOW
            </Button>
            <Box color="white" bgColor="black" className="details">
              <Text className="h2">
                {' '}
                JOHN DOE
                <span className="job-title">UI DEVELOPER</span>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="card-wrapper">
          <Box h={["300px","550px"]} className="card">
            <Box className="card-image">
              <Img h={["100%","650px"]} className="img" src={image2} />
            </Box>
            <Button className="social-icons">SHOP NOW
            </Button>
            <Box color="white" bgColor="black" className="details">
              <Text className="h2">
                {' '}
                JOHN DOE
                <span className="job-title">UI DEVELOPER</span>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="card-wrapper">
          <Box h={["300px","550px"]} className="card">
            <Box className="card-image">
              <Img h={["100%","650px"]} className="img" src={image3} />
            </Box>
            <Button className="social-icons">SHOP NOW
            </Button>
            <Box color="white" bgColor="black" className="details">
              <Text className="h2">
                {' '}
                JOHN DOE
                <span className="job-title">UI DEVELOPER</span>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="card-wrapper">
          <Box h={["300px","550px"]} className="card">
            <Box className="card-image">
              <Img h={["100%","650px"]} className="img" src={image4} />
            </Box>
            <Button className="social-icons">SHOP NOW
            </Button>
            <Box color="white" bgColor="black" className="details">
              <Text className="h2">
                {' '}
                JOHN DOE
                <span className="job-title">UI DEVELOPER</span>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="card-wrapper">
          <Box h={["300px","550px"]} className="card">
            <Box className="card-image">
              <Img h={["100%","650px"]} className="img" src={image5} />
            </Box>
            <Button className="social-icons">SHOP NOW
            </Button>
            <Box color="white" bgColor="black" className="details">
              <Text className="h2">
                {' '}
                JOHN DOE
                <span className="job-title">UI DEVELOPER</span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default ImageSlider;
