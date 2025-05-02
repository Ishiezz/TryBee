import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Jewelry',
    image: 'https://i.pinimg.com/736x/34/e0/8b/34e08b2a782d329dd73b8fc3629bd27a.jpg',
    path: '/jewelry',
  },
  {
    id: 2,
    name: 'Eyewear',
    image: 'https://i.pinimg.com/736x/77/ac/e3/77ace3e48ac7255621a50bbf9a5d387c.jpg',
    path: '/eyewear',
  },
  {
    id: 3,
    name: 'Shoes',
    image: 'https://i.pinimg.com/736x/a3/8d/9e/a38d9e5fba55af7bc690b9e46b4290ba.jpg',
    path: '/shoes',
  },
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 6,
          background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Shop by Category
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={category.image}
                alt={category.name}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    textAlign: 'center',
                    mb: 2,
                  }}
                >
                  {category.name}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(category.path)}
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
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
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage; 