import React, { useState } from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqCategories = [
  {
    title: 'Ordering & Payment',
    questions: [
      {
        question: 'How do I place an order?',
        answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. You\'ll need to create an account or sign in, provide shipping information, and complete the payment process.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment gateway.',
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'You can modify or cancel your order within 30 minutes of placing it. After that, the order will be processed and cannot be changed. Please contact our customer service for assistance.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 3-5 business days. Express shipping is available for an additional fee and takes 1-2 business days. Delivery times may vary based on your location.',
      },
      {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we ship to most countries worldwide. International shipping times vary by destination and may be subject to customs delays. Additional fees may apply.',
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order is shipped, you\'ll receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.',
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of delivery. Items must be unused, in their original packaging, and with all tags attached. Please contact our customer service to initiate a return.',
      },
      {
        question: 'How do I exchange an item?',
        answer: 'To exchange an item, please contact our customer service within 30 days of delivery. We\'ll guide you through the process and help you select a replacement item.',
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Refunds are typically processed within 5-7 business days after we receive the returned item. The time it takes for the refund to appear in your account depends on your payment method.',
      },
    ],
  },
  {
    title: 'Product Information',
    questions: [
      {
        question: 'How do I know what size to order?',
        answer: 'We provide detailed size charts for each product category. You can find these charts on the product pages. If you\'re unsure, we recommend measuring yourself and comparing with our size guide.',
      },
      {
        question: 'Are your products authentic?',
        answer: 'Yes, all our products are 100% authentic and sourced directly from authorized manufacturers and distributors. We guarantee the authenticity of every item we sell.',
      },
      {
        question: 'Do you offer product warranties?',
        answer: 'Most of our products come with a manufacturer\'s warranty. The warranty period and terms vary by product. Please check the product description for specific warranty information.',
      },
    ],
  },
];

const FAQPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions about our products and services
      </Typography>

      {faqCategories.map((category, categoryIndex) => (
        <Box key={categoryIndex} sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {category.title}
          </Typography>
          {category.questions.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `${categoryIndex}-${index}`}
              onChange={handleChange(`${categoryIndex}-${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${categoryIndex}-${index}-content`}
                id={`panel${categoryIndex}-${index}-header`}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1" paragraph>
          Still have questions? We're here to help!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact our customer service team at support@fashionstore.com or call us at +1 (555) 123-4567
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQPage; 