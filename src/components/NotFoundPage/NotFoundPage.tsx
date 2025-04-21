import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={styles.notFound}>
    <h1>Такої сторінки не існує</h1>
    <img
      src="./img/page-not-found.png"
      alt="page not found"
      className={styles.notFound__image}
    />
  </div>
);
