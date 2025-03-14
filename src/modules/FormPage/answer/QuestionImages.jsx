import React from 'react';
import { Carousel } from 'antd';

export const QuestionImages = ({ images }) => {
  // Если нет картинок — не рендерим ничего
  if (!images || images.length === 0) {
    return null;
  }

  const contentStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'contain',
  };

  return (
    <Carousel dotsClass="custom-dots" style={{ marginBottom: 20 }}>
      {images.map((url, idx) => (
        <div key={idx}>
          <img src={url} alt={`Slide ${idx + 1}`} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
};
