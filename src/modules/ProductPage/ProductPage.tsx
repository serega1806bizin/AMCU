import styles from './ProductPage.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import classNames from 'classnames';
import { Loader } from '../../components/Loader';
import { TestType } from '../../enums/TestType';
import { Task } from '../../types/Task';
import { TaskCard } from '../ProductCard';

import icon from '../../../public/img/icons/arrow-right-icon.svg';

export const ProductPage = () => {
  const location = useLocation();
  const [testType, setTestType] = useState<TestType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Загружаем данные с сервера
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://stradanie-production-f14d.up.railway.app/api/tests')
      .then(res => {
        setTasks(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Ошибка загрузки тестов:', error);
        setIsLoading(false);
      });
  }, []);

  // Определяем тип теста по пути
  useEffect(() => {
    if (location.pathname.includes(TestType.task)) {
      setTestType(TestType.task);
    }
  }, [location.pathname]);

  // Фильтруем задачи по типу и по строке поиска
  const filteredTasks: Task[] = useMemo(() => {
    return tasks.filter(
      task =>
        task.type === testType &&
        task.nazwa.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [tasks, testType, searchTerm]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productPage}>
          <div className={styles.productPage__top}>
            <img
              src={icon}
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
            {`Всього ${filteredTasks.length} робіт`}
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
              <input
                className={styles.productPage__dropDownMenuButton}
                placeholder="Введіть назву роботи"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.productPage__productCards}>
            {filteredTasks.length > 0 ? (
              filteredTasks.map(task => <TaskCard task={task} key={task.id} />)
            ) : (
              <span className={styles.productPage__productCardsError}>
                {`Ви ще не створили тестів`}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};
