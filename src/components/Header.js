import {
  Box,
  Button,

  Link,
  HStack,
  Flex,
  Input,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
 import { Link as ReachLink } from "react-router-dom";
import React, { useState } from 'react';
import { FiSearch, FiHeart,FiShoppingCart } from 'react-icons/fi';
import {useHistory} from "react-router-dom"
import {GiHamburgerMenu}from "react-icons/gi" 
import SideBar from './SideBar';
function Header() {
  const [sideBar, setSideBar]=useState(false)
  const history = useHistory()
  return (
    <VStack
      // borderBottom="2px"
      bgColor="white"
      position="sticky"
      top="0"
      left="0"
      right={0}
      zIndex="300"
      h="150px"
    >
      <Flex
        w="100%"
        pt={4}
        pb={1}
        px={['1%', '2%', '2%', '7%']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex  w={['70%', '70', '40%', '30%']}>
          <GiHamburgerMenu onClick={()=>setSideBar(prev=>!prev)}  size="40px"/>
          <Heading  as="h1" ml={5} cursor="pointer" onClick={() => history.push('./')}>
            
            BabiesDotCom
          </Heading>
        </Flex>
        <HStack
          w={['40%', '0%', '70%', '35%']}
          spacing={0}
          display={['none', 'flex', 'flex']}
        >
          <Input
            variant="outline"
            border="2px"
            borderColor="purple"
            borderRightRadius="none"
            placeholder="Enter Search Item"
          />
          <Button
            p={0}
            borderLeftRadius="none"
            variant="solid"
            bgColor="purple"
          >
            <FiSearch />
            {/* Search */}
          </Button>
        </HStack>
        <HStack p={2} w="20%" justifyContent="flex-end" alignItems="center">
          <Box position="relative">
            <FiHeart style={{ fill: 'red' }} className="footer__icon" />
            <Text
              fontSize="sm"
              fontWeight="bold"
              position="absolute"
              right={0}
              top="-10px"
            >
              4
            </Text>
          </Box>
          <Box position="relative">
            <FiShoppingCart
              style={{ fill: 'purple' }}
              onClick={() => history.push('./cart')}
              className="footer__icon"
            />
            <Text
              fontSize="sm"
              fontWeight="bold"
              position="absolute"
              right={0}
              top="-10px"
            >
              4
            </Text>
          </Box>
        </HStack>
      </Flex>
      <HStack
        // px="8%"
        bgColor={['white', 'blue.200']}
        w="100%"
        justifyContent="space-around"
        pt={5}
        spacing={['0', '3']}
        flexWrap="wrap"
        fontWeight="extrabold"
      >
        <Link
          as={ReachLink}
          to="/about"
          px={['1', '2']}
          py={2}
          fontSize={['sm', 'sm', 'md']}
          border="2px"
          mb={2}
          bgColor={['blue.200', 'white']}
        >
          About Us
        </Link>
        <Link
          px={['1', '2']}
          py={2}
          fontSize={['sm', 'sm', 'md']}
          border="2px"
          mb={2}
          bgColor={['blue.200', 'white']}
        >
          Contact
        </Link>
        <Link
          px={['1', '2']}
          py={2}
          fontSize={['sm', 'sm', 'md']}
          border="2px"
          mb={2}
          bgColor={['blue.200', 'white']}
        >
          All Items
        </Link>
        <Link
          px={['1', '2']}
          py={2}
          fontSize={['sm', 'sm', 'md']}
          border="2px"
          mb={2}
          bgColor={['blue.200', 'white']}
        >
          New In
        </Link>
        <Link
          px={['1', '2']}
          py={2}
          fontSize={['sm', 'sm', 'md']}
          border="2px"
          mb={2}
          bgColor={['blue.200', 'white']}
        >
          Clothing
        </Link>
       
      </HStack>
      <SideBar state={sideBar}/>
    </VStack>
  );
}
export default Header;
