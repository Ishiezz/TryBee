import React, { useState } from 'react';
import { Box } from '@mui/material';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  // Default placeholder image (data URI of a simple gray rectangle)
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f0f0'/%3E%3C/svg%3E";

  const handleError = () => {
    setError(true);
  };

  return (
    <Box
      component="img"
      src={error ? placeholderImage : src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback; 