import { Img } from '@chakra-ui/image'
import { Box, Flex, Stack, VStack } from '@chakra-ui/layout'
import React from 'react'
import Watch from '../newImg/wristwatch-407096_1920.jpg';
import blanket from '../newImg/blanket-2593141_1920.jpg';

function HomeLayout() {
    return (
      <Stack
        direction="row"
        px="8%"
        py={4}
        h="85vh"
        spacing={8}
        w="100%"
        justifyContent="space-between"
      >
        <Box w="30%" border="2px" borderRadius="lg" p={4}>
          <Img h="100%" src={Watch} />
        </Box>
        <VStack w="70%" spacing={8}>
          <Stack height="50%" w="100%" direction="row" spacing={8}>
            <Box w="50%" border="2px" borderRadius="lg" p={4}>
              <Img h="100%" src={blanket} />
            </Box>
            <Box w="50%" border="2px" borderRadius="lg" p={4}>
              <Img src={blanket} />
            </Box>
          </Stack>
          <Stack direction="row" w="100%" height="50%" spacing={8}>
            <Box width="33%" borderRadius="lg" p={4} border="2px">
              <Img h="100%" src={blanket} />
            </Box>
            <Box width="33%" borderRadius="lg" p={4} border="2px">
              <Img h="100%" src={Watch} />
            </Box>
            <Box width="33%" borderRadius="lg" p={4} border="2px">
              <Img h="100%" src={blanket} />
            </Box>
          </Stack>
        </VStack>
      </Stack>
    );
}

export default HomeLayout
