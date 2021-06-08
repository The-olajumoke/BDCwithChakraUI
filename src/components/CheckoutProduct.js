import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/number-input';
import React from 'react';
// import './Cart.css';
// import Love from '@material-ui/icons/FavoriteBorder';
// import Bin from '@material-ui/icons/Delete';
// import { useStateValue } from './StateProvider';
import image from '../newImg/blanket-2593141_1920.jpg';
function CheckoutProduct({ id, name, description, price, quantity }) {
//   const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // dispatch({
    //   type: 'REMOVE_FROM_BASKET',
    //   id: id,
    // });
  };

  const handleChange = e => {
    // dispatch({
    //   type: 'SET_QUANTITY',
    //   payload: { id: id, quantity: +e.target.value },
    // });
  };
  return (
    <Box
      w={[]}
      px={['3px', '3px', '4%', "8%"]}
      my={5}
    >
      <HStack width="100%" h={['100px', '130px']} borderRadius="xl" border="2px"  spacing={0}>
        <HStack
          w={['50%']}
          h="100%"
          borderLeft={0}
          py={2}
          px={1}
          justifyContent={[' space-between', 'space-around']}
        >
          <Img w={['60px', '150px']} h="auto" src={image} />
          <VStack textAlign="left">
            <Text fontWeight="bold" fontSize={['12px', '15px', '15px', '25px']}>
              Message Cotton T-shirt
            </Text>
            <Text fontSize={['12px', '15px']}>
              Color: <b>RED</b>
            </Text>
          </VStack>
        </HStack>
        <Flex
          alignItems="center"
          w={['20%', '10%']}
          h="100%"
          borderLeft="2px"
          fontSize={['15px', '15px']}
        >
          <NumberInput defaultValue={15} min={1} max={20}>
            <NumberInputField justifyContent="center" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>

        <Flex
          width={['15%', '20%']}
          h="100%"
          borderLeft="2px"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="semibold" fontSize={['15px', '25px']}>
            14.00
          </Text>
        </Flex>
        <Flex
          width={['15%', '20%']}
          h="100%"
          borderLeft="2px"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="semibold" fontSize={['15px', '25px']}>
            14.00
          </Text>
        </Flex>
      </HStack>
    </Box>
    
  );
}

export default CheckoutProduct;
