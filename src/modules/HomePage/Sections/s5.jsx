import { useState } from 'react';

const images = [
  './s1.png',
  './s3.png',
  './s7.png',
  '/terre.png',
  '/s1.png',
  '/s1.png',
  '/s1.png',
  '/s1.png',
];

export const S5 = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState(images.slice(1));

  const handleClick = (clickedImg, index) => {
    const newThumbs = [...thumbnails];

    newThumbs[index] = mainImage;
    setMainImage(clickedImg);
    setThumbnails(newThumbs);
  };

  return (
    <div id="s5" className="screen">
      <div className="container_res">
        <div
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '4/3',
              overflow: 'hidden',
              marginBottom: '20px',
              borderRadius: '12px',
            }}
          >
            <img
              src={mainImage}
              alt="main"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {thumbnails.map((img, index) => (
              <img
                key={`${img}-${index}`}
                src={img}
                alt={`thumb-${index}`}
                style={{
                  height: 'auto',
                  width: '90px',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  borderRadius: '8px',
                  transition: '0.2s',
                  objectFit: 'contain',
                }}
                onClick={() => handleClick(img, index)}
                onMouseOver={e =>
                  // eslint-disable-next-line no-param-reassign
                  (e.currentTarget.style.border = '2px solid #999')
                }
                onMouseOut={e =>
                  // eslint-disable-next-line no-param-reassign
                  (e.currentTarget.style.border = '2px solid transparent')
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
