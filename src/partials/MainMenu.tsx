import { supabase } from '../supabase'
import { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex , Heading, Image ,chakra,shouldForwardProp, Spinner, Text} from '@chakra-ui/react';
import {motion,isValidMotionProp} from 'framer-motion'

const MainMenu = () => {
  const [displayItems, setDisplayItems] = useState<any[]>([]);
  const [starter, setStarter] = useState<any[]>([]);
  const [mainCourse, setMainCourse] = useState<any[]>([]);
  const [dessert, setDessert] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuItems, setItems] = useState<any[]>([]);
  const [item, setItem] = useState<any>('Our Exclusive Menu');
  const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('menu')
        .select('*')
        .order('name');
      if (error) {
        console.error('Error fetching menu items:', error);
      } else if (!data || data.length === 0) {
        console.log('No menu items found');
        setItems([]);
        setDisplayItems([]);
      }
      else {
        console.log('Fetched Menu Items:', data);
        setItems(data);
        setDisplayItems(data);
      }
      console.log('Menu Items:', menuItems);
      // Set loading to false after fetching data
      setLoading(false);
    }
    fetchData();
  }, []);

  const categorizeMenuItems = () => {
    const starters = menuItems.filter(item => item.category === 'starters');
    const mainCourses = menuItems.filter(item => item.category === 'mainCourse');
    const desserts = menuItems.filter(item => item.category === 'desserts');
    setStarter(starters);
    setMainCourse(mainCourses);
    setDessert(desserts);
    console.log('Categorized Menu Items:', { starters, mainCourses, desserts });
  }

  useEffect(() => {
    if (menuItems.length > 0) {
      categorizeMenuItems();
    }
  }, [menuItems]);
  return (
    <>
      {loading && <Flex direction="column" justify="center" align="center" height="100vh">
    <Spinner size="xl" thickness="4px" color="teal.400" mb={4} />
    <Text fontSize="lg" color="gray.500">Loading menu items...</Text>
  </Flex>}
      {!loading && (
        <Box mt='10vh'>
          <Flex w='95%' justify='space-between' align='center' mx='auto' py={5}>

          <Heading>{item}</Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
            </MenuButton>

            <MenuList>
              <MenuItem onClick={() => {setDisplayItems(starter); setItem('Starters');}}>Starter</MenuItem>
              <MenuItem onClick={() => {setDisplayItems(mainCourse); setItem('Main Course');}}>Main Course</MenuItem>
              <MenuItem onClick={() => {setDisplayItems(dessert); setItem('Dessert');}}>Dessert</MenuItem>
              <MenuItem onClick={() => {setDisplayItems(menuItems); setItem('All');}}>All</MenuItem>
            </MenuList>

          </Menu>
          </Flex>

            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              {displayItems.map((item) => (
                <MotionBox p={4} borderWidth={1} borderRadius="md" boxShadow="md" key={item.name} w='300px' m={2} sx={{ textAlign: 'center' }} whileFocus={{scale: 1.05}} animate={{scale: 1}}>
                  <Image src='https://images.pexels.com/photos/19902252/pexels-photo-19902252.jpeg' width='300px' height='300px'></Image>
                  <Heading fontSize='20px'>{item.name}</Heading>
                  <p>{item.description}</p>
                  <Flex justify='space-between' align='center' w='80%' mx='auto'> 
                    <p>Price: ${item.price}</p>
                    <p>Type: {item.type}</p>
                  </Flex>
                </MotionBox>
              ))}
            </Flex>

        </Box>)}
    </>
  )
}

export default MainMenu
