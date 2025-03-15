/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Table,
  Space,
  Input,
  Flex,
  Button,
  Modal,
  Tooltip,
  Row,
  Col,
} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AudioOutlined, CopyOutlined } from '@ant-design/icons';
import { handleBackButton } from '../../utils/handleBackButton';
import styles from './DetailsTask.module.scss';

const { Search } = Input;

export const DetailsTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [test, setTest] = useState(null);
  const [studentWorks, setStudentWorks] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState(''); // Текущее значение поиска
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Открытие окна
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Подтверждение удаления
  const handleOk = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    onDelete(taskId); // Вызываем функцию удаления
    setIsModalVisible(false);
    navigate('/task'); // Переходим на главную страницу
  };

  // Отмена удаления
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetch(
      `https://stradanie-production-f14d.up.railway.app/api/tests/${taskId}`,
    )
      .then(res => res.json())
      .then(data => {
        setTest(data);
      })
      .catch(error => console.error('Ошибка загрузки теста:', error));
  }, [taskId]);

  const formatDate = isoString => {
    if (!isoString) {
      return '';
    }

    const date = new Date(isoString);

    return `${String(date.getUTCDate()).padStart(2, '0')}.${String(date.getUTCMonth() + 1).padStart(2, '0')}.${date.getUTCFullYear()} ${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
  };

  useEffect(() => {
    fetch(
      `https://stradanie-production-f14d.up.railway.app/api/answers/${taskId}`,
    )
      .then(res => res.json())
      .then(data => {
        const formattedData = data.map(item => ({
          ...item,
          date: formatDate(item.dueTime),
        }));

        setStudentWorks(formattedData);
        setFilteredData(formattedData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки ответов:', error);
        setIsLoading(false);
      });
  }, [test]);

  const onDelete = testId1 => {
    fetch(
      `https://stradanie-production-f14d.up.railway.app/api/tests/${testId1}`,
      {
        method: 'DELETE',
      },
    )
      .then(res => res.json())
      .then(() => {
        console.log(`Тест ${testId1} видалено`);
        window.location.reload();
      })
      .catch(error => console.error('Помилка видалення тесту:', error));
  };

  const columns = [
    {
      title: 'Студент',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Група',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Оцінка',
      dataIndex: 'mark',
      key: 'mark',
    },
    {
      title: 'Дія',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => console.log('Переглянути', record)}>Переглянути</a>
        </Space>
      ),
    },
  ];

  // 🔹 Фильтрация студентов по введенному тексту
  const onSearch = value => {
    setSearchValue(value);
    if (!value) {
      setFilteredData(studentWorks); // Если пусто - сбросить фильтр

      return;
    }

    const filtered = studentWorks.filter(student =>
      student.student.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredData(filtered);
  };

  // 🔹 Голосовой поиск (распознавание речи)
  const startVoiceRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Ваш браузер не піддтримуває голосовий ввід!');

      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = 'uk-UA'; // Устанавливаем украинский язык
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript.trim();

      console.log(`🎙 Распознанный текст: ${transcript}`);
      setSearchValue(transcript); // Устанавливаем распознанный текст в поле ввода
      onSearch(transcript); // Выполняем поиск по голосу
    };

    recognition.onerror = event => {
      console.error('Ошибка распознавания:', event.error);
    };

    recognition.start();
  };

  const url = `https://serega1806bizin.github.io/kursova-robota/#/test/${taskId}`;

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      message.success('Ссылка скопирована!');
    } catch (error) {
      message.error('Ошибка при копировании');
    }
  };

  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <div className={styles.productDetails}>
          <section className={styles.productDetails__top}>
            <div className={styles.productDetails__breadcrumbs}>
              <Link
                to={`/${test?.type}`}
                className={styles.productDetails__breadcrumbsHomeIcon}
              />
              <div className={styles.productDetails__breadcrumbsArrowIcon} />
              <Link
                to={`/${test?.type}`}
                className={styles.productDetails__breadcrumbsCategory}
              >
                Всі роботи
              </Link>
              <div className={styles.productDetails__breadcrumbsArrowIcon} />
              <span className={styles.productDetails__breadcrumbsName}>
                {test?.nazwa}
              </span>
            </div>
            <div className={styles.productDetails__back}>
              <button
                className={styles.productDetails__backArrow}
                onClick={handleBackButton}
              />
              <button
                className={styles.productDetails__backText}
                onClick={handleBackButton}
              >
                Назад
              </button>
            </div>
            <h2 className={styles.productDetails__title}>{test?.name}</h2>
          </section>
          {/* Поле поиска с голосовым вводом */}
          <div style={{ padding: '20px' }}>
            <p>Покликання на тест:</p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Link to={`/test/${taskId}`}>{url}</Link>
              <Tooltip title="Скопіювати">
                <CopyOutlined
                  onClick={copyUrl}
                  style={{ marginLeft: 8, cursor: 'pointer' }}
                />
              </Tooltip>
            </div>

            <Flex
              wrap
              gap="small"
              justify="center"
              style={{ marginBottom: '16px' }}
            >
              <Button type="primary" danger onClick={showModal}>
                Видалити цей тест
              </Button>
              <Button style={{ backgroundColor: 'yellow' }}>
                Відкоригувати цей тест
              </Button>
              <Modal
                title="Підтвердження видалення"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Видалити"
                cancelText="Скасувати"
                okButtonProps={{ danger: true }}
              >
                <p>Ви точно бажаєте видалити цей тест?</p>
                <p>
                  <strong>Його не можливо буде відновити!</strong>
                </p>
              </Modal>
            </Flex>
            <div style={{ marginBottom: '16px' }}>
              <Search
                value={searchValue} // Теперь можно редактировать поле вручную
                placeholder="Пошук студента по імені"
                enterButton="Пошук"
                size="large"
                suffix={
                  <AudioOutlined
                    style={{
                      fontSize: 16,
                      color: '#1677ff',
                      cursor: 'pointer',
                    }}
                    onClick={startVoiceRecognition} // Клик по микрофону активирует голосовой поиск
                  />
                }
                onChange={e => onSearch(e.target.value)} // Теперь можно вводить вручную
                onSearch={onSearch}
              />
            </div>

            {/* Таблица */}
            <Table
              columns={columns}
              dataSource={filteredData}
              scroll={{ x: 'max-content' }}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
