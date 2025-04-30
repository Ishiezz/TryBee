import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import './Products.css';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Accessories',
    'Shoes',
    'Dresses'
  ];

  const products = [
    {
      id: 1,
      name: 'Premium T-Shirt',
      price: 29.99,
      image: '/images/tshirt.jpg',
      category: 'T-Shirts',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Classic Jeans',
      price: 49.99,
      image: '/images/jeans.jpg',
      category: 'Jeans',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Stylish Jacket',
      price: 79.99,
      image: '/images/jacket.jpg',
      category: 'Jackets',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Designer Watch',
      price: 199.99,
      image: '/images/watch.jpg',
      category: 'Accessories',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Sneakers',
      price: 89.99,
      image: '/images/sneakers.jpg',
      category: 'Shoes',
      rating: 4.3
    },
    {
      id: 6,
      name: 'Summer Dress',
      price: 59.99,
      image: '/images/dress.jpg',
      category: 'Dresses',
      rating: 4.6
    }
  ];

  const handleCategoryChange = (category) => {
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
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
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

  return (
    <Box className="products-page">
      <Box className="products-header">
        <Typography variant="h2" className="page-title">
          Our Products
        </Typography>
        <Box className="search-sort-container">
          <TextField
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FormControl className="sort-select">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className="products-container">
        <Box className="filters-sidebar">
          <Typography variant="h6" className="filter-title">
            Categories
          </Typography>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>

          <Typography variant="h6" className="filter-title">
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={10}
            className="price-slider"
          />
          <Box className="price-range">
            <Typography>${priceRange[0]}</Typography>
            <Typography>${priceRange[1]}</Typography>
          </Box>
        </Box>

        <Grid container spacing={4} className="products-grid">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="product-card">
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      {product.category}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    <Box className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        >
                          ★
                        </span>
                      ))}
                      <Typography variant="body2" color="text.secondary">
                        ({product.rating})
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      to={`/products/${product.id}`}
                      variant="contained"
                      fullWidth
                      className="view-details-button"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products; 