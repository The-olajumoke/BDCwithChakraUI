import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import {
  FaHeart,
  FaHome,
  FaHouseDamage,
  FaPersonBooth,
  FaShoppingCart,
} from 'react-icons/fa';
import React from 'react';

function MobileFooter() {
  return (
    <HStack
      display={['flex', 'none']}
      bgColor="gray.200"
      h="50px"
      position="sticky"
      bottom={0}
      justifyContent="space-around"
      alignItems="center"
    >
      <VStack spacing={0}>
        <FaHome size="20px" />
        <Text fontSize="xs" fontWeight="bold">
          Home
        </Text>
      </VStack>
      <VStack spacing={0}>
        <FaShoppingCart size="20px" />
        <Text fontSize="xs" fontWeight="bold">
          Cart
        </Text>
      </VStack>
      <VStack spacing={0}>
        <FaHome size="20px" />
        <Text fontSize="xs" fontWeight="bold">
          Category
        </Text>
      </VStack>
      <VStack spacing={0}>
        <FaHeart size="20px" />
        <Text fontSize="xs" fontWeight="bold">
          Liked
        </Text>
      </VStack>
    </HStack>
  );
}

export default MobileFooter;
