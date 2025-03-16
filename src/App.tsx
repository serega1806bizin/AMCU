import './App.scss';
import './utils/font-styles.scss';
import { Header } from './components/Header';
import { Outlet, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { StateContext } from './Store/Store';
import { Button, Col, Form, FormProps, Input, message, Row } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

export const App = () => {
  const { isMenuVisible } = useContext(StateContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isTestRoute = location.pathname.startsWith('/test');
  const isLoginRoute = location.pathname === '/';

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('authData');

    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);

        if (authData.expires && authData.expires > Date.now()) {
          setIsAuth(true);
        } else {
          localStorage.removeItem('authData');
        }
      } catch (error) {
        localStorage.removeItem('authData');
      }
    }
  }, []);

  const isProtectedRoute =
    location.pathname.startsWith('/task') ||
    location.pathname.startsWith('/create');

  useEffect(() => {
    if (!isAuth && isProtectedRoute) {
      message.warning('Cперш відійдіть');
    }
  }, [isAuth, isProtectedRoute]);

  if (!isAuth && isProtectedRoute) {
    return <Navigate to="/" replace />;
  }

  if (isAuth && isLoginRoute) {
    return <Navigate to="/task" replace />;
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    if (
      values.username === 'Викладач-2025-математика' &&
      values.password === 'Цей пароль ніколи не розгадають'
    ) {
      const expiration = Date.now() + 7 * 24 * 60 * 60 * 1000;

      localStorage.setItem('authData', JSON.stringify({ expires: expiration }));
      setIsAuth(true);
      message.success('Успішний вхід');
      navigate('/task');
    } else {
      message.error('Невірні учетні дані');
    }
  };

  return (
    <div className="App">
      {!isTestRoute && <Header />}
      {isMenuVisible ? (
        <Menu />
      ) : (
        <>
          <main className="main">
            <Outlet />
            {isLoginRoute && !isAuth && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                }}
              >
                <Row justify="center" style={{ width: '100%', padding: 10 }}>
                  <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                    <Form
                      name="basic"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      style={{ maxWidth: 600 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item<FieldType>
                        label="Ім'я користувача"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Введіть ім'я користувача!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item<FieldType>
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Введіть пароль!' }]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item wrapperCol={{ span: 24 }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ width: '100%' }}
                        >
                          Увійти
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </div>
            )}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
