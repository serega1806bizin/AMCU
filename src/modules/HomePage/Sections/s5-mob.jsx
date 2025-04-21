import { Carousel } from 'antd';

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

const contentStyle = {
  width: '100%',
  height: '450px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

export const S5Mob = () => {
  return (
    <div id="s5" className="screen">
      <Carousel autoplay autoplaySpeed={5000}>
        {images.map((src, index) => (
          <div key={index}>
            <div style={contentStyle}>
              <img
                src={src}
                alt={`slide-${index}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
