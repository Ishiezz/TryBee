import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Alert,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const steps = ['Select Items', 'Shipping Details', 'Review & Confirm'];

const TryNowPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: user?.address || '',
    city: '',
    state: '',
    zipCode: '',
    phone: user?.phone || '',
  });
  const [error, setError] = useState('');

  // Mock data for available items
  const availableItems = [
    {
      id: 1,
      name: 'Classic Diamond Ring',
      category: 'Jewelry',
      image: '/images/products/ring-1.jpg',
      price: 1299.99,
    },
    {
      id: 2,
      name: 'Designer Sunglasses',
      category: 'Eyewear',
      image: '/images/products/sunglasses-1.jpg',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Leather Loafers',
      category: 'Shoes',
      image: '/images/products/shoes-1.jpg',
      price: 199.99,
    },
    // Add more items as needed
  ];

  const handleItemSelect = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setError('You can select up to 5 items for try-at-home');
    }
  };

  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (activeStep === 0 && selectedItems.length === 0) {
      setError('Please select at least one item');
      return;
    }
    if (activeStep === 1) {
      // Validate shipping details
      const requiredFields = ['firstName', 'lastName', 'address', 'city', 'state', 'zipCode', 'phone'];
      const missingFields = requiredFields.filter(field => !shippingDetails[field]);
      if (missingFields.length > 0) {
        setError('Please fill in all required fields');
        return;
      }
    }
    setError('');
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Here you would typically submit the order to your backend
    console.log('Submitting try-at-home order:', {
      items: selectedItems,
      shipping: shippingDetails,
    });
    // Navigate to confirmation page or show success message
    navigate('/profile');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={4}>
            {availableItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      {item.category}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant={selectedItems.find(i => i.id === item.id) ? "contained" : "outlined"}
                      onClick={() => handleItemSelect(item)}
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      {selectedItems.find(i => i.id === item.id) ? "Selected" : "Select for Try-On"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={shippingDetails.firstName}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={shippingDetails.lastName}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingDetailsChange}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="City"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="State"
                name="state"
                value={shippingDetails.state}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                fullWidth
                label="ZIP Code"
                name="zipCode"
                value={shippingDetails.zipCode}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleShippingDetailsChange}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Selected Items:
              </Typography>
              {selectedItems.map((item) => (
                <Box key={item.id} sx={{ mb: 2 }}>
                  <Typography>
                    {item.name} - ${item.price.toFixed(2)}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Shipping Details:
              </Typography>
              <Typography>
                {shippingDetails.firstName} {shippingDetails.lastName}
              </Typography>
              <Typography>{shippingDetails.address}</Typography>
              <Typography>
                {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}
              </Typography>
              <Typography>{shippingDetails.phone}</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required />}
                label="I agree to return all items within 7 days"
              />
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Try Before You Buy
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Select up to 5 items to try at home for 7 days
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {renderStepContent(activeStep)}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
        >
          {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
        </Button>
      </Box>
    </Container>
  );
};

export default TryNowPage; 