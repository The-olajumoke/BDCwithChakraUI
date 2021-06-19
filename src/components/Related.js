import { Img } from '@chakra-ui/image';
import { Box, HStack } from '@chakra-ui/layout';
import React from 'react'

function Related({image}) {
    return (
      <Box
        bgColor="white"
        h="95%"
        w="100%"
        flexGrow={1}
        fontSize="xl"
        lineHeight={10}
      >
        <HStack
          h="auto"
          w="100%"
          px={1}
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          margin="auto"
        >
          <Img
            bgColor="purple"
            p={0.5}
            h="auto"
            w={['40%', '12%']}
            src={image}
            mb={3}
          />
          <Img
            bgColor="purple"
            p={0.5}
            h="auto"
            w={['40%', '12%']}
            src={image}
            mb={3}
          />
          <Img
            bgColor="purple"
            p={0.5}
            h="auto"
            w={['40%', '12%']}
            src={image}
            mb={3}
          />
          <Img
            bgColor="purple"
            p={0.5}
            h="auto"
            w={['40%', '12%']}
            src={image}
            mb={3}
          />
          <Img
            bgColor="purple"
            p={0.5}
            h="auto"
            w={['40%', '12%']}
            src={image}
            mb={3}
          />
        </HStack>
      </Box>
    );
}

export default Related
