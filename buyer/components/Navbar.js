import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Hidden, Button, TextField, Typography, Stack, Box, Container, InputAdornment, IconButton, Avatar } from '@mui/material';
import { Search, ShoppingBag, Home, Category } from '@mui/icons-material';
import { styled } from "@mui/material/styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserProfileButton } from "../../components";

// Algolia
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';


const navigationMap = [
  {
    name: "Home",
    icon: <Home />,
    link: "/home"
  },
  {
    name: "Categories",
    icon: <Category />,
    link: "/categories"
  },
  {
    icon: <ShoppingBag />,
    link: "/cart"
  }
]

const NavbarWrapper = styled(Stack)(
  ({theme}) => `
    padding: ${theme.spacing(5)};
    background: ${theme.palette.glass};
    backdrop-filter: blur(50px);
  `
)

export default function Navbar() {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState(0);

  const handleClick = (routeIndex) => {
    setCurrentRoute(routeIndex);
    navigate(navigationMap[routeIndex].link);
  }

  const searchClient = algoliasearch(
    'CCCKBQ0EDJ',
    '84d8fa23410bd49fe100be9a4a7222f5'
  );

  return <NavbarWrapper direction="row" justifyContent="space-between" alignItems="center">
    <Stack direction="row" alignItems="center" gap={2}>
      <Logo />
      <Box sx={{ml: 3, width: 500}}>
        <TextField label="Search" size="small" fullWidth InputProps={{
          endAdornment: <InputAdornment position="end">

            <InstantSearch indexName = 'new-index-1648398177' searchClient={searchClient}>

              <Search />
              {/* <SearchBox /> exclusive algolia search box jiske bina kaam nai chalega */}
              {/* <Hits/> this comp is use to render the prd data  */}

            </InstantSearch>
             
            
          </InputAdornment>,
        }} 
        sx={{
          boxShadow: theme => theme.shadows.main,
          border: "none"
        }}
        />
      </Box>
    </Stack>
    <Stack direction="row" alignItems="center" gap={1}>
      {
        navigationMap.map((navigationItem, index) => (
          navigationItem.name ?
            <>
              <Hidden mdDown>
                <Button 
                  key={index}
                  variant={currentRoute === index ? "purple-gradient" : "text"} 
                  startIcon={navigationItem.icon}
                  onClick={() => handleClick(index)}
                > 
                    {navigationItem.name} 
                </Button>
              </Hidden>
              <Hidden mdUp>
                <IconButton 
                  key={index}
                  onClick={() => handleClick(index)}
                  sx={{color: theme => (currentRoute === index ? "white" : theme.palette.primary.main)}}
                >
                  { navigationItem.icon }
                </IconButton>
              </Hidden>
            </>
          :
            <IconButton 
              key={index}
              onClick={() => handleClick(index)}
              sx={{color: theme => (currentRoute === index ? "white" : theme.palette.primary.main)}}
            >
              { navigationItem.icon }
            </IconButton>
        ))
      }
      <UserProfileButton />
    </Stack>
  </NavbarWrapper>
}

