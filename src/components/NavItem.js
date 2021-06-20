import { Flex,Text,Icon,Link,Menu,MenuButton,} from '@chakra-ui/react'
import React from 'react'
import {  useHistory } from 'react-router-dom';
function NavItem({navSize, title,icon,active}) {
  const history = useHistory();

    return (
      <Flex mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize ==="small"? "center":"flex-start"}>
<Menu placement="right">
    <Link
    backgroundColor={active && "purple"}
    p={3}
    _hover={{textDecor:"none", backgroundColor:"#AEC8CA"}}
    w={navSize==="large" && "100%"}
    >
    <MenuButton onClick={()=>history.push("../categories")} w="100%">
        <Flex>
            <Icon as={icon} fontSize="2xl" color={active?"white":"purple"} />
            <Text ml={5} display={navSize==="small"? "none":"flex"}>{title}</Text>
        </Flex>
    </MenuButton>
    </Link>
    
</Menu>

      </Flex>
    )
}

export default NavItem
