import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const JourneyStories = () => {
  const theme = useTheme();
  
  const destinations = [
    {
      image: "/assets/testimony/images/029.jpg",
      alt: "Thailand temple at sunset with light trails"
    },
    {
      image: "/assets/testimony/images/030.jpg",
      alt: "Overwater bungalows in turquoise waters"
    },
    {
      image: "/assets/testimony/images/031.jpg",
      alt: "Traditional long-tail boat in Thailand"
    },
    {
      image: "/assets/testimony/images/032.jpg",
      alt: "Dubai skyline with Burj Khalifa"
    },
    {
      image: "/assets/testimony/images/033.jpg",
      alt: "Sydney Opera House and Harbour Bridge"
    },
    {
      image: "/assets/testimony/images/034.jpg",
      alt: "Mount Bromo volcano in Indonesia"
    }
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        width: '100%',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4, lg: 8 },
        backgroundColor: theme.palette.background.default
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Typography 
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            color: theme.palette.text.special
          }}
        >
          Journey Stories Captured In Travel Diaries
        </Typography>
        
        <Typography 
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            color: theme.palette.text.special
          }}
        >
          Experience the best with our customized tour packages for every need.
        </Typography>

        <Grid container spacing={3}>
          {destinations.map((dest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    bgcolor: theme.palette.background.paper,
                    boxShadow: theme.shadows[1],
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: theme.shadows[4]
                    }
                  }}
                >
                  <img
                    src={dest.image}
                    alt={dest.alt}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              px: 4,
              py: 1.5,
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: theme.palette.button.hoverGradient,
                animation: theme.palette.button.hoverAnimation,
                backgroundSize: '200% 100%'
              }
            }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default JourneyStories;