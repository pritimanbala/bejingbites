import { Box, Flex, Image, Heading, AspectRatio, Text} from "@chakra-ui/react"
import changeTheme from "./logics/changeTheme"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SubMenuProps {
  theme: string;
  menuItem: string;
  setMenuItem: (menuItem: string) => void;
}
const SubMenu = ({ theme, setMenuItem, menuItem }: SubMenuProps) => {
  const navigate = useNavigate();
  const items = [
    {
      thing: 'Starter',
      src: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg',
      code: 'starter'
    }, {
      thing: 'Main Course',
      src: 'https://images.pexels.com/photos/23370999/pexels-photo-23370999.jpeg',
      code: 'mainCourse'
    }, {
      thing: 'Desert',
      src: 'https://images.pexels.com/photos/19902252/pexels-photo-19902252.jpeg',
      code: 'deserts'
    },
  ]
  return (
    <Box sx={changeTheme(theme)} minH='500px'>
      <Heading w='100%' textAlign='center' fontFamily="'Playfair Display', serif" fontSize='clamp(3rem, 2vh, 5rem)' py={7} >OUR MENU</Heading>
      <Text fontSize='xl' mb={2} textAlign='center'>Crafted with Passion, Served with Delight — Dive into Our Three Signature Sections.</Text>
      <Flex direction='row' justify='center' align='center' flexWrap='wrap' w='100%' p={4} gap={5} >
        {items.map((details, index) => {
          const [mouseOn, setMouseOn] = useState<boolean>(false)
          return(
            <>
              <Box key={index} border='1px solid black' zIndex={99} textAlign='center' flexWrap='wrap' maxW='300px' w={{ base: "100%", sm: "80%", md: "45%", lg: "30%" }} transition='all 0.25s ease-in-out'
                sx={{
                  position: 'relative',
                  ':hover': {
                    borderRadius: "99px",
                    cursor: 'pointer',
                    bg: 'rgba(0, 0, 0, 0.1)'
                  }
                }}
                onClick={() => { console.log(menuItem); setMenuItem(details.code); navigate('/menu'); }}
                role="group"
                onMouseEnter={() => {
                  setMouseOn(true)
                }}
                onMouseLeave={() => {
                  setMouseOn(false)
                }}>
                <AspectRatio ratio={9 / 16}>

                  <Image w='100%' src={details.src} objectFit='cover'></Image>
                </AspectRatio>
                {mouseOn && <Box position='absolute' h='100%' w='100%' top={0} left={0} display='flex' justifyContent='center' alignItems='center' color='white' backdropFilter='blur(10px)'
                opacity={0}
                transition='opacity 0.3s ease-in-out'
                _groupHover={{ opacity: 1 }}
                pointerEvents='none'>
                  <Heading>{details.thing}</Heading>
                </Box>}

              </Box>
            </>)
        })}
      </Flex>
    </Box>
  )
}

export default SubMenu
