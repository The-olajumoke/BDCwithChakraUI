import {
  Box,
  Heading,
  Img,
  Button,
  Flex,
  Stack,
  Text,
  useNumberInput,
  HStack,
  Input,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import { useParams } from 'react-router-dom';

import { products } from '../utils/dummy';
import Header from '../components/Header';
import Container from '../components/Container';

function About() {
  const { id } = useParams();
  let currentProduct = products.find((product, index) => index == id);

  console.log(currentProduct)
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 30,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
  return (
    <Container>
      <Box>
        <Flex
          direction="row"
          maxWidth="85%"
          m="auto"
          spacing={5}
          justifyContent="space-between"
        >
          <Box border="4px" h="lg" w="38%">
            <Img
              // boxSize="150px"
              objectFit="cover"
              boxSize="full"
              src={currentProduct.imgSrc}
              alt="product name"
            />
          </Box>
          <Stack border="4px" spacing={4} textAlign="left" width="60%">
            <Heading as="h2" size="xl">
              {currentProduct.name}
            </Heading>
            <Heading as="h6" size="lg">
              {currentProduct.price}{' '}
            </Heading>
            <Text fontSize="lg">{currentProduct.desc}</Text>
            <Flex>
              <HStack
                size="auto"
                spacing="0"
                p={0}
                border="2px"
                borderRadius="none"
              >
                <Button
                  size="sm"
                  borderRadius="none"
                  fontWeight="semibold"
                  fontSize="1em"
                  {...dec}
                  borderRight="1px"
                  bgColor="white"
                >
                  -
                </Button>
                <Input
                  w="50px"
                  variant="unstyled"
                  borderRadius="none"
                  {...input}
                  marginX="0"
                  fontSize="1em"
                  fontWeight="semibold"
                  textAlign="center"
                />
                <Button
                  m="0"
                  size="sm"
                  borderRadius="none"
                  fontWeight="semibold"
                  fontSize="1em"
                  borderLeft="1px"
                  bgColor="white"
                  {...inc}
                >
                  +
                </Button>
              </HStack>
              <Button
                colorScheme="blue"
                variant="solid"
                size="lg"
                rightIcon={<FaShoppingCart />}
              >
                ADD TO CART
              </Button>
            </Flex>
            <Box>
              <Text>
                <b>COLOR</b> :Yellow
              </Text>
              <HStack>
                <Box h={8} w={8} bgColor="blue" borderRadius="2xl"></Box>
                <Box h={8} w={8} bgColor="yellow" borderRadius="2xl"></Box>
                <Box h={8} w={8} bgColor="green" borderRadius="2xl"></Box>
                <Box h={8} w={8} bgColor="red" borderRadius="2xl"></Box>
              </HStack>
            </Box>
            <Box>
              <Text>
                <b>SIZE</b> :L
              </Text>
              <HStack textAlign="center">
                {currentProduct.sizes.map(size => (
                  <Box border="2px" h={8} w={8}>
              {size}
                  </Box>
                ))}

               
              </HStack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
}

export default About;
