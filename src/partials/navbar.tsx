import { Button, Box, Flex, HStack, Image, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerHeader, Drawer, useDisclosure, DrawerContent } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

interface NavbarProps {
    onClickAbout: () => void;
    onClickReserve: ()=> void;
}

function Navbar({onClickAbout, onClickReserve}: NavbarProps){
    const style = {
        ':hover': {
            cursor: 'pointer'
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box position="fixed"
            top={0}
            zIndex={999}
            left={0}
            width='100%'
            height='10vh'
            py={4}
            backgroundColor='rgba(0, 0, 0, 1)'>
            <Flex justifyContent='space-evenly' alignItems='center'>
                <Image src='/title.png' w='20%' sx={style}>
                </Image>
                <HStack>
                    <Button onClick={onOpen} variant='outline' colorScheme='yellow' size='sm'>
                        Open
                    </Button>
                    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton></DrawerCloseButton>
                            <DrawerHeader>Options Menu</DrawerHeader>
                            <DrawerBody>
                                <Box display="flex" flexDirection="column" gap={2}>
                                    <Button variant="ghost" onClick={onClose} as={Link} to='/'>Home</Button>
                                    <Button variant="ghost" onClick={() => { onClickAbout(); onClose(); }}>About Us</Button>
                                    <Button variant="ghost" onClick={onClose}>Contact Us</Button>
                                    <Button variant="ghost" onClick={onClose} as={Link} to='/menu'>Our Menu</Button>
                                    <Button variant="ghost" onClick={() => { onClickReserve(); onClose(); }}>Reserve a Table</Button>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </HStack>
            </Flex>
        </Box>
    )
}
export default Navbar
