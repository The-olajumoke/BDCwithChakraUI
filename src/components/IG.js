import { Img } from '@chakra-ui/image';
import { Box, Flex} from '@chakra-ui/layout';
import React from 'react';
import image from '../newImg/wristwatch-407096_1920.jpg';
import image2 from '../newImg/fire-and-water-2354583_1920.jpg';
import image3 from '../newImg/girl-2696947_1920.jpg';
import image4 from '../newImg/ice-cubes-1914351_1920.jpg';
import image5 from '../newImg/gadgets-336635_1920.jpg';
import { Grid } from '@chakra-ui/layout';
import { GridItem } from '@chakra-ui/layout';
function IG() {
  return (
    <Flex
      bgColor="white"
      direction="column"
      h={['750px', '700px']}
      margin="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        letterSpacing="-1px"
        fontSize={['xl', '3xl']}
        pb={5}
        fontWeight="bold"
        fontFamily="cursive"
      >
        FOLLOW US ON INSTAGRAM
      </Box>
      

      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
        // h="500px"
        h="auto"
        w="100%"
        bgColor="white"
        gap={1}
        justifyContent="center"
      >
        <GridItem h={["200px","450px"]} >
          <Img h="100%" src={image} />
        </GridItem>
        <GridItem h={["200px","450px"]} >
          <Img h="100%" src={image2} />
        </GridItem>
        <GridItem h={["200px","450px"]} >
          <Img h="100%" src={image3} />
        </GridItem>
        <GridItem h={["200px","450px"]} >
          <Img h="100%" src={image4} />
        </GridItem>
        <GridItem h={["200px","450px"]} flexGrow={1} >
          <Img h="100%" src={image5} />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default IG;
