import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Divider, Chip } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {makeStyles} from '@mui/styles';
import "./ImageCarousel.css"

const useStyles = makeStyles({
  modalContent: {
    maxWidth: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
  },
});

const ImageCarousel = ({ images, open, setOpen}) => {
  const classes = useStyles();


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>Images</DialogTitle>
        <DialogContent className={'carousel-wrapper'}>
          <Carousel showArrows={true} showStatus={true} showThumbs={true} className='carousel-container'>
            {images.map((image, index) => (
              <div key={index} className='carousel-img-container'>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Carousel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageCarousel;
