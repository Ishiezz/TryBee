import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Add,
  Delete,
  CreditCard,
  AccountBalance,
  Edit
} from '@mui/icons-material';

const PaymentMethodsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDialog, setOpenDialog] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit',
      lastFour: '4242',
      expiry: '12/25',
      isDefault: true,
      cardType: 'Visa'
    },
    {
      id: 2,
      type: 'bank',
      lastFour: '9876',
      bankName: 'Chase',
      isDefault: false
    }
  ]);

  const handleAddPaymentMethod = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeletePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Payment Methods
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleAddPaymentMethod}
        >
          Add Payment Method
        </Button>
      </Box>

      {paymentMethods.length === 0 ? (
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <CreditCard sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No Payment Methods
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Add a payment method to make checkout faster and easier.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleAddPaymentMethod}
          >
            Add Payment Method
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {paymentMethods.map((method) => (
            <Grid item xs={12} key={method.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {method.type === 'credit' ? (
                      <CreditCard sx={{ mr: 1, color: 'primary.main' }} />
                    ) : (
                      <AccountBalance sx={{ mr: 1, color: 'primary.main' }} />
                    )}
                    <Typography variant="h6" component="div">
                      {method.type === 'credit' ? `${method.cardType} ending in ${method.lastFour}` : `${method.bankName} ending in ${method.lastFour}`}
                    </Typography>
                    {method.isDefault && (
                      <Chip
                        label="Default"
                        color="primary"
                        size="small"
                        sx={{ ml: 2 }}
                      />
                    )}
                  </Box>
                  {method.type === 'credit' && (
                    <Typography variant="body2" color="text.secondary">
                      Expires {method.expiry}
                    </Typography>
                  )}
                </CardContent>
                <Divider />
                <CardActions>
                  {!method.isDefault && (
                    <Button
                      size="small"
                      onClick={() => handleSetDefault(method.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ ml: 'auto' }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeletePaymentMethod(method.id)}
                  >
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Card Number"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PaymentMethodsPage; 