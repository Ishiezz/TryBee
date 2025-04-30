import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  ListItemButton,
  Divider,
  TextField,
  Link,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  LocalShipping as LocalShippingIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: alpha(theme.palette.common.white, 0.08),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.12),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  transition: theme.transitions.create('background-color'),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'New Arrivals', path: '/new-arrivals' },
    { text: 'Sale', path: '/sale' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClick = (event) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    navigate('/login');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleTryAtHomeClick = () => {
    navigate('/try-at-home');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              py: 1,
              gap: 2,
              minHeight: { xs: 64, md: 70 },
            }}
          >
            {isMobile && (
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              component="div"
              sx={{ 
                cursor: 'pointer',
                fontWeight: 800,
                letterSpacing: '0.5px',
                background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
              }}
              onClick={() => navigate('/')}
            >
              TryBee
            </Typography>

            {!isMobile && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  ml: 4,
                  gap: 1,
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => navigate(item.path)}
                    sx={{
                      px: 2,
                      py: 1,
                      color: 'text.primary',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: location.pathname === item.path ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 1 }} />

            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </SearchIconWrapper>
              <form onSubmit={handleSearch}>
                <StyledInputBase
                  placeholder="Search products..."
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{ color: 'text.primary' }}
                />
              </form>
            </Search>

            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 0.5, md: 1 }
              }}
            >
              <Tooltip title="Try at Home">
                <IconButton 
                  color="primary"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                  onClick={handleTryAtHomeClick}
                >
                  <LocalShippingIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Wishlist">
                <IconButton 
                  color="primary"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                  onClick={handleWishlistClick}
                >
                  <Badge 
                    badgeContent={wishlistItems.length} 
                    color="error"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#FF6B6B',
                      },
                    }}
                  >
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Cart">
                <IconButton 
                  color="primary"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                  onClick={handleCartClick}
                >
                  <Badge 
                    badgeContent={cartItems.length} 
                    color="error"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#FF6B6B',
                      },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              {user ? (
                <>
                  <Tooltip title="Notifications">
                    <IconButton 
                      color="primary"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        },
                      }}
                      onClick={handleNotificationsClick}
                    >
                      <Badge 
                        badgeContent={0} 
                        color="error"
                        sx={{
                          '& .MuiBadge-badge': {
                            backgroundColor: '#FF6B6B',
                          },
                        }}
                      >
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <IconButton
                    edge="end"
                    onClick={handleProfileMenuOpen}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      ml: 0.5,
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32,
                        bgcolor: 'primary.main',
                        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                      }}
                    >
                      {user.email.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileMenuClose}
                    onClick={handleProfileMenuClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={() => navigate('/profile')}>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <CloseIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate('/login')}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                    boxShadow: '0 2px 8px rgba(255, 107, 107, 0.25)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF5F5F 30%, #FF8347 90%)',
                      boxShadow: '0 4px 12px rgba(255, 107, 107, 0.35)',
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          mt: 'auto',
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}
              >
                TryBee
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Your one-stop destination for trying before buying. Experience the perfect fit.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton color="primary" size="small">
                  <i className="fab fa-facebook"></i>
                </IconButton>
                <IconButton color="primary" size="small">
                  <i className="fab fa-instagram"></i>
                </IconButton>
                <IconButton color="primary" size="small">
                  <i className="fab fa-twitter"></i>
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
              <List dense disablePadding>
                {menuItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton
                      onClick={() => navigate(item.path)}
                      sx={{ py: 0.5 }}
                    >
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{ 
                          variant: 'body2',
                          color: 'text.secondary'
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>Customer Service</Typography>
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemButton sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary="Contact Us"
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary="Shipping Policy"
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary="Returns & Exchanges"
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary="FAQ"
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>Newsletter</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Subscribe to receive updates, access to exclusive deals, and more.
              </Typography>
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  gap: 1
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle newsletter subscription
                }}
              >
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{ flex: 1 }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                    color: 'white',
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} TryBee. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link
                component={Button}
                variant="text"
                color="inherit"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Privacy Policy
              </Link>
              <Link
                component={Button}
                variant="text"
                color="inherit"
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 