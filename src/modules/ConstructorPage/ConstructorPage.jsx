import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Row,
  Col,
} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextArea from 'antd/es/input/TextArea';
import { TaskItem } from './Task';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ConstructorPage = () => {
  const [form] = Form.useForm();
  const [testName, setTestName] = useState('');
  const [testNumber, setTestNumber] = useState(0);
  const [additionalText, setAdditionalText] = useState('');
  const [questions, setQuestions] = useState([{ id: 0, points: 0 }]);
  const [is1Checked, setIs1Checked] = useState(false);

  const navigate = useNavigate();

  const totalPoints = questions.reduce(
    (sum, question) => sum + question.points,
    0,
  );

  const removeQuestion = id => {
    setQuestions(prev => prev.filter(question => question.id !== id));
  };

  const updatePoints = (id, newPoints) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, points: newPoints } : q)),
    );
  };

  const API_URL = 'https://stradanie-production-f14d.up.railway.app/api/tests';

  // Функция отправки теста на сервер
  const addTest = async test => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post(API_URL, test);

      // Обработка успешного ответа (например, обновление состояния или уведомление)
      alert('Тест успешно опубликован!');
      navigate('/tasks');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Ошибка при добавлении:', error);
      alert('Ошибка при сохранении теста.');
    }
  };

  // onFinish вызывается только если все поля пройдены валидацию
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = values => {
    if (questions.length === 0) {
      alert('Ви повинні додати хоча б одне питання');

      return;
    }

    // Собираем объект теста, объединяя данные из формы и состояние
    const test = {
      type: 'task',
      id: Date.now(),
      nazwa: testName,
      nomer: testNumber,
      totalPoints,
      progress: 0,
      additional: additionalText,
      questions: questions,
    };

    addTest(test);
  };

  return (
    <Row justify="center" style={{ padding: 10 }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>Створення тесту</h1>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Divider>Загальна інформація про роботу</Divider>
          <Form.Item
            label="Тема роботи:"
            name="Tema"
            labelCol={{ span: 4.6 }}
            rules={[{ required: true, message: 'Будь-ласка введіть тему' }]}
          >
            <Input id="name" onChange={e => setTestName(e.target.value)} />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 3 }}
            label="Номер:"
            name="Nomer"
            rules={[{ required: true, message: 'Будь-ласка, номер роботи' }]}
          >
            <InputNumber onChange={value => setTestNumber(Number(value))} />
          </Form.Item>
          <Form.Item name="checkbox1" valuePropName="checked">
            <Checkbox onChange={e => setIs1Checked(e.target.checked)}>
              Додати коментар для студентів
            </Checkbox>
          </Form.Item>
          {is1Checked && (
            <Form.Item
              label="Введіть текст:"
              name="коментар"
              labelCol={{ span: 5 }}
              rules={[
                {
                  required: true,
                  message: 'Введіть коментар, або приберіть галочку вище!',
                },
                {
                  min: 10,
                  message: 'Коментар не менше 10 символів!',
                },
              ]}
            >
              <TextArea onChange={e => setAdditionalText(e.target.value)} />
            </Form.Item>
          )}
          <Divider>Тепер створюємо питання</Divider>
          {questions.map(question => (
            <TaskItem
              key={question.id}
              id={question.id}
              points={question.points}
              onDelete={() => removeQuestion(question.id)}
              onPointsChange={points => updatePoints(question.id, points)}
              onUpdate={(id, updatedData) => {
                setQuestions(prev =>
                  prev.map(q => (q.id === id ? { ...q, ...updatedData } : q)),
                );
              }}
            />
          ))}
          <Divider />
          <p>Загальна кількість балів: {totalPoints}</p>
          <Space
            style={{
              width: '100%',
              marginTop: 10,
              marginBottom: 10,
            }}
            wrap
            align="center"
            size="middle"
          >
            <Button
              type="dashed"
              style={{
                flex: 1,
                minWidth: 200,
                borderColor: 'green',
              }}
              onClick={() =>
                setQuestions(prev => [...prev, { id: prev.length, points: 0 }])
              }
            >
              Додати питання
            </Button>
            <Button
              disabled={questions.length === 0}
              type="primary"
              htmlType="submit"
              style={{ flex: 1, minWidth: 200 }}
            >
              Створити тест
            </Button>
          </Space>
        </Form>
      </Col>
    </Row>
  );
};
