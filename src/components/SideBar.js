import { Box } from '@chakra-ui/layout'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'; 

function SideBar({state}) {
    console.log(state)

      return (
        <>
          {state === true ? (
            <Box
              h="100vh"
              w="20%"
              bgColor="lime"
              position="absolute"
              left={0}
              top={0}
            >
              <GiHamburgerMenu
                size="40px"
              />
              sidebar here
            </Box>
          ) : (
            ''
          )}
        </>
      );
   
}

export default SideBar
