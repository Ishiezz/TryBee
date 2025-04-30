import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  ListItemAvatar,
  Snackbar,
  ListItemSecondaryAction
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  LocationOn,
  Edit,
  ShoppingBag,
  Favorite,
  History,
  Security,
  Notifications,
  Payment,
  Delete,
  Save,
  Close,
  Settings
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { user, updateUserProfile, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    // Fetch user orders and wishlist
    fetchUserData();
  }, [user, navigate]);

  const fetchUserData = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockOrders = [
        {
          id: 1,
          date: '2024-03-15',
          total: 299.99,
          status: 'Delivered',
          items: [
            {
              id: 1,
              name: 'Diamond Necklace',
              price: 299.99,
              image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            },
          ],
        },
      ];

      const mockWishlist = [
        {
          id: 2,
          name: 'Designer Sunglasses',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          rating: 4.5,
        },
      ];

      setOrders(mockOrders);
      setWishlist(mockWishlist);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEditClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setIsEditDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      setIsEditDialogOpen(false);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  if (!user) {
    return null;
  }

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
          My Profile
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={user?.avatar || 'https://i.pravatar.cc/300'}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                />
                <Typography variant="h5" component="h2" gutterBottom>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<Edit />}
                  onClick={handleEditClick}
                  sx={{ mt: 1 }}
                >
                  Edit Profile
                </Button>
              </Box>

              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Name"
                    secondary={
                      <TextField
                        fullWidth
                        name="name"
                        value={`${user?.firstName} ${user?.lastName}`}
                        onChange={handleInputChange}
                      />
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary={
                      <TextField
                        fullWidth
                        name="email"
                        value={user?.email}
                        onChange={handleInputChange}
                      />
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phone"
                    secondary={
                      <TextField
                        fullWidth
                        name="phone"
                        value={user?.phone || 'Not provided'}
                        onChange={handleInputChange}
                      />
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOn />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Address"
                    secondary={
                      <TextField
                        fullWidth
                        name="address"
                        value={user?.address || 'Not provided'}
                        onChange={handleInputChange}
                        multiline
                        rows={2}
                      />
                    }
                  />
                </ListItem>
              </List>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={8}>
            <StyledPaper>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  mb: 3,
                  '& .MuiTabs-indicator': {
                    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                  },
                }}
              >
                <Tab
                  icon={<ShoppingBag />}
                  label="Orders"
                  sx={{
                    '&.Mui-selected': {
                      color: '#FF6B6B',
                    },
                  }}
                />
                <Tab
                  icon={<Settings />}
                  label="Settings"
                  sx={{
                    '&.Mui-selected': {
                      color: '#FF6B6B',
                    },
                  }}
                />
              </Tabs>

              {activeTab === 0 && (
                <List>
                  {orders.map((order) => (
                    <React.Fragment key={order.id}>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="subtitle1">
                                Order #{order.id}
                              </Typography>
                              <Typography variant="subtitle1" color="primary">
                                ${order.total}
                              </Typography>
                            </Box>
                          }
                          secondary={
                            <>
                              <Typography variant="body2" color="text.secondary">
                                Date: {order.date}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Status: {order.status}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Items: {order.items.map(item => item.name).join(', ')}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              )}

              {activeTab === 1 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Account Settings
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Password"
                        secondary="Change your password"
                      />
                      <Button variant="outlined">Change</Button>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Notifications"
                        secondary="Manage your notification preferences"
                      />
                      <Button variant="outlined">Manage</Button>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Privacy"
                        secondary="Manage your privacy settings"
                      />
                      <Button variant="outlined">Manage</Button>
                    </ListItem>
                  </List>
                </Box>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleEditClose} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfilePage; 