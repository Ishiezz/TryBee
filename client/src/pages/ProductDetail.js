import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  Divider,
  TextField,
  IconButton,
  Card,
  CardMedia,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: 'Premium T-Shirt',
    price: 29.99,
    description: 'A high-quality t-shirt made from premium cotton. Perfect for everyday wear with a comfortable fit and stylish design.',
    images: [
      '/images/tshirt-1.jpg',
      '/images/tshirt-2.jpg',
      '/images/tshirt-3.jpg',
      '/images/tshirt-4.jpg'
    ],
    category: 'T-Shirts',
    rating: 4.5,
    reviews: 128,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    features: [
      '100% Premium Cotton',
      'Machine Washable',
      'Comfortable Fit',
      'Durable Material'
    ]
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <Box className="product-detail-page">
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box className="product-images">
            <Card className="main-image">
              <CardMedia
                component="img"
                image={product.images[selectedImage]}
                alt={product.name}
              />
            </Card>
            <Box className="thumbnail-container">
              {product.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`thumbnail ${selectedImage === index ? 'selected' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Box className="product-info">
            <Typography variant="h4" className="product-name">
              {product.name}
            </Typography>
            <Box className="product-rating">
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary">
                ({product.reviews} reviews)
              </Typography>
            </Box>
            <Typography variant="h5" className="product-price">
              ${product.price}
            </Typography>
            <Typography variant="body1" className="product-description">
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Size Selection */}
            <Box className="size-selection">
              <Typography variant="h6">Size</Typography>
              <Box className="size-buttons">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outlined"
                    className="size-button"
                  >
                    {size}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Color Selection */}
            <Box className="color-selection">
              <Typography variant="h6">Color</Typography>
              <Box className="color-buttons">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant="outlined"
                    className="color-button"
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </Box>
            </Box>

            {/* Quantity Selection */}
            <Box className="quantity-selection">
              <Typography variant="h6">Quantity</Typography>
              <TextField
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                className="quantity-input"
              />
            </Box>

            {/* Action Buttons */}
            <Box className="action-buttons">
              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                className="add-to-cart-button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <IconButton className="wishlist-button">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton className="share-button">
                <ShareIcon />
              </IconButton>
            </Box>

            {/* Product Features */}
            <Box className="product-features">
              <Typography variant="h6">Features</Typography>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail; 