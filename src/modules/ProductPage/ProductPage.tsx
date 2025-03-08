/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/indent */
import styles from './ProductPage.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import tasksFromServer from '../../../public/api/Tasks.json';
import classNames from 'classnames';
import { Loader } from '../../components/Loader';
import { TestType } from '../../enums/TestType';
import { Task } from '../../types/Task';
import { TaskCard } from '../ProductCard';

export const ProductPage = () => {
  const location = useLocation();
  const [testType, setTestType] = useState<TestType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.includes(TestType.task)) {
      setTestType(TestType.task);
    }
  }, [location.pathname]);

  const tasks: Task[] = useMemo(() => {
    return tasksFromServer.filter(task => task.type === testType);
  }, [testType]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productPage}>
          <div className={styles.productPage__top}>
            <img
              src="/img/icons/arrow-right-icon.svg"
              alt="arrow-right"
              className={styles.productPage__topArrowIcon}
            />
            <span className={styles.productPage__topText}>
              {testType && testType[0].toUpperCase() + testType.slice(1)}
            </span>
          </div>
          <h1 className={styles.productPage__title}>
            {testType &&
              (testType === TestType.task ? 'Самостійні роботи' : ' ')}
          </h1>
          <span className={styles.productPage__modelsAmount}>
            {`Всього ${tasks.length} робіт`}
          </span>

          <div className={styles.productPage__dropDownMenuContainer}>
            <div
              className={classNames(
                styles.productPage__dropDownMenu,
                styles.productPage__sortMenu,
              )}
            >
              <span className={styles.productPage__dropDownMenuLabel}>
                Пошук по назві
              </span>

              <input className={styles.productPage__dropDownMenuButton}></input>
            </div>
          </div>
          <div className={styles.productPage__productCards}>
            {tasks.length > 0 ? (
              tasks.map(task => <TaskCard task={task} key={task.id} />)
            ) : (
              <span className={styles.productPage__productCardsError}>
                {`There are no ${testType}`}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};
