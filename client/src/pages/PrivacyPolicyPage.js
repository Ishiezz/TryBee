import React from 'react';
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const PrivacyPolicyPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Privacy Policy
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          At Fashion Store, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or make a purchase.
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the site.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect information that you provide directly to us, including:
        </Typography>
        <Typography component="ul" paragraph>
          <li>Personal information (name, email address, phone number)</li>
          <li>Shipping and billing addresses</li>
          <li>Payment information</li>
          <li>Account credentials</li>
          <li>Order history and preferences</li>
        </Typography>
        <Typography variant="body1" paragraph>
          We also automatically collect certain information when you visit our website, such as:
        </Typography>
        <Typography component="ul" paragraph>
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, time spent, links clicked)</li>
          <li>Cookies and similar tracking technologies</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
        </Typography>
        <Typography component="ul" paragraph>
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your orders and account</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Prevent fraud and enhance security</li>
          <li>Comply with legal obligations</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Information Sharing
        </Typography>
        <Typography variant="body1" paragraph>
          We may share your information with:
        </Typography>
        <Typography component="ul" paragraph>
          <li>Service providers who assist in our operations</li>
          <li>Payment processors and shipping carriers</li>
          <li>Law enforcement when required by law</li>
          <li>Third parties in connection with a business transfer</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
        </Typography>
        <Typography component="ul" paragraph>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to processing of your information</li>
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect your personal information. However, no
          method of transmission over the Internet or electronic storage is 100% secure. While we strive
          to use commercially acceptable means to protect your personal information, we cannot guarantee
          its absolute security.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our website is not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13. If you are a parent or guardian and believe that
          your child has provided us with personal information, please contact us.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Changes to This Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this privacy policy from time to time. We will notify you of any changes by
          posting the new privacy policy on this page and updating the "Last updated" date. You are
          advised to review this privacy policy periodically for any changes.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us at:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: privacy@fashionstore.com
          <br />
          Phone: +1 (555) 123-4567
          <br />
          Address: 123 Fashion Street, New York, NY 10001
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicyPage; 