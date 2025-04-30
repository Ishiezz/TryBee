import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ShoppingBag,
  LocalShipping,
  Security,
  Support,
  Payment,
  HelpOutline,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const HelpPage = () => {
  const theme = useTheme();

  const faqItems = [
    {
      question: 'How does TryBee work?',
      answer: 'TryBee allows you to try fashion items at home before buying. Simply select items, schedule a delivery, try them on, and keep what you love. Return the rest within 7 days.',
      icon: <HelpOutline />,
    },
    {
      question: 'What is the delivery process?',
      answer: 'We offer free delivery and returns. Your items will be delivered within 2-3 business days. You can try them for 7 days and return what you don\'t want to keep.',
      icon: <LocalShipping />,
    },
    {
      question: 'How do I make payments?',
      answer: 'You only pay for the items you decide to keep. We accept all major credit cards, debit cards, and digital payment methods. Your card will be charged only after you confirm your purchase.',
      icon: <Payment />,
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we use industry-standard encryption to protect your personal and payment information. Your data is never shared with third parties without your consent.',
      icon: <Security />,
    },
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <Support />,
    },
    {
      title: 'Email Support',
      description: 'Send us an email and we\'ll get back to you within 24 hours',
      icon: <Support />,
    },
    {
      title: 'Phone Support',
      description: 'Call us during business hours for immediate assistance',
      icon: <Support />,
    },
  ];

  return (
    <Box sx={{ pt: 8, pb: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            borderRadius: 2,
            p: 6,
            color: 'white',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            How Can We Help You?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Find answers to your questions or get in touch with our support team
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              bgcolor: 'white',
              color: theme.palette.primary.main,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Contact Support
          </Button>
        </Box>

        {/* FAQ Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          {faqItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Accordion
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {item.icon}
                    <Typography variant="h6">{item.question}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>

        {/* Support Options */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 8, mb: 4 }}>
          Support Options
        </Typography>
        <Grid container spacing={4}>
          {supportOptions.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    {option.icon}
                    <Typography variant="h6">{option.title}</Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {option.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Still Need Help?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Our customer support team is available 24/7 to assist you with any questions or concerns.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HelpPage; 