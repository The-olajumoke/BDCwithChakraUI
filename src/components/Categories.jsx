import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import React from 'react';
import Infants from '../Exports/knittedbaby face1.JPG';
import Babies from '../Exports/trolley face1.JPG';
import Toys from '../Exports/malebicycle.JPG';
import BackToSchool from '../Exports/schoolbag face1.JPG';
import BoyClothing from '../Exports/malepants.JPG';
import GirlClothing from '../Exports/buckethat face2.JPG';
import Shoes from '../Exports/girlshoe face2.JPG';
import Accessories from '../Exports/necklace face2.JPG';

function Categories() {
  return (
    <Box border="2px" my={4} px={['17px', '20px']} fontFamily="Poppins">
      <Heading as="h3" fontSize="4xl" fontWeight='thin' mb={10}>
        Categories
      </Heading>
      <Box className="tryGrid" bgColor="gray.100" color="purple">
        <Flex className="cat-box">
          <h3 className="cat-name">Infants</h3>
          <Img src={Infants} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Babies</h3>
          <Img src={Babies} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Toys</h3>
          <Img src={Toys} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Back To School</h3>
          <Img src={BackToSchool} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Boy's Clothing</h3>
          <Img src={BoyClothing} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Girl's Clothing</h3>
          <Img src={GirlClothing} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Shoes</h3>
          <Img src={Shoes} className="cat-image" borderRadius="lg" />
        </Flex>
        <Flex className="cat-box">
          <h3 className="cat-name">Accessories</h3>
          <Img src={Accessories} className="cat-image" borderRadius="lg" />
        </Flex>
      </Box>
    </Box>
  );
}

export default Categories;
