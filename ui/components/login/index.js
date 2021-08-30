import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from "./Login.module.scss";
import React from "react";

const LoginComponent = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <div className={styles.desc}>
            <h1>Ticket</h1>
            </div>
          </div>
      </div>
      <div className={styles.main}>
      <Form
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined  />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.login_form_button}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
