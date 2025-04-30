import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Tabs,
  Tab,
  TextField,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, New York, NY 10001',
    avatar: 'https://i.pravatar.cc/300',
  };

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      status: 'Delivered',
      total: '$299.99',
      items: ['Diamond Ring', 'Leather Shoes'],
    },
    {
      id: 'ORD-002',
      date: '2024-03-10',
      status: 'Processing',
      total: '$199.99',
      items: ['Designer Watch'],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={userInfo.avatar}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                />
                <Typography variant="h5" component="h1" gutterBottom>
                  {userInfo.name}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => setIsEditing(!isEditing)}
                  sx={{ mt: 1 }}
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </Box>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={userInfo.email}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary={userInfo.phone}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Address"
                    secondary={userInfo.address}
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
                  icon={<ShoppingBagIcon />} 
                  label="Orders"
                  sx={{
                    '&.Mui-selected': {
                      color: '#FF6B6B',
                    },
                  }}
                />
                <Tab 
                  icon={<SettingsIcon />} 
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
                                {order.total}
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
                                Items: {order.items.join(', ')}
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
                <Box component="form" sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        defaultValue={userInfo.name}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        defaultValue={userInfo.email}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone"
                        defaultValue={userInfo.phone}
                        disabled={!isEditing}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        defaultValue={userInfo.address}
                        disabled={!isEditing}
                        multiline
                        rows={3}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile; 