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

const ShoesPage = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data for shoe items
  const shoeItems = [
    {
      id: 1,
      name: 'Leather Loafers',
      price: 199.99,
      image: 'https://i.pinimg.com/736x/36/2b/b2/362bb21326205466a21bd67a564dd484.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Loafers',
      material: 'Leather',
    },
    {
      id: 2,
      name: 'Classic Oxford Shoes',
      price: 249.99,
      image: 'https://i.pinimg.com/736x/4f/4d/c4/4f4dc4e4097308caffa811334b0f72b6.jpg',
      rating: 4.8,
      reviews: 92,
      category: 'Oxford',
      material: 'Leather',
    },
    {
      id: 3,
      name: 'Designer Boots',
      price: 299.99,
      image: 'https://i.pinimg.com/736x/73/01/a1/7301a1007bbeca4082dbe61227a6e0d6.jpg',
      rating: 4.9,
      reviews: 78,
      category: 'Boots',
      material: 'Suede',
    },
    {
      id: 4,
      name: 'Running Sneakers',
      price: 129.99,
      image: 'https://i.pinimg.com/736x/22/a7/b3/22a7b3bb26d758dcf3205cb28dcec070.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Sneakers',
      material: 'Mesh',
    },
    {
      id: 5,
      name: 'Casual Slip-ons',
      price: 89.99,
      image: 'https://i.pinimg.com/736x/e6/45/41/e645413bf143eda8c834bf7fddb84b28.jpg',
      rating: 4.5,
      reviews: 167,
      category: 'Slip-ons',
      material: 'Canvas',
    },
    {
      id: 6,
      name: 'High-Top Sneakers',
      price: 159.99,
      image: 'https://i.pinimg.com/736x/bb/90/f2/bb90f2f9f5ee7cc39ac14cfc9b188f46.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Sneakers',
      material: 'Leather',
    },
    {
      id: 7,
      name: 'Formal Derby Shoes',
      price: 279.99,
      image: 'https://i.pinimg.com/736x/23/ef/0a/23ef0a2b9ba61bb3d8a9e9bc6ec35950.jpg',
      rating: 4.8,
      reviews: 98,
      category: 'Derby',
      material: 'Leather',
    },
    {
      id: 8,
      name: 'Hiking Boots',
      price: 189.99,
      image: 'https://i.pinimg.com/736x/08/78/6d/08786dc2d79146a84d204e740de9a00c.jpg',
      rating: 4.9,
      reviews: 145,
      category: 'Boots',
      material: 'Synthetic',
    },
    {
      id: 9,
      name: 'Espadrilles',
      price: 79.99,
      image: 'https://i.pinimg.com/736x/9a/0d/df/9a0ddf6a373d44e28964c5d86edcf7e3.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Espadrilles',
      material: 'Canvas',
    },
    {
      id: 10,
      name: 'Chelsea Boots',
      price: 229.99,
      image: 'https://i.pinimg.com/736x/e3/26/8c/e3268c6cf3d51b267d63ba6659bcae9c.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Boots',
      material: 'Leather',
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = shoeItems.filter(item =>
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
        Shoes Collection
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Step into luxury with our premium footwear
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search shoes..."
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

export default ShoesPage;