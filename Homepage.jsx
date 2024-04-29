import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { AppBar, Button, Toolbar } from '@mui/material';
import Footer from './Footer';
import Login from './Login';
import { Link } from 'react-router-dom';

// Importing Carousel component from material-ui
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ActionAreaCard() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" style={{ backgroundColor: '#451F55' }}>
        <Toolbar>
          <Button onClick={toggleDrawer(true)} sx={{ mr: 2 }} color="inherit">Menu</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RED STILLETTO RESTAURANT
          </Typography>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
      <ListItem button>
        <ListItemText primary="Burgers" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Pizzas" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Pasta" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Salads" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Sandwiches" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Soups" />
      </ListItem>
    </List>
        </div>
      </Drawer>
      {/* Carousel for slideshow */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} stopOnHover>
        <div>
          <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-7876.jpg" alt="Slide 1" />
          <Typography variant="h4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://b.zmtcdn.com/data/pictures/chains/0/124170/742c01fc96b56557695a68abef843620_featured_v2.jpg" alt="Slide 2" />
          <Typography variant="h4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-7876.jpg" alt="Slide 3" />
          <Typography variant="h4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/029/545/039/small_2x/fast-food-restaurant-menu-burgers-french-fries-coleslaw-chicken-nuggets-and-salads-on-wooden-table-ai-generated-pro-photo.jpg" alt="Slide 4" />
          <Typography variant="h4" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>RED STILLETTO RESTAURANT</Typography>
        </div>
      </Carousel>
      <Footer />
    </div>
  );
}
