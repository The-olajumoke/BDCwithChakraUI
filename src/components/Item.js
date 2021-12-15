import React, { useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router-dom';
import { Img } from '@chakra-ui/image';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
// import { useDispatch } from 'react-redux';
function Item({ product, id }) {
  // const currentProduct = product.toString("");
  // console.log(currentProduct);

  // const currentProduct=[product, id]
  // console.log(currentProduct);
  const history = useHistory();
  // const dispatch = useDispatch();
  const [likeState, setLikeState] = useState(false);

  return (
    <Flex
      direction={['row', 'column', 'column', 'column']}
      key={id}
      pos="relative"
      border="2px"
      borderColor="white"
      w={['98%', '280px']}
      h={['120px', '480px']}
      p="7px"
      // pt={0}
      m="auto"
      my={['2', '6']}
      bgColor="white"
      borderRadius="lg"
      spacing={1}
    >
      <Box
        pos="absolute"
        right={['', '0', '0']}
        left={['', '', '']}
        bgColor={`${product.status === 'SOLD OUT' ? 'red' : 'green'}`}
        borderLeftRadius={['', '10px']}
        borderRightRadius={['10px', '']}
        px="10px"
        py="3px"
        color="white"
        fontSize="sm"
        fontWeight="bold"
        letterSpacing="-1px"
      >
        {product.status}
      </Box>
      <Flex
        w={['35%', 'auto']}
        h={['100%', '55%']}
        justifyContent="center"
        alignItems="center"
      >
        <Img
          onClick={() => history.push(`./about/${id}`)}
          w="100%"
          h="100%"
          src={product.imgSrc}
        />
      </Flex>
      <Flex
        w={['65%', '100%']}
        h={['', '45%']}
        direction={['column']}
        justifyContent="space-around"
        textAlign={['center', 'left']}
        alignItems="center"
      >
        <Box h="20%" w="100%" py={1} flex={0.5}>
          <Text fontSize={['17px', '20px']} fontWeight="extrabold">
            {product.name}
          </Text>
          <Text fontSize={['15px', '20px']} fontWeight="bold">
            $ {product.price}.00
          </Text>
          <Text fontSize="xl" fontWeight="semibold"></Text>
        </Box>
        <Box
          display={['flex']}
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display={['none', 'inline-flex']}>
            <HStack className="product__rating">
              {Array(product.rating)
                .fill()
                .map(_ => (
                  <FaStar style={{ fill: 'orange' }} />
                ))}
              <Text fontWeight="semi-bold">({product.rating})</Text>{' '}
            </HStack>
          </Box>
          <Button
            display={['none', 'inline-flex']}
            // bgColor="grey.100"
            backgroundColor="white"
            variant="solid"
            size={['sm', 'lg']}
            p={2}
          >
            <FiHeart
              className="footer__icon"
              fill={likeState ? 'red' : 'white'}
              onClick={() => {
                setLikeState(state => !state);
              }}
            />
          </Button>
        </Box>
        <Button
          // onClick={() => dispatch(addItemToCart(product))}
          py={2}
            color="white"
            bgColor="purple"
          // colorScheme="blue"
          fontWeight="black"
          //   variant="solid"
          size={['md', 'lg']}
          width={['70%', '95%']}
          rightIcon={<FaShoppingCart />}
        >
          ADD TO CART
        </Button>
      </Flex>
    </Flex>
  );
}

export default Item;
