import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Button, Col, Descriptions, Form, Input, Row, message } from 'antd';
import { NotFoundPage } from '../../components/NotFoundPage';

// Импортируем ваши компоненты вопросов
import { Text_q } from './answer/text-q';
import { Num_q } from './answer/num-q';
import { List_num } from './answer/list-num';
import { Matrix_q } from './answer/matrix-q';
import { List_pars } from './answer/list-pars';
import { List_reber } from './answer/list-reber';
import { Variant_Q } from './answer/variants-q';

export const FormPage = () => {
  const [form] = Form.useForm();
  const { testId } = useParams();

  const [test, setTest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Сохраняем ответы и данные формы в локальном состоянии
  const [formData, setFormData] = useState({
    studentName: '',
    group: '',
    answers: {},
  });

  // Загрузка данных теста с сервера
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://stradanie-production-f14d.up.railway.app/api/tests/${testId}`,
    )
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка загрузки теста');
        }

        return res.json();
      })
      .then(data => {
        setTest(data);
        setIsLoading(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Ошибка загрузки теста:', error);
        setIsLoading(false);
      });
  }, [testId]);

  // Функция обновления ответа на конкретный вопрос
  const updateAnswer = (questionId, answer) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  // Функция рендера нужного типа вопроса
  const renderQuestion = (question, index1) => {
    switch (question.type) {
      case 'text':
        return (
          <Text_q
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'number':
        return (
          <Num_q
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'list-num':
        return (
          <List_num
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'matrix':
        return (
          <Matrix_q
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'variants':
        return (
          <Variant_Q
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'list-pars':
        return (
          <List_pars
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      case 'list-reber':
        return (
          <List_reber
            index1={index1}
            question={question}
            onChange={answer => updateAnswer(question.id, answer)}
          />
        );
      default:
        return null;
    }
  };

  // Основная функция отправки формы (Ant Design вызывает её при onFinish)
  const onFinish = () => {
    if (!test) {
      return;
    }

    // Формируем объект для отправки
    const submissionData = {
      'id-test': test.id,
      'id-answer': Date.now(),
      student: formData.studentName,
      group: formData.group,
      dueTime: new Date().toISOString(),
      answers: Object.entries(formData.answers).map(([questionId, answer]) => ({
        'question-id': questionId,
        answer,
      })),
    };

    setIsSubmitting(true);

    fetch('https://stradanie-production-f14d.up.railway.app/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissionData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка отправки данных');
        }

        return response.json();
      })
      .then(data => {
        // eslint-disable-next-line no-console
        console.log('Прогресс обновлён и данные сохранены:', data);
        message.success('Відповідь успішно відправлено!');
        window.close(); // Если нужно сразу закрыть окно
        form.resetFields();
        // Сброс локального состояния:
        setFormData({
          studentName: '',
          group: '',
          answers: {},
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Ошибка отправки:', error);
        message.error('Произошла ошибка при отправке!');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Обработка ошибок валидации полей Ant Design
  const onFinishFailed = errorInfo => {
    if (errorInfo.errorFields?.length) {
      const firstErrorField = errorInfo.errorFields[0].name;

      form.scrollToField(firstErrorField, {
        behavior: 'smooth',
        block: 'center',
      });
      setTimeout(() => {
        const fieldInstance = form.getFieldInstance(firstErrorField);

        if (fieldInstance?.focus) {
          fieldInstance.focus();
        }
      }, 600);
    }

    message.error('Будь ласка, виправте помилки у формі!');
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!test) {
    return <NotFoundPage />;
  }

  return (
    <Row justify="center" style={{ padding: 10 }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1>Самостійна робота №{test.nomer}</h1>

        <Descriptions
          style={{ marginBottom: 10 }}
          title="Корисна інформація"
          bordered
          column={1}
        >
          <Descriptions.Item label="Тема роботи">
            {test.nazwa}
          </Descriptions.Item>
          {test.additional && (
            <Descriptions.Item label="Коментар">
              {test.additional}
            </Descriptions.Item>
          )}
        </Descriptions>

        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          scrollToFirstError
        >
          <Form.Item
            labelCol={{ span: 9 }}
            label="Ваше прізвище та ім'я"
            name="name"
            rules={[
              { required: true, message: 'Будь ласка, введіть ваше ПІБ' },
            ]}
          >
            <Input
              onChange={e =>
                setFormData(prev => ({ ...prev, studentName: e.target.value }))
              }
            />
          </Form.Item>

          <Form.Item
            label="Група"
            name="group"
            rules={[
              { required: true, message: 'Введіть назву групи!' },
              {
                pattern: /^[А-ЯA-Z]{2}-\d{3}$/,
                message: 'Формат групи: ББ-ЧЧЧ (наприклад: ПЗ-221)',
              },
            ]}
          >
            <Input
              placeholder="ПЗ-221"
              onChange={e =>
                setFormData(prev => ({ ...prev, group: e.target.value }))
              }
            />
          </Form.Item>

          {/* Генерация вопросов */}
          {test.questions.map((q, index) => renderQuestion(q, index))}

          <Button
            type="primary"
            htmlType="submit"
            style={{ flex: 1, minWidth: 200 }}
            loading={isSubmitting}
          >
            Надіслати
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
