import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  useTheme,
  useMediaQuery,
  Rating,
  Chip,
  Alert
} from '@mui/material';
import {
  Delete,
  ShoppingCart,
  FavoriteBorder,
  LocalShipping,
  CheckCircle,
  Warning
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TryAtHomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tryAtHomeItems')) || [];
    setSelectedItems(items);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter(item => item.id !== itemId);
    setSelectedItems(updatedItems);
    localStorage.setItem('tryAtHomeItems', JSON.stringify(updatedItems));
    setSuccess('Item removed successfully');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      setError('Please add items to try at home');
      return;
    }
    navigate('/checkout');
  };

  const mockProducts = [
    {
      id: 1,
      name: 'Classic Denim Jacket',
      price: 89.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
      category: 'Jackets'
    },
    {
      id: 2,
      name: 'Slim Fit Chinos',
      price: 59.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Pants'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Try at Home
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {success}
        </Alert>
      )}

      <Grid container spacing={4}>
        {/* Selected Items */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Selected Items ({selectedItems.length}/5)
            </Typography>
            {selectedItems.length === 0 ? (
              <Alert severity="info">
                No items selected. Browse our collection to add items to try at home.
              </Alert>
            ) : (
              <List>
                {selectedItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Delete />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src={item.image}
                          sx={{ width: 80, height: 80, mr: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <>
                            <Typography variant="body2" color="text.primary">
                              ${item.price}
                            </Typography>
                            <Chip
                              label={item.category}
                              size="small"
                              sx={{ mt: 1 }}
                            />
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            )}
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Order Summary
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Items Selected" secondary={selectedItems.length} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Try-at-Home Fee"
                  secondary={selectedItems.length > 0 ? '$0.00' : 'Add items to calculate'}
                />
              </ListItem>
              <Divider sx={{ my: 2 }} />
              <ListItem>
                <ListItemText
                  primary="Total"
                  secondary={selectedItems.length > 0 ? '$0.00' : 'Add items to calculate'}
                />
              </ListItem>
            </List>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleCheckout}
              disabled={selectedItems.length === 0}
              sx={{ mt: 2 }}
            >
              Proceed to Checkout
            </Button>
          </Paper>

          {/* Try-at-Home Info */}
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              How Try-at-Home Works
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    <LocalShipping />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Free Shipping"
                  secondary="We'll deliver your selected items for free"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.success.main }}>
                    <CheckCircle />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Try at Home"
                  secondary="Try the items in the comfort of your home"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.warning.main }}>
                    <Warning />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Return Unwanted Items"
                  secondary="Return what you don't want to keep"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TryAtHomePage; 