import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import {useHistory} from "react-router-dom"


function SubTotal() {
    const history= useHistory();
  return (
    <Box>
      <Flex class="cart-total">
        <Text class="cart-total-title">Total:</Text>
        <Text class="cart-total-price"> 19.40</Text>
      </Flex>

      <Box className="btn-cont d-flex my-3 justify-content-end">
        <button class="btn bg-light btn-purchase border" type="button">
        </button>
        <Button onClick={()=>history.push("./")}>Continue Shoping</Button>

        <button class="btn btn-primary btn-purchase" type="button">
          Checkout
        </button>
      </Box>
    </Box>
  );
}

export default SubTotal;
