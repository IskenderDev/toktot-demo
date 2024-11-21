import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate(); 

  const onFinish = (values) => {
    const { username } = values;
    localStorage.setItem("username", username);
    console.log("localStorage:", username);

    navigate("/demo");
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setIsButtonDisabled(value === "");
  };

  return (
    <div className="max-w-[300px] my-[50%] mx-auto text-center">
      <h2>Вход</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Имя"
          name="username"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input
            placeholder="Введите имя"
            prefix={<UserOutlined />}
            onChange={handleUsernameChange}
          />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
        >
          <Input.Password
            placeholder="Введите пароль"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={isButtonDisabled}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
