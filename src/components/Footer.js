import { Input, Button } from '@chakra-ui/react';
import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';

import React from 'react';
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarker,
  FaPaypal,
  FaStripe,
  FaTwitter,
} from 'react-icons/fa';
import { FiInstagram, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      bgColor="blue.200"
      px={['2%', '8%']}
      py={3}
      mb={5}
      h={['350px', '250px']}
    >
      <Flex
        direction={['column-reverse', 'row']}
        justifyContent="space-between"
        h="70%"
        alignItems="center"
      >
        <VStack w={['100%', '48%']} spacing={3}>
          <Text
            fontSize={['md', 'xl']}
            fontFamily="cursive"
            fontWeight={['black', 'semibold']}
          >
            STAY IN TOUCH
          </Text>
          <Flex color="white" padding="3" justifyContent="space-between">
            {/* <TwitterIcon className="footer__icon mr-3" /> */}
            <FaTwitter className="footer__icon" />
            <FaFacebookSquare className="footer__icon" />
            <FaLinkedin className="footer__icon" />
            <FiInstagram className="footer__icon" />
          </Flex>

          <Flex>
            <FaMapMarker />
            <Text fontSize="lg">N0. 19 Owolabi street, araromi area, ijeododo island,Ikotun Lagos</Text>
          </Flex>
        </VStack>

        <VStack w={['100%', '48%']} spacing={3}>
          <Text
            fontSize={['md', 'xl']}
            fontFamily="cursive"
            fontWeight={['black', 'semibold']}
          >
            NEVER MISS AN EMAIL
          </Text>
          <HStack w={['100%', '80%']} spacing={0}>
            <Input
              borderRadius="none"
              variant="solid"
              placeholder="Enter Email..."
              size="md"
              py={1}
            />
            <Button
              variant="ghost"
              color="white"
              bgColor="purple"
              borderRadius="none"
              rightIcon={<FiMail />}
              size="lg"
              fontSize="md"
              fontFamily="serif"
              fontWeight="semibold"
            >
              SUSCRIBE
            </Button>
          </HStack>
        </VStack>
      </Flex>
      <Flex
        bgColor="purple"
        mt={5}
        width={['100%', '40%']}
        //   color="white"
        padding={4}
        justifyContent="center"
        margin="auto"
      >
        <FaCcVisa style={{ transform: 'scale(1.5)', margin: '0 12px' }} />
        <FaPaypal style={{ transform: 'scale(1.5)', margin: '0 12px' }} />
        <FaCcPaypal style={{ transform: 'scale(1.5)', margin: '0 12px' }} />
        <FaStripe style={{ transform: 'scale(1.5)', margin: '0 12px' }} />
        <FaCcMastercard style={{ transform: 'scale(1.5)', margin: '0 12px' }} />
      </Flex>
    </Flex>
  );
}

export default Footer;
