import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { Box, Divider, Flex,VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import {
  FaBabyCarriage,
  FaBicycle,
  FaBook,
  FaShoePrints,
} from 'react-icons/fa';
import { FiHome, FiMenu } from 'react-icons/fi';
import { GiDress, GiShirt } from 'react-icons/gi';
import image3 from '../newImg/girl-2696947_1920.jpg';
import NavItem from './NavItem';

function SideBar({}) {
  const [navSize, changeNavSize] = useState('small');

  return (
    <Box
      display={['none', 'flex']}
      position="sticky"
      // position={["none", "fixed"]}
      left="0"
      top="0"
      bottom="0"
      zIndex={500}
      h={['100vh', '100vh']}
      // marginTop={['1.5vh', '2.5vh']}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      // borderRadius={navSize == 'small' ? '15px' : '30px'}
      w={navSize == 'small' ? '75px' : '250px'}
      justifyContent="space-between"
      flexDir="column"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
        justifyContent='space-between'
        flex={1}
      >
        <IconButton
          background="none"
          mt={3}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          fontSize="4xl"
          onClick={() => {
            if (navSize === 'small') {
              changeNavSize('large');
            } else {
              changeNavSize('small');
            }
          }}
        />
        <VStack h='75%' display={['flex']} flexDirection='column' justifyContent='space-between'  >
          <NavItem navSize={navSize} icon={FiHome} title="Dashboard" />

          <NavItem navSize={navSize} icon={FaBabyCarriage} title="Babies" />
          <NavItem navSize={navSize} icon={FaBicycle} title="Toys" />
          <NavItem navSize={navSize} icon={GiShirt} title="Boys" />
          <NavItem navSize={navSize} icon={FaShoePrints} title="Shoes" />
          <NavItem navSize={navSize} icon={GiDress} title="Girls" />
          <NavItem navSize={navSize} icon={FaBook} title="Back to School" />
        </VStack>
        <Flex mt={4} alignItems="center">
          <Avatar size="sm" src={image3} />
          {/* <Flex
            dir="column"
            ml={4}
            display={navSize == 'small' ? 'none' : '200px'}
          >
            <Heading>Sylwia Weller</Heading>
            <Text>Admin</Text>
          </Flex> */}
        </Flex>
      </Flex>

    </Box>
  );
}

export default SideBar;
