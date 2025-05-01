import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  TextField,
  IconButton,
  Rating,
  Divider,
  Fade,
  Grow,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const categories = [
    {
      name: 'Jewelry',
      image: 'https://i.pinimg.com/736x/41/37/78/4137780ccd0ce60dec33a7af21b37142.jpg',
      path: '/jewelry',
    },
    {
      name: 'Eyewear',
      image: 'https://i.pinimg.com/736x/d1/6b/b5/d16bb5a450f0d7563c97ac26ccb119c2.jpg',
      path: '/eyewear',
    },
    {
      name: 'Shoes',
      image: 'https://i.pinimg.com/736x/2e/55/ac/2e55ac40ecc28e0a1e8adfdf5a705654.jpg',
      path: '/shoes',
    },
  ];

  const featuredProducts = [
    {
      name: 'Diamond Necklace',
      price: '$299',
      image: 'https://i.pinimg.com/736x/02/7b/28/027b288d313c6363c1ca14b8c6f96ee2.jpg',
      category: 'Jewelry',
    },
    {
      name: 'Designer Sunglasses',
      price: '$199',
      image: 'https://i.pinimg.com/736x/6d/06/d1/6d06d1b0c8c947e92354b4b739fb414e.jpg',
      category: 'Eyewear',
    },
    {
      name: 'Leather Boots',
      price: '$249',
      image: 'https://i.pinimg.com/736x/64/44/1e/64441ec97497777ce0354164620484d7.jpg',
      category: 'Shoes',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'I love being able to try on jewelry before buying. It takes the stress out of online shopping!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      text: 'The try-before-you-buy feature is a game-changer. I finally found the perfect sunglasses!',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      text: 'Such a convenient service. The shoes fit perfectly and the process was seamless.',
      rating: 4,
    },
  ];

  const steps = [
    {
      title: 'Choose Your Items',
      description: 'Browse our collection and select items you want to try',
      icon: '1',
    },
    {
      title: 'Try at Home',
      description: 'We deliver your selected items to your doorstep',
      icon: '2',
    },
    {
      title: 'Keep What You Love',
      description: 'Only pay for what you decide to keep',
      icon: '3',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section with Gradient Background */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 60%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 5, pb: 15, position: 'relative' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      mb: 3,
                      color: 'text.primary',
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Try before you buy
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    Experience the perfect fit and style before making a purchase. No commitment, no hassle.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/new-arrivals"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        minWidth: 200,
                        fontSize: '1.2rem',
                        py: 1.5,
                        borderRadius: '12px',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
                          boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
                        },
                      }}
                    >
                      Try Now
                    </Button>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/categories"
                      size="large"
                      sx={{
                        minWidth: 200,
                        fontSize: '1.2rem',
                        py: 1.5,
                        borderRadius: '12px',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Browse Categories
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1500}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      borderRadius: '24px',
                      zIndex: 0,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="https://i.pinimg.com/736x/33/b1/eb/33b1eba12af9df6f71e1ba79ab583fcd.jpg"
                    alt="Stylish woman trying on clothes"
                    sx={{
                      width: '70%',
                      height: 'auto',
                      borderRadius: '24px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 1,
                      transform: 'translate(20px, -20px)',
                      margin: '0 auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={4} key={step.title}>
                <Grow in timeout={1000 + index * 500}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: '24px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                      }}
                    >
                      {index === 0 && <FavoriteIcon sx={{ fontSize: 40, color: 'white' }} />}
                      {index === 1 && <LocalShippingIcon sx={{ fontSize: 40, color: 'white' }} />}
                      {index === 2 && <CheckCircleIcon sx={{ fontSize: 40, color: 'white' }} />}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                      {step.description}
                    </Typography>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            fontSize: { xs: '2rem', md: '3rem' },
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={category.name}>
              <Grow in timeout={1000 + index * 500}>
                <Card
                  component={Link}
                  to={category.path}
                  sx={{
                    height: '400px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    position: 'relative',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.name}
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 4,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: 'white',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Box>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {featuredProducts.map((product, index) => (
              <Grid item xs={12} md={4} key={product.name}>
                <Grow in timeout={1000 + index * 500}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{ height: 300 }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                        {product.name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 1 }}>
                        {product.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                        }}
                      >
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            fontSize: { xs: '2rem', md: '3rem' },
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.name}>
              <Grow in timeout={1000 + index * 500}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{
                      mb: 2,
                      '& .MuiRating-iconFilled': {
                        color: 'primary.main',
                      },
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', color: 'primary.main' }}
                  >
                    {testimonial.name}
                  </Typography>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
          },
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 'bold',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    Stay Updated
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: '1.1rem',
                      opacity: 0.9,
                    }}
                  >
                    Subscribe to our newsletter for exclusive offers and updates.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1500}>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    variant="outlined"
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '12px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      borderRadius: '12px',
                      px: 3,
                      '&:hover': {
                        bgcolor: 'grey.100',
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;