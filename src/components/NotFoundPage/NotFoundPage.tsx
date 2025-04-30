import styles from './NotFoundPage.module.scss';
import img from './Group 1251.svg';

export const NotFoundPage = () => (
  <div className={styles.notFound}>
    <img src={img} alt="page not found" className={styles.notFound__image} />
  </div>
);
