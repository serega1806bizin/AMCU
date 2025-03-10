import React, { useState } from "react";
import "./index.css";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Checkbox,
  Divider,
  Card,
  Space,
  Upload,
  Image,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled, { keyframes } from "styled-components";
import { shake } from "react-animations";
import { TaskItem } from "./task";

const shakeAnimation = keyframes`${shake}`;
const ShakingTextArea = styled(Input.TextArea)`
  &.shake {
    animation: 0.5s ${shakeAnimation};
  }
`;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const App = () => {
  const [testName, setTestName] = useState("");
  const [testNumber, setTestNumber] = useState(0);
  const [additionalText, setAdditionalText] = useState("");
  const [questions, setQuestions] = useState([{ id: 0, points: 0 }]);

  const [is1Checked, setIs1Checked] = useState(false);
  const [shakeTextArea, setShakeTextArea] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const totalPoints = questions.reduce(
    (sum, question) => sum + question.points,
    0
  ); // Сумма баллов


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Divider>Загальна інформація про роботу</Divider>
      <Form.Item
        label="Тема роботи:"
        name="Назва"
        labelCol={{ span: 4.6 }}
        rules={[{ required: true, message: "Будь-ласка введіть тему" }]}
      >
        <Input id="name" onChange={(e) => setTestName(e.target.value)} />
      </Form.Item>
      <Form.Item
        labelCol={{ span: 3 }}
        label="Номер:"
        name="Номер"
        rules={[{ required: true, message: "Будь-ласка, номер роботи" }]}
      >
        <InputNumber onChange={(value) => setTestNumber(Number(value))} />
      </Form.Item>
      <Form.Item name="checkbox1" valuePropName="checked">
        <Checkbox onChange={(e) => setIs1Checked(e.target.checked)}>
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
              message: "Введіть коментар, або приберіть галочку вище!",
            },
            {
              min: 10,
              message: "Коментар не менше 10 символів!",
            },
          ]}
        >
          <ShakingTextArea
            onChange={(e) => setAdditionalText(e.target.value)}
            className={shakeTextArea ? "shake" : ""}
          />
        </Form.Item>
      )}
      <Divider>Тепер створюємо питання</Divider>
      {questions.map((question) => (
        <TaskItem
          key={question.id}
          id={question.id}
          points={question.points}
          onDelete={() => removeQuestion(question.id)}
          onPointsChange={(points) => updatePoints(question.id, points)}
          onUpdate={(id, updatedData) => {
            setQuestions((prevQuestions) =>
              prevQuestions.map((q) =>
                q.id === id ? { ...q, ...updatedData } : q
              )
            );
          }}
        />
      ))}

      <Space style={{ marginTop: 20 }}>
        <Form.Item>
          <Button>Додати ще 1 питаня</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Створити тест
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default App;
