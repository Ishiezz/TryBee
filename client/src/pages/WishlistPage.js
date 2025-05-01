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
  IconButton,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
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

const WishlistPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const wishlistItems = [
    {
      id: 1,
      name: 'Diamond Ring',
      price: 299.99,
      image: 'https://i.pinimg.com/736x/bb/38/bf/bb38bfefb7b54981b3f6d09572c5c830.jpg',
      rating: 4.7,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Leather Shoes',
      price: 199.99,
      image: 'https://i.pinimg.com/736x/08/0a/a6/080aa64cc1732b2743ab571783d7d102.jpg',
      rating: 4.6,
      reviews: 32,
    },
    {
      id: 3,
      name: 'Designer Watch',
      price: 349.99,
      image: 'https://i.pinimg.com/736x/eb/5d/61/eb5d61312fe94b34a076b345cb04c928.jpg',
      rating: 4.9,
      reviews: 18,
    },
  ];

  const handleRemoveFromWishlist = (itemId) => {
    // Implement remove from wishlist functionality
    console.log('Remove item:', itemId);
  };

  const handleAddToCart = (itemId) => {
    // Implement add to cart functionality
    console.log('Add to cart:', itemId);
  };

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
          My Wishlist
        </Typography>

        {wishlistItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <FavoriteIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Your wishlist is empty
            </Typography>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF5F5F 30%, #FF8347 90%)',
                },
              }}
            >
              Browse Products
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {wishlistItems.map((item) => (
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
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'white',
                        },
                      }}
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {item.name}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                      ${item.price.toFixed(2)}
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
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => handleAddToCart(item.id)}
                      sx={{
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF5F5F 30%, #FF8347 90%)',
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default WishlistPage; 