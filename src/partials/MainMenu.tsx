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
  setMenuItem: (menuItem: string) => void;    //here also you define the interface for your prop states
}

const MainMenu = ({ theme, setMenuItem, menuItem }: MainMenuProps) => {
  //defination of all the local variable states
  const [displayItems, setDisplayItems] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [pageLoad, setPageLoad] = useState<boolean>(true);

  //fetching data
  useEffect(() => {
    //created a async function
    const fetchData = async () => {
      //if page is loading then only we should fetch the items
      if(pageLoad){
        //created a constant for storing data
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .order('name');
          //checking if there is any error or not
        if (error) {
          console.error('Error fetching menu items:', error);
        } else if (!data || data.length === 0) {
          //returning if no data is returned
          console.log('No menu items found');
          setDisplayItems([]);
        }
        else {
          //when everything passes the test
          console.log('page reloaded') //just for safety check
          console.log('Fetched Menu Items:', data); //loging for safety check
          const starters = data.filter(item => item.category === 'starters');
          const mainCourses = data.filter(item => item.category === 'mainCourse'); //categorizing items
          const desserts = data.filter(item => item.category === 'desserts'); //you got to know how to use filter function of js
          //assignation of values to their respective states
          if(menuItem === 'starters'){
            setDisplayItems(starters);
          } else if(menuItem === 'mainCourse'){
            setDisplayItems(mainCourses);
          } else{
            setDisplayItems(desserts);
          } 
          //its good to display or set things here not at below cause if the pages reloads multiple times, it was killing the purpose of sorting
          //so its better you take props and then sort things out of there cause with set function they wont change
  
          console.log('Categorized Menu Items:', { starters, mainCourses, desserts }); //consoling if sorting has been done correctly or not
        }
        console.log('Menu Items:', menuItem);
        // Set loading to false after fetching data
          setLoading(false);
          setPageLoad(false);
        
      }
    } //final call to run the function
    fetchData();
    if(menuItem === 'starters'){
      setTitle('STARTERS')  //for the title
    }else if(menuItem === 'mainCourse'){
      setTitle('MAIN COURSE')
    }else{
      setTitle('DESSERTS')
    }


  }, [pageLoad]);
  //last [pageload] helps us to run the function once only when pageLoad is true

  return (
    <>
      {loading && <Flex sx={changeTheme(theme)} direction="column" justify="center" align="center" height="100vh"> {/*put this here to allow loading*/}
        <Spinner size="xl" thickness="4px" color="teal.400" mb={4} /> 
        {/* a new component from chakra  */}
        <Text fontSize="lg" color="gray.500">Loading menu items...</Text>
      </Flex>}
      {!loading && (
        <Box mt='10vh' sx={changeTheme(theme)} minH='100vh'>
          <Container mx='auto' textAlign='center' py={6}>
            <Heading fontSize='5xl'>{title}</Heading> 
            {/* here i just did call the title cause i dont want to show mainCourse like this in the heading */}
          </Container>
          <Flex w='95%' justify='space-between' align='center' mx='auto' py={5}>
            <Text fontSize='30px'>Our Exclusive Menu</Text> 
            <Menu>
              {/* just a menu for switching in between things */}
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {title}
              </MenuButton>
              <MenuList>
                <MenuItem type='button' onClick={() => { setMenuItem('starters'); }}>Starter</MenuItem>
                <MenuItem type='button'  onClick={() => {  setMenuItem('mainCourse'); }}>Main Course</MenuItem>
                <MenuItem type='button'  onClick={() => {  setMenuItem('dessert'); }}>Dessert</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            {displayItems.map((item) => (
              // just created a map to show all the items one by one
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
//just exporting the component
