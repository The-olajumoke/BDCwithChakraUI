import { Box } from '@chakra-ui/layout'
import React from 'react'
import Container from '../components/Container'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import ItemLayout from '../components/ItemLayout'

function AddItem() {
    return (
        <Box width="100vw" p={0} margin="auto" >
            <Container>
                <FormInput/>
            </Container>
        </Box>
    )
}

export default AddItem
