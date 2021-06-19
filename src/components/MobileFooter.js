import {  Flex, HStack, Link,VStack } from '@chakra-ui/layout';
import {
  FaBabyCarriage,
  FaHeart,
  FaHome,

  FaShoppingCart,
} from 'react-icons/fa';
import React from 'react';
 import { Link as ReachLink } from 'react-router-dom';
function MobileFooter() {
  return (
    <Flex>
    <HStack
    w="100%"
      display={['flex', 'none']}
      bgColor="gray.200"
      h="50px"
      position="fixed"
      left={0}
      bottom={0}
      right={0}
      justifyContent="space-around"
      alignItems="center"
    >
      <VStack spacing={0}>
        <FaHome size="20px" />
        <Link as={ReachLink} to="./" fontSize="xs" fontWeight="bold">
          Home
        </Link>
      </VStack>
      <VStack spacing={0}>
        <FaShoppingCart size="20px" />
        <Link as={ReachLink} to="../cart" fontSize="xs" fontWeight="bold">
          Cart
        </Link>
      </VStack>
      <VStack spacing={0}>
        <FaBabyCarriage size="20px" />
        <Link as={ReachLink} to="../categories" fontSize="xs" fontWeight="bold">
          Category
        </Link>
      </VStack>
      <VStack spacing={0}>
        <FaHeart size="20px" />
        <Link as={ReachLink} to="../favourites" fontSize="xs" fontWeight="bold">
          Liked
        </Link>
      </VStack>
    </HStack>
    </Flex>
  );
}

export default MobileFooter;
