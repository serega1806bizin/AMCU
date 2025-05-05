import { useAnimateInView } from '../../../utils/useAnimateInView';
import styles from './S1.module.css';

const content = {
  title: 'Команда WE WORLD',
  text: 'Засновано: 23 Червня 2021 року',
  img: 'https://weworld.org.ua/wp-content/uploads/DSC_2172-scaled.jpeg.webp',
  // eslint-disable-next-line max-len
  desc: '2368 бенефіціарів отримали користь від діяльності організації WE WORLD ',
};

export const S1 = () => {
  const ref1 = useAnimateInView();
  const ref2 = useAnimateInView();

  return (
    <div className={`${styles.ss1} screen`}>
      <div className="container">
        <div className="col-10 col-m col-s">
          <div className={`${styles.grid} can-animate`} ref={ref1}>
            <div className={`${styles.h1_}`}>
              <h1>{content.title}</h1>
            </div>
            <div className={`${styles.hdiv}`}></div>
            <div className={`${styles.info__} ${styles.cnt}`}>
              <p>{content.text}</p>
              <p>{content.desc}</p>
            </div>
          </div>

          <div className="img_ can-animate" ref={ref2}>
            <img src={content.img} alt="" className="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
