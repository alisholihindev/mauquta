import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

const Slider = ({slider}) => {
  
  return (
      <ImageGallery 
          items={slider} 
          showThumbnails={false} 
          showNav={false}
          showPlayButton={false}
          autoPlay={true}
          showFullscreenButton={false}
          slideInterval={10000}
      />
    ); 
}

export default Slider