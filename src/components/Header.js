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
  Avatar,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import React from 'react';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import SideBar from './SideBar';
function Header() {
  // const [sideBar, setSideBar]=useState(false)
  const history = useHistory();
  return (
    <Box
      w="100%"
      bgColor="white"
      position="sticky"
      margin="auto"
      h="75px"
      top={0}
      zIndex={2}
      // boxShadow="0 0 12px 0  rgba(0,0,0,0.3)"
      boxShadow="sm"
    >
      {/* <SideBar /> */}
      <VStack
        // h="150px"
        w="100%"
      >
        <Flex
          w="100%"
          pt={4}
          pb={1}
          px={['1%', '2%', '2%']}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex w={['70%', '70', '40%', '30%']}>
            <Heading
              as="h1"
              ml={5}
              cursor="pointer"
              // fontFamily='Karla'
              color="purple"
              // fontFamily='Poppins'
              fontFamily="Sofia"
              fontWeight="semibold"
              onClick={() => history.push('../')}
            >
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
              border="1px"
              borderColor="purple"
              borderRightRadius="none"
              placeholder="Enter Search Item"
            />
            <Button
              p={0}
              borderLeftRadius="none"
              variant="solid"
              bgColor="purple"
              color="white"
              outlineColor="none"
              outline={0}
            >
              <FiSearch />
              {/* Search */}
            </Button>
          </HStack>
          <HStack
            w={['40%', '20%']}
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
            // border="2px"
          >
            <Box position="relative">
              <FiHeart
                style={{ fill: 'red' }}
                className="footer__icon"
                onClick={() => history.push('../favourites')}
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
            <Box position="relative">
              <FiShoppingCart
                style={{ fill: 'purple' }}
                onClick={() => history.push('../cart')}
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
            <Box position="relative">
              <Avatar size="sm" onClick={() => history.push('../log-in')} />
            </Box>
          </HStack>
        </Flex>
        {/* <HStack
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
              to="../about-us"
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
              as={ReachLink}
              to="../categories"
              px={['2']}
              py={2}
              fontSize={['sm', 'sm', 'md']}
              border="2px"
              mb={2}
              bgColor={['blue.200', 'white']}
            >
              Toys
            </Link>
            <Link
              as={ReachLink}
              to="../categories"
              px={['1', '2']}
              py={2}
              fontSize={['sm', 'sm', 'md']}
              border="2px"
              mb={2}
              bgColor={['blue.200', 'white']}
            >
              Categories
            </Link>
            <Link
              as={ReachLink}
              to="../categories"
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
          </HStack> */}
        {/* <SideBar state={sideBar} /> */}
      </VStack>
    </Box>
  );
}
export default Header;
