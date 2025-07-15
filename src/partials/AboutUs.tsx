import { Flex, Image, Container, Heading, Text, Button, Box } from "@chakra-ui/react"
import changeTheme from "./logics/changeTheme";


import type { RefObject } from "react";

interface AboutUsProps {
    aboutRef: RefObject<HTMLDivElement>;   //RefObj refers to the ref what you will be using in your page
    theme: string;
}
//okay so this is typescript interface which puts a constraint that what all arguments the component should receive 


const AboutUs = (
    { aboutRef, theme }: AboutUsProps //here we put the interface to let the function its arguments' type
) => {
    return (
        <Box ref={aboutRef}>
            <Flex 
            direction={{base: 'column', md: 'row'}}
            align='center'
            justify='center'
            h='fit-content'
            gap={10}
            sx={changeTheme(theme)} 
            // i just took the change theme as a argument and implemented it in other components also so that i dont have to put that in every function
            >
                <Box flex={1} maxW='35%' mx={10} my={5}>
                    <Image src="https://images.pexels.com/photos/23436804/pexels-photo-23436804.jpeg" alt="chef" w='90%' h="90%" objectFit='cover'></Image>
                </Box>
                <Container textAlign='center' my='auto'>
                    <Heading my={10} fontWeight={400}>Meet <Text fontWeight={600}>Jīn Lóng Tiān Fǔ</Text></Heading>
                    <Text textAlign='justify'>Jinlong Tianfu is a name that echoes with majesty, wisdom, and power. Known as the Golden Dragon of the Heavenly Realm, he rose from humble beginnings to become a symbol of excellence across generations. With a vision as vast as the sky and a spirit forged in perseverance, Tianfu transformed everything he touched. His creations were not mere accomplishments—they were works of art, deeply rooted in tradition yet soaring with innovation. From founding monumental institutions to reviving lost cultural treasures, his influence shaped the course of history itself. People speak of his eloquence, his unmatched discipline, and the quiet strength he carried like the weightless robe of a sage. Where others saw obstacles, he saw opportunity; where others stopped, he began.</Text>
                    <Button variant='outline' my={4}>View More</Button>
                    <Flex justify='space-evenly' w='100%' align='center' my={10}>
                        {/* here you can use HStack also but its okay to go with flex */}
                        <Box border='2px solid black' borderRadius='10px' p={5} flexWrap='wrap'>
                            <Heading>10+</Heading>
                            <Text>Years of Experience</Text>
                        </Box>
                        <Box border='2px solid black' borderRadius='10px' p={5}>
                            <Heading>10+</Heading>
                            <Text>National Awards</Text>
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </Box>
    )
}

export default AboutUs
