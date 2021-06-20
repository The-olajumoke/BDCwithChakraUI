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

  LinkBox,
  Link,
  VStack,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
 
import { products } from '../utils/dummy';
import Container from '../components/Container';
import Related from '../components/Related';
import Reviews from '../components/Reviews';

function About() {
  const { id } = useParams();
  const history = useHistory();


  let currentProduct = products.find((product, index)=>index==id);
  const [currentColor, setCurrentColor] = useState(currentProduct.colors[0]);
  const [currentSize, setCurrentSize] = useState('M');
  const [currentTab, setCurrentTab] = useState('Related');
  // Additional Information
  // Reviews(2)
  console.log(currentProduct);
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
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
          direction={['column', 'column', 'row']}
          maxWidth={['100%', '85%']}
          m="auto"
          justifyContent="space-between"
          p={4}
        >
          <Box border="4px" h={['xs', 'lg']} w={['95%', '38%']} margin="auto">
            <Img
              // boxSize="150px"
              objectFit="cover"
              boxSize="full"
              src={currentProduct.imgSrc}
              alt="product name"
            />
          </Box>
          <Stack
            p={3}
            spacing={['2', '4']}
            textAlign="left"
            margin="auto"
            width={['95%', '59%']}
          >
            <Heading fontWeight="bold" as="h3" size="lg">
              {currentProduct.name}
            </Heading>
            <Heading fontWeight="semi-bold" as="h6" size="lg">
              ${currentProduct.price}.00
            </Heading>
            <Text fontSize={['sm', 'lg']}>{currentProduct.desc}</Text>

            <Box>
              <Text>
                <b>COLOR</b>: <Text>{currentColor}</Text>
              </Text>

              <HStack>
                {currentProduct.colors.map(color => (
                  <Box
                    cursor="pointer"
                    onClick={() => setCurrentColor(color)}
                    h={8}
                    w={8}
                    bgColor={color}
                    borderRadius="2xl"
                  ></Box>
                ))}
              </HStack>
            </Box>
            <Box>
              <Text>
                <b>SIZE</b>: {currentSize}
              </Text>
              <HStack textAlign="center">
                {currentProduct.sizes.map((size, index) => (
                  <Box
                    key={id}
                    cursor="pointer"
                    onClick={() => setCurrentSize(size)}
                    border="2px"
                    h={8}
                    w={8}
                    fontWeight="bold"
                  >
                    {size}
                  </Box>
                ))}
              </HStack>
            </Box>
            <Flex
              direction={['column', 'row']}
              py={2}
              w={['100%', '55%']}
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack
                display={['none', 'flex']}
                spacing="0"
                p={2}
                border="2px"
                borderRadius="none"
                cursor="pointer"
                marginLeft={0}
                marginRight="auto"
              >
                <Button
                  size="md"
                  borderRadius="none"
                  fontWeight="bold"
                  fontSize="1.5em"
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
                  fontSize="1.5em"
                  fontWeight="semibold"
                  textAlign="center"
                />
                <Button
                  size="md"
                  borderRadius="none"
                  fontWeight="bold"
                  fontSize="1.5em"
                  borderLeft="1px"
                  bgColor="white"
                  {...inc}
                >
                  +
                </Button>
              </HStack>
              <Button
                // colorScheme="purple"
                backgroundColor="purple"
                color="white"
                variant="solid"
                size="lg"
                w={['100%', 'auto']}
                rightIcon={<FaShoppingCart />}
                onClick={() => history.push('../cart')}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Stack>
        </Flex>
        {/* MORE */}
        <VStack
          h="auto"
          maxH="600px"
          w="98%"
          margin="auto"
          p={2}
          my={6}
          borderTop="2px"
          borderColor="grey"
          justifyContent="space-between"
        >
          <LinkBox
            h="50px"
            w={['100%', '40%']}
            margin="auto"
            d="flex"
            p={1}
            justifyContent="space-around"
            alignItems="center"
            fontSize={['md', '17px']}
            fontWeight="bold"
          >
            <Link
              p={1}
              bgColor={currentTab === 'Related' ? 'purple' : ''}
              color={currentTab === 'Related' ? 'white' : ''}
              onClick={() => {
                setCurrentTab('Related');
              }}
            >
              Related
            </Link>
            <Link
              p={1}
              bgColor={currentTab === 'Additional' ? 'purple' : ''}
              color={currentTab === 'Additional' ? 'white' : ''}
              onClick={() => {
                setCurrentTab('Additional');
              }}
            >
              Additional Information
            </Link>
            <Link
              p={1}
              bgColor={currentTab === 'Reviews' ? 'purple' : ''}
              color={currentTab === 'Reviews' ? 'white' : ''}
              onClick={() => {
                setCurrentTab('Reviews');
              }}
            >
              Reviews(2)
            </Link>
          </LinkBox>
          {/* RELATED PRODUCTS */}

          {currentTab === 'Related' ? (
            <Related image={currentProduct.imgSrc} />
          ) : (
            ' '
          )}
          {/* ADDITIONAL INFO */}
          {currentTab === 'Additional' ? (
            <Box
              h="95%"
              w={['95vw', '80vw']}
              flexGrow={1}
              fontSize="xl"
              lineHeight={10}
            >
              <Text fontSize={['md', 'lg']} fontWeight="semi-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio aperiam quaerat obcaecati veniam dignissimos
                consequatur accusantium nihil enim exercitationem facilis quam
                dicta, nobis id sint magnam quos esse vero qui quis aliquid
                tenetur. Vero excepturi sint repellat, tenetur, provident dicta
                commodi ad dolorum facilis similique corporis perferendis fugit
                aperiam ab deserunt dignissimos suscipit est distinctio eum
                voluptatem ullam quod consequatur?
              </Text>
            </Box>
          ) : (
            ' '
          )}
          {/* REVIEWS */}
          {currentTab === 'Reviews' ? (
            <Reviews image={currentProduct.imgSrc} />
          ) : (
            ' '
          )}
        </VStack>
      </Box>
    </Container>
  );
}

export default About;
