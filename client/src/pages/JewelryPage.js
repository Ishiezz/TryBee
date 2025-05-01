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

const JewelryPage = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data for jewelry items
  const jewelryItems = [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      price: 1299.99,
      image: 'https://in.pinterest.com/pin/12384967721222698/',
      rating: 4.8,
      reviews: 124,
      category: 'Rings',
      material: 'Gold',
    },
    {
      id: 2,
      name: 'Gold Chain Necklace',
      price: 799.99,
      image: 'https://in.pinterest.com/pin/3518505953273677/',
      rating: 4.6,
      reviews: 89,
      category: 'Necklaces',
      material: 'Gold',
    },
    {
      id: 3,
      name: 'Pearl Earrings',
      price: 499.99,
      image: 'https://in.pinterest.com/pin/1008947122778554153/',
      rating: 4.7,
      reviews: 76,
      category: 'Earrings',
      material: 'Pearl',
    },
    {
      id: 4,
      name: 'Silver Bracelet',
      price: 349.99,
      image: 'https://i.pinimg.com/736x/2f/05/35/2f053549d3d2e85af0e6a265554fcff7.jpg',
      rating: 4.5,
      reviews: 92,
      category: 'Bracelets',
      material: 'Silver',
    },
    {
      id: 5,
      name: 'Ruby Pendant',
      price: 899.99,
      image: 'https://in.pinterest.com/pin/112097478220492248/',
      rating: 4.9,
      reviews: 67,
      category: 'Pendants',
      material: 'Gold',
    },
    {
      id: 6,
      name: 'Sapphire Ring',
      price: 1199.99,
      image: 'https://in.pinterest.com/pin/183873597278269119/',
      rating: 4.7,
      reviews: 58,
      category: 'Rings',
      material: 'Gold',
    },
    {
      id: 7,
      name: 'Emerald Stud Earrings',
      price: 699.99,
      image: 'https://in.pinterest.com/pin/2955555993313080/',
      rating: 4.8,
      reviews: 45,
      category: 'Earrings',
      material: 'Gold',
    },
    {
      id: 8,
      name: 'Diamond Tennis Bracelet',
      price: 2499.99,
      image: 'https://in.pinterest.com/pin/155303888282128911/',
      rating: 4.9,
      reviews: 32,
      category: 'Bracelets',
      material: 'Platinum',
    },
    {
      id: 9,
      name: 'Pearl Strand Necklace',
      price: 899.99,
      image: 'https://in.pinterest.com/pin/293578469479656844/',
      rating: 4.7,
      reviews: 78,
      category: 'Necklaces',
      material: 'Pearl',
    },
    {
      id: 10,
      name: 'Gold Hoop Earrings',
      price: 299.99,
      image: 'https://in.pinterest.com/pin/32932641019789098/',
      rating: 4.6,
      reviews: 112,
      category: 'Earrings',
      material: 'Gold',
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = jewelryItems.filter(item =>
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
        Jewelry Collection
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Discover our exquisite collection of fine jewelry
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search jewelry..."
        />
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {loading ? (
          // Loading skeletons
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
            size="large"
          />
        </Box>
      )}
    </Container>
  );
};

export default JewelryPage;