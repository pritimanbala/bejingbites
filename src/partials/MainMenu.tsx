import { supabase } from '../supabase'
import { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Container
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import changeTheme from './logics/changeTheme';

interface MainMenuProps {
  theme: string;
  menuItem: string;
  setMenuItem: (menuItem: string) => void;
}

const MainMenu = ({ theme, setMenuItem, menuItem }: MainMenuProps) => {
  const [displayItems, setDisplayItems] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [pageLoad, setPageLoad] = useState<boolean>(true);
  useEffect(() => {
    let isMount = true
    const fetchData = async () => {
      if(pageLoad && isMount){
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .order('name');
        if (error) {
          console.error('Error fetching menu items:', error);
        } else if (!data || data.length === 0) {
          console.log('No menu items found');
          setDisplayItems([]);
        }
        else {
          console.log('page reloaded')
          console.log('Fetched Menu Items:', data);
          const starters = data.filter(item => item.category === 'starters');
          const mainCourses = data.filter(item => item.category === 'mainCourse');
          const desserts = data.filter(item => item.category === 'desserts');
          if(menuItem === 'starters'){
            setDisplayItems(starters);
          } else if(menuItem === 'mainCourse'){
            setDisplayItems(mainCourses);
          } else{
            setDisplayItems(desserts);
          } 
  
          console.log('Categorized Menu Items:', { starters, mainCourses, desserts });
        }
        console.log('Menu Items:', menuItem);
        // Set loading to false after fetching data
        if(isMount){
          setLoading(false);
          setPageLoad(false);
        }
      }
    }
    fetchData();
    if(menuItem === 'starters'){
      setTitle('STARTERS')
    }else if(menuItem === 'mainCourse'){
      setTitle('MAIN COURSE')
    }else{
      setTitle('DESSERTS')
    }


    return () => {isMount = false}
  }, [pageLoad]);

  return (
    <>
      {loading && <Flex sx={changeTheme(theme)} direction="column" justify="center" align="center" height="100vh">
        <Spinner size="xl" thickness="4px" color="teal.400" mb={4} />
        <Text fontSize="lg" color="gray.500">Loading menu items...</Text>
      </Flex>}
      {!loading && (
        <Box mt='10vh' sx={changeTheme(theme)} minH='100vh'>
          <Container mx='auto' textAlign='center' py={6}>
            <Heading fontSize='5xl'>{title}</Heading>
          </Container>
          <Flex w='95%' justify='space-between' align='center' mx='auto' py={5}>
            <Text fontSize='30px'>Our Exclusive Menu</Text> 
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {title}
              </MenuButton>
              <MenuList>
                <MenuItem type='button' onClick={(e) => {e.preventDefault(); setMenuItem('starters'); }}>Starter</MenuItem>
                <MenuItem type='button'  onClick={(e) => {e.preventDefault();  setMenuItem('mainCourse'); }}>Main Course</MenuItem>
                <MenuItem type='button'  onClick={(e) => {e.preventDefault();  setMenuItem('dessert'); }}>Dessert</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            {displayItems.map((item) => (
              <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" key={item.name} w='300px' m={2} sx={{ textAlign: 'center' }}>
                <Image src={item.image_url} width='300px' height='300px'></Image>
                <Heading fontSize='20px'>{item.name}</Heading>
                <p>{item.description}</p>
                <Flex justify='space-between' align='center' w='80%' mx='auto'>
                  <p>Price: ${item.price}</p>
                  <p>Type: <span style={item.type === 'veg' ? { color: 'green' } : { color: 'red' }}>{item.type}</span></p>
                </Flex>
              </Box>
            ))}
          </Flex>

        </Box>)}
    </>
  )
}

export default MainMenu
