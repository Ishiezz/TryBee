import React from 'react';
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
} from '@mui/material';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      name: 'T-Shirts',
      image: '/images/category-tshirts.jpg',
      path: '/categories/tshirts',
      description: 'Explore our collection of premium t-shirts'
    },
    {
      name: 'Jeans',
      image: '/images/category-jeans.jpg',
      path: '/categories/jeans',
      description: 'Find your perfect pair of jeans'
    },
    {
      name: 'Jackets',
      image: '/images/category-jackets.jpg',
      path: '/categories/jackets',
      description: 'Stay warm and stylish with our jackets'
    },
    {
      name: 'Accessories',
      image: '/images/category-accessories.jpg',
      path: '/categories/accessories',
      description: 'Complete your look with our accessories'
    },
    {
      name: 'Shoes',
      image: '/images/category-shoes.jpg',
      path: '/categories/shoes',
      description: 'Step out in style with our footwear collection'
    },
    {
      name: 'Dresses',
      image: '/images/category-dresses.jpg',
      path: '/categories/dresses',
      description: 'Discover elegant dresses for every occasion'
    }
  ];

  return (
    <Box className="categories-page">
      <Typography variant="h2" className="page-title">
        Shop by Category
      </Typography>
      <Typography variant="h5" className="page-subtitle">
        Browse our wide range of products
      </Typography>

      <Grid container spacing={4} className="categories-grid">
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="category-card">
                <CardMedia
                  component="img"
                  height="300"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent className="category-content">
                  <Typography variant="h5" className="category-name">
                    {category.name}
                  </Typography>
                  <Typography variant="body1" className="category-description">
                    {category.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={category.path}
                    variant="contained"
                    className="explore-button"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories; 