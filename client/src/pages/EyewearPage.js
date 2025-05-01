import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  useTheme,
  Chip,
  Skeleton,
  Pagination,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import SearchBar from '../components/SearchBar';

const EyewearPage = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data for eyewear items
  const eyewearItems = [
    {
      id: 1,
      name: 'Designer Sunglasses',
      price: 299.99,
      image: 'https://i.pinimg.com/736x/3a/3a/48/3a3a48088550237f82593d2ebcb40b35.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Sunglasses',
      material: 'Acetate',
    },
    {
      id: 2,
      name: 'Classic Optical Frames',
      price: 199.99,
      image: 'https://i.pinimg.com/736x/59/93/ed/5993ed0cc603e2597f92a6d2ae046b9f.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Optical',
      material: 'Metal',
    },
    {
      id: 3,
      name: 'Aviator Sunglasses',
      price: 249.99,
      image: 'https://i.pinimg.com/736x/85/3e/e3/853ee34a650d4040a4e54e05f6ba3cd9.jpg',
      rating: 4.8,
      reviews: 112,
      category: 'Sunglasses',
      material: 'Metal',
    },
    {
      id: 4,
      name: 'Round Retro Glasses',
      price: 179.99,
      image: 'https://i.pinimg.com/736x/3e/71/09/3e710974c0957f09bbca72a12423ce2a.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Optical',
      material: 'Acetate',
    },
    {
      id: 5,
      name: 'Cat Eye Sunglasses',
      price: 229.99,
      image: 'https://i.pinimg.com/736x/f6/2f/a5/f62fa5e0b2e071eb2b7feed030f12de5.jpg',
      rating: 4.7,
      reviews: 95,
      category: 'Sunglasses',
      material: 'Acetate',
    },
    {
      id: 6,
      name: 'Square Frame Glasses',
      price: 189.99,
      image: 'https://i.pinimg.com/736x/43/f2/ab/43f2aba4bc84ee7b94dfad2c16744bf9.jpg',
      rating: 4.6,
      reviews: 64,
      category: 'Optical',
      material: 'Metal',
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = eyewearItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Eyewear Collection
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Find your perfect pair of designer eyewear
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search eyewear..."
        />
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {loading ? (
          Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" height={300} />
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={20} />
            </Grid>
          ))
        ) : (
          currentItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                component={Link}
                to={`/product/${item.id}`}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  sx={{
                    height: 300,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Chip label={item.category} size="small" color="primary" />
                    <Chip label={item.material} size="small" variant="outlined" />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={item.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({item.reviews})
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {!loading && totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default EyewearPage;