import React from 'react';
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const TermsAndConditionsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Terms and Conditions
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Fashion Store. These Terms and Conditions govern your use of our website and services.
          By accessing or using our website, you agree to be bound by these Terms and Conditions. If you
          disagree with any part of these terms, you may not access the website.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Account Registration
        </Typography>
        <Typography variant="body1" paragraph>
          To access certain features of the website, you may be required to register for an account. You
          agree to provide accurate, current, and complete information during the registration process
          and to update such information to keep it accurate, current, and complete.
        </Typography>
        <Typography variant="body1" paragraph>
          You are responsible for safeguarding the password that you use to access the website and for
          any activities or actions under your password. You agree not to disclose your password to any
          third party.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Product Information
        </Typography>
        <Typography variant="body1" paragraph>
          We strive to display accurate product information, including descriptions, prices, and
          availability. However, we do not guarantee that all product information is accurate,
          complete, or current. We reserve the right to correct any errors, inaccuracies, or
          omissions and to change or update information at any time without prior notice.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Orders and Payment
        </Typography>
        <Typography variant="body1" paragraph>
          By placing an order through our website, you represent that you are legally capable of
          entering into binding contracts. All orders are subject to acceptance and availability.
          We reserve the right to refuse or cancel any order for any reason at any time.
        </Typography>
        <Typography variant="body1" paragraph>
          Payment must be received before we can process your order. We accept various payment
          methods as indicated on our website. You represent and warrant that you have the legal
          right to use any payment method you provide.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Shipping and Delivery
        </Typography>
        <Typography variant="body1" paragraph>
          We will make reasonable efforts to deliver products within the estimated delivery times
          indicated on our website. However, delivery dates are approximate and not guaranteed.
          We are not responsible for any delays in delivery.
        </Typography>
        <Typography variant="body1" paragraph>
          Risk of loss and title for items purchased pass to you upon delivery of the items to the
          carrier. You are responsible for filing any claims with carriers for damaged and/or lost
          shipments.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Returns and Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          Our return policy is available on our website. Please review it carefully before making
          a purchase. We reserve the right to refuse returns that do not comply with our return
          policy.
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds will be processed according to our refund policy. The time it takes for the
          refund to be credited to your account may vary depending on your payment method and
          financial institution.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          The website and its original content, features, and functionality are owned by Fashion
          Store and are protected by international copyright, trademark, patent, trade secret,
          and other intellectual property laws.
        </Typography>
        <Typography variant="body1" paragraph>
          You may not reproduce, distribute, modify, create derivative works of, publicly display,
          publicly perform, republish, download, store, or transmit any of the material on our
          website without our prior written consent.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          In no event shall Fashion Store, nor its directors, employees, partners, agents,
          suppliers, or affiliates, be liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss of profits,
          data, use, goodwill, or other intangible losses, resulting from your access to or
          use of or inability to access or use the website.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify or replace these Terms and Conditions at any time. If a
          revision is material, we will provide at least 30 days' notice prior to any new terms
          taking effect. What constitutes a material change will be determined at our sole
          discretion.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms and Conditions, please contact us at:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: legal@fashionstore.com
          <br />
          Phone: +1 (555) 123-4567
          <br />
          Address: 123 Fashion Street, New York, NY 10001
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditionsPage; 