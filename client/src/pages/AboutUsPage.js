import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Store,
  LocalShipping,
  Security,
  Group,
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://via.placeholder.com/200',
  },
  {
    name: 'Jane Smith',
    position: 'Creative Director',
    image: 'https://via.placeholder.com/200',
  },
  {
    name: 'Mike Johnson',
    position: 'Head of Operations',
    image: 'https://via.placeholder.com/200',
  },
  {
    name: 'Sarah Williams',
    position: 'Customer Experience Manager',
    image: 'https://via.placeholder.com/200',
  },
];

const features = [
  {
    icon: <Store />,
    title: 'Quality Products',
    description: 'We source the finest materials and work with skilled artisans to create exceptional products.',
  },
  {
    icon: <LocalShipping />,
    title: 'Fast Delivery',
    description: 'We ensure quick and reliable delivery to get your products to you as soon as possible.',
  },
  {
    icon: <Security />,
    title: 'Secure Shopping',
    description: 'Your security is our priority. We use advanced encryption to protect your data.',
  },
  {
    icon: <Group />,
    title: 'Customer Support',
    description: 'Our dedicated team is always ready to help you with any questions or concerns.',
  },
];

const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Your Trusted Fashion Destination
      </Typography>

      {/* Company Story */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2010, our fashion store has grown from a small boutique to a leading online
          destination for quality fashion. We started with a simple mission: to provide our customers
          with stylish, high-quality products at affordable prices.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, we've expanded our product range and improved our services, but our core
          values remain the same. We're committed to offering the best shopping experience, from
          browsing to delivery.
        </Typography>
      </Box>

      {/* Features */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom align="center">
          Why Choose Us
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', fontSize: 40, mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team */}
      <Box>
        <Typography variant="h5" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              To provide our customers with high-quality fashion products that enhance their style
              and confidence, while maintaining sustainable and ethical business practices.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              To become the leading online fashion destination, known for our exceptional products,
              outstanding customer service, and commitment to sustainability.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUsPage; 