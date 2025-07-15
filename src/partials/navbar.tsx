import { Button, Box, Flex, HStack, Image, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerHeader, Drawer, useDisclosure, DrawerContent ,Menu,MenuList, MenuButton, MenuItem} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

interface NavbarProps {
    onClickAbout: () => void;
    onClickReserve: ()=> void;
    onClickMenu: ()=> void;
    setTheme: (theme: string) => void;
}

function Navbar({onClickAbout, onClickReserve, setTheme, onClickMenu}: NavbarProps){
    const style = {
        ':hover': {
            cursor: 'pointer'
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure(); //a custom hook required for your drawer
    return (
        <Box position="fixed"
            top={0}
            zIndex={999}
            left={0}
            width='100%'
            height='11vh'
            py={4}
            backgroundColor='rgba(0, 0, 0, 1)'>
            <Flex justifyContent='space-evenly' alignItems='center'>
                <Image src='/title.png' w='30%' sx={style} minW='200px'>
                </Image>
                <HStack>
                    <Button onClick={onOpen} variant='outline' colorScheme='yellow' size='sm'>
                        Open
                    </Button>
                    <Drawer placement='right' onClose={onClose} isOpen={isOpen}> 
                        {/* you can just import the component and use the things  */}
                        {/* but remember the things in chakra docs, the components they are using has some radix components thats why every that doesnt work */}
                        {/* so you have to search the things like Drawer Overlay and things like this to use  */}
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton></DrawerCloseButton>
                            <DrawerHeader>Options Menu</DrawerHeader>
                            <DrawerBody>
                                <Box display="flex" flexDirection="column" gap={2}>
                                    <Button variant="ghost" onClick={onClose} as={Link} to='/'>Home</Button>
                                    <Button variant="ghost" onClick={() => { onClickAbout(); onClose(); }}>About Us</Button>
                                    <Button variant="ghost" onClick={() => { onClickMenu(); onClose(); }}>Our Menu</Button>
                                    <Button variant="ghost" onClick={() => { onClickReserve(); onClose(); }}>Reserve a Table</Button>
                                    <Menu>
                                        <MenuButton as={Button} variant='ghost'>Change Theme</MenuButton>
                                        <MenuList display='flex' flexDirection='column' p={2}>
                                            <MenuItem  onClick={() => {setTheme('light'); onClose();}}>Light Mode</MenuItem>
                                            <MenuItem  onClick={() => {setTheme('dark'); onClose();}}>Dark Mode</MenuItem>
                                        </MenuList>
                                    </Menu>
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
