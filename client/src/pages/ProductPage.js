import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slider,
  Divider,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  FilterList,
  ShoppingCart,
  Sort,
  LocalShipping,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Gold Diamond Ring',
      category: 'Jewelry',
      price: 599.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
      description: 'Elegant 18K gold ring with diamond setting',
    },
    {
      id: 2,
      name: 'Ray-Ban Aviator',
      category: 'Eyewear',
      price: 199.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3',
      description: 'Classic aviator sunglasses',
    },
    {
      id: 3,
      name: 'Nike Air Max',
      category: 'Shoes',
      price: 129.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3',
      description: 'Comfortable and stylish sneakers',
    },
    {
      id: 4,
      name: 'Pearl Necklace',
      category: 'Jewelry',
      price: 299.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3',
      description: 'Elegant freshwater pearl necklace',
    },
    {
      id: 5,
      name: 'Designer Heels',
      category: 'Shoes',
      price: 249.99,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3',
      description: 'Stylish high heels for any occasion',
    },
    {
      id: 6,
      name: 'Reading Glasses',
      category: 'Eyewear',
      price: 89.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3',
      description: 'Comfortable reading glasses',
    },
  ];

  const categories = ['Jewelry', 'Eyewear', 'Shoes'];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleWishlistToggle = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        setSnackbar({ open: true, message: 'Removed from wishlist', severity: 'info' });
        return prev.filter(id => id !== productId);
      } else {
        setSnackbar({ open: true, message: 'Added to wishlist', severity: 'success' });
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product) => {
    setCart(prev => {
      const isInCart = prev.some(item => item.id === product.id);
      if (!isInCart) {
        setSnackbar({ open: true, message: 'Added to cart', severity: 'success' });
        return [...prev, { ...product, quantity: 1 }];
      }
      setSnackbar({ open: true, message: 'Already in cart', severity: 'info' });
      return prev;
    });
  };

  const handleTryAtHome = (product) => {
    // Add to cart and navigate to checkout
    handleAddToCart(product);
    navigate('/checkout', { 
      state: { 
        product,
        mode: 'try-at-home'
      } 
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const filterDrawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>Filters</Typography>
      <Box sx={{ mb: 3 }}>
        <Typography gutterBottom>Categories</Typography>
        <Stack spacing={1}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryToggle(category)}
              color={selectedCategories.includes(category) ? "primary" : "default"}
              variant={selectedCategories.includes(category) ? "filled" : "outlined"}
            />
          ))}
        </Stack>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          step={50}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">${priceRange[0]}</Typography>
          <Typography variant="body2">${priceRange[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">Our Products</Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            startIcon={<FilterList />}
            variant="outlined"
            onClick={() => setFilterDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            Filters
          </Button>
          <IconButton 
            color="primary"
            onClick={() => navigate('/cart')}
            sx={{ position: 'relative' }}
          >
            <ShoppingCart />
            {cart.length > 0 && (
              <Chip
                label={cart.length}
                size="small"
                color="error"
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  height: 20,
                  minWidth: 20,
                  fontSize: '0.75rem'
                }}
              />
            )}
          </IconButton>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
              <MenuItem value="rating">Top Rated</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Filters for desktop */}
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          {filterDrawer}
        </Grid>

        {/* Product grid */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease-in-out',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={product.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({product.rating})
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary" gutterBottom>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        variant="contained" 
                        startIcon={<LocalShipping />}
                        fullWidth
                        onClick={() => handleTryAtHome(product)}
                      >
                        Try at Home
                      </Button>
                      <IconButton 
                        color="primary"
                        onClick={() => handleWishlistToggle(product.id)}
                      >
                        {wishlist.includes(product.id) ? <Favorite /> : <FavoriteBorder />}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile filter drawer */}
      <Drawer
        anchor="left"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      >
        {filterDrawer}
      </Drawer>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={3000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductPage; 