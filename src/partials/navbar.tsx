import { Button, Menu, MenuList, MenuItem, Box, Flex, HStack, Image, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerHeader, Drawer, Portal, useDisclosure, DrawerContent } from '@chakra-ui/react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
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
            backgroundColor='rgb(255, 255, 255)'>
            <Flex justifyContent='space-evenly' alignItems='center'>
                <Image src='/public/title.png' w='20%' sx={style}>
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
                                    <Button variant="ghost" onClick={onClose}>Home</Button>
                                    <Button variant="ghost" onClick={onClose}>About Us</Button>
                                    <Button variant="ghost" onClick={onClose}>Contact Us</Button>
                                    <Button variant="ghost" onClick={onClose}>Our Menu</Button>
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
