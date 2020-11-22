import React from 'react'
import { Input ,Form,Button} from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone,LockOutlined } from '@ant-design/icons';

function Login() {
  const submit=(v)=>{
    console.log(v);
  }
  return (
    <Form onFinish={submit}>
       <Form.Item label="用户名" name="userName">
          <Input placeholder="default size" prefix={<UserOutlined />} />
       </Form.Item>
   <Form.Item label="密码" name="password">
      <Input.Password
      placeholder="输入密码"
      prefix={<LockOutlined />}
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
   </Form.Item>
   <Form.Item>
    <Button htmlType="submit">登录</Button>
   </Form.Item>
   
    </Form>
  )
}

export default Login
