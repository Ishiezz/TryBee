import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: '#FF6B6B',
  color: 'white',
  fontWeight: 'bold',
}));

const NewArrivals = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const jewelryItems = [
    {
      id: 1,
      name: 'Diamond Pendant',
      price: '$299',
      image: 'https://i.pinimg.com/736x/76/fd/7b/76fd7b4a64f648d4da5cecb60289a543.jpg',
      rating: 4.5,
      reviews: 12,
      isNew: true,
    },
    // Add more jewelry items
  ];

  const shoesItems = [
    {
      id: 1,
      name: 'Leather Boots',
      price: '$249',
      image: 'https://i.pinimg.com/736x/da/f1/9d/daf19d72cbc2c0cbc3fbd8fec08572f3.jpg',
      rating: 4.8,
      reviews: 8,
      isNew: true,
    },
    // Add more shoes items
  ];

  const eyewearItems = [
    {
      id: 1,
      name: 'Designer Sunglasses',
      price: '$199',
      image: 'https://i.pinimg.com/736x/96/4d/dd/964ddd19b8e62ab2ec427240040b8a82.jpg',
      rating: 4.7,
      reviews: 15,
      isNew: true,
    },
    // Add more eyewear items
  ];

  const renderItems = (items) => (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <StyledCard>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              {item.isNew && (
                <StyledChip label="NEW" />
              )}
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                {item.price}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={item.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({item.reviews})
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                component={Link}
                to={`/products/${item.id}`}
                sx={{
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF5F5F 30%, #FF8347 90%)',
                  },
                }}
              >
                View Details
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{
            mb: 6,
            background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
          }}
        >
          New Arrivals
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
              },
            }}
          >
            <Tab 
              label="Jewelry" 
              sx={{
                '&.Mui-selected': {
                  color: '#FF6B6B',
                },
              }}
            />
            <Tab 
              label="Shoes" 
              sx={{
                '&.Mui-selected': {
                  color: '#FF6B6B',
                },
              }}
            />
            <Tab 
              label="Eyewear" 
              sx={{
                '&.Mui-selected': {
                  color: '#FF6B6B',
                },
              }}
            />
          </Tabs>
        </Box>

        <Box sx={{ mt: 4 }}>
          {activeTab === 0 && renderItems(jewelryItems)}
          {activeTab === 1 && renderItems(shoesItems)}
          {activeTab === 2 && renderItems(eyewearItems)}
        </Box>
      </Container>
    </Box>
  );
};

export default NewArrivals; 