import { Img } from '@chakra-ui/image';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import React from 'react'

function Reviews({image}) {
    return (
      <HStack
        bgColor="white"
        h="95%"
        w="100%"
        flexGrow={1}
        fontSize="xl"
        lineHeight={10}
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box border="2px" borderColor="gray" mb={2} p={2} w={['100%', '45%']}>
          <Flex alignItems="center" mb={4}>
            <Img src={image} w={['70px',"100px"]} borderRadius="50%" />
            <Text
              ml={4}
              fontWeight="bold"
              fontStyle="italic"
              fontFamily="cursive"
            >
              Bernice,USA
            </Text>
          </Flex>
          <Text fontSize={["md","xl"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis numquam quis nemo iusto delectus aliquam vero minus
            corrupti. Eaque?
          </Text>
        </Box>
        <Box border="2px" borderColor="gray" mb={2} p={2} w={['100%', '45%']}>
          <Flex alignItems="center" mb={4}>
            <Img src={image} w={['70px',"100px"]} borderRadius="50%" />
            <Text
              ml={4}
              fontWeight="bold"
              fontStyle="italic"
              fontFamily="cursive"
            >
              Bernice,USA
            </Text>
          </Flex>
          <Text fontSize={["md","xl"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis numquam quis nemo iusto delectus aliquam vero minus
            corrupti. Eaque?
          </Text>
        </Box>
        
      </HStack>
    );
}

export default Reviews
