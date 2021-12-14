import React from 'react';

import { products } from '../utils/dummy';
import Item from './Item';
import { Flex} from '@chakra-ui/layout';


function ItemLayout() {
  return (
    <Flex
      flexWrap="wrap"
      // direction={['column', 'row', 'row']}
      direction={['column', 'row', 'row']}
      // px={['1%', '2%', '8%']}
      px={['1%', '2%']}
      py={5}
      pb={6}
      border="2px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.100"
    >
      {products.map((product, index) => (
        <Item product={product} id={index} key={index} />
      ))}
    </Flex>
  );
}

export default ItemLayout;
