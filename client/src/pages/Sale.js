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

const Sale = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const saleItems = [
    {
      id: 1,
      name: 'Diamond Ring',
      originalPrice: '$499',
      salePrice: '$399',
      discount: '20% OFF',
      image: 'https://i.pinimg.com/736x/61/af/2e/61af2ef8aee54f02796e0608bfd4d085.jpg',
      rating: 4.7,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Designer Watch',
      originalPrice: '$349',
      salePrice: '$279',
      discount: '20% OFF',
      image: 'https://i.pinimg.com/736x/31/97/90/3197903717159a5121ddb431d74d32bf.jpg',
      rating: 4.9,
      reviews: 18,
    },
    {
      id: 3,
      name: 'Leather Shoes',
      originalPrice: '$199',
      salePrice: '$149',
      discount: '25% OFF',
      image: 'https://i.pinimg.com/736x/c9/22/11/c9221105dcf08eb3a23416b73988cdae.jpg',
      rating: 4.6,
      reviews: 32,
    },
    {
      id: 4,
      name: 'Sunglasses',
      originalPrice: '$179',
      salePrice: '$129',
      discount: '28% OFF',
      image: 'https://i.pinimg.com/736x/6c/36/55/6c36559007e9f53ace8b17e8bb0576bb.jpg',
      rating: 4.8,
      reviews: 15,
    },
  ];

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
          Sale
        </Typography>

        <Grid container spacing={4}>
          {saleItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <StyledCard>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <StyledChip label={item.discount} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="h6" color="primary">
                      {item.salePrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {item.originalPrice}
                    </Typography>
                  </Box>
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
      </Container>
    </Box>
  );
};

export default Sale; 