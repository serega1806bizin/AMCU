import { useEffect, useState } from 'react';
import { S1 } from './Sections/s1';
import { S2 } from './Sections/s2';
import { S3 } from './Sections/s3';
import { S4 } from './Sections/s4';
import { S5 } from './Sections/s5';
import { S5Mob } from './Sections/s5-mob';
import { S6 } from './Sections/s6';
import { S7 } from './Sections/s7';
import { S8 } from './Sections/s8';
import { S9 } from './Sections/s9';

export const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener('resize', handleResize);

    // При розмонтуванні — чистимо
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      {isDesktop ? <S5 /> : <S5Mob />}
      <S6 />
      <S7 />
      <S8 />
      <S9 background="#f8f8f7" />
    </>
  );
};
