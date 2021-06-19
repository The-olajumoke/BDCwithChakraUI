import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Container({children}) {
    return (
        <Flex  direction="column"  >
            <Header/>
            {children}
            <Footer/>
        </Flex >
    )
}

export default Container
