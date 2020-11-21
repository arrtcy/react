import React,{useState} from 'react'
import { Input ,Form,Button, message} from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone,LockOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import {loginApi,regApi} from '../../services/auth'
import {setToken} from '../../utils/tools'

function Login(props) {
  let [form]=Form.useForm()
  const [bol,setbol]=useState(true)
  const submit=(v)=>{
    if(bol){
       loginApi(v).then((res)=>{
      if(res.code==='success'){
        setToken(res.token)
        message.success('登陆成功')
        props.history.push('/')
      }else{
        message.error('密码错误')
      }
    })
    }else{
      regApi(v).then((res)=>{
        if(res.code==='success'){
          setToken(res.token)
          message.success('注册成功')
          props.history.push('/')
        }else{
          message.error('该账号被占用')
        }
      })
    }
   
  }

  return (
    <Form form={form} onFinish={submit} labelCol={{ span: 4 }} >
       <Form.Item label="用户名" name="userName">
          <Input placeholder="用户名" prefix={<UserOutlined />} />
       </Form.Item>
   <Form.Item label="密码" name="password">
      <Input.Password
      placeholder="输入密码"
      prefix={<LockOutlined />}
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
   </Form.Item>
   <Form.Item>
    <Button htmlType="submit" onClick={()=>setbol(true)}>登录</Button>
    <Button onClick={()=>setbol(false)} htmlType="submit">注册</Button>
   </Form.Item>
   
    </Form>
  )
}

export default withRouter(Login)
