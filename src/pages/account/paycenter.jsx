import React from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Dropdown,Input,Button} from 'antd'
import {LeftOutlined,UserOutlined,DownOutlined,PlusOutlined,EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons'
import './pay.css'
import yinhang from '../../img/银行卡.svg'
import border from '../../img/border.svg'

function PayCenter(props) {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        银行卡支付
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        微信支付
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        支付宝支付
      </Menu.Item>
    </Menu>
  );

 
  function handleMenuClick(e) {
    console.log(e.item.node);
  }
  return (
    <div className="bgc">
      <div className="title">
        <LeftOutlined onClick={()=>props.history.push('/account')} style={{fontSize:'20px'}}/>
        <h3>提现中心</h3>
        <span>
          提现记录
        </span>
      </div>

      <div style={{backgroundColor:'white',paddingLeft:'5%',height:'60px',display:'flex',alignItems:'center'}}>
       <span style={{marginRight:'20px'}}>请选择提现方式</span> 
      <Dropdown.Button style={{background:'none',border:'none'}} icon={<DownOutlined />} placement="topCenter"  overlay={menu}>
      请选择
    </Dropdown.Button>
      </div>

      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'white',marginTop:'20px',height:'80px',borderImage:'url(http://localhost:3000'+border+') 30 30 round',borderBottom:'5px solid'}}>
        <img src={yinhang} alt="inco"/>
        <h3>请选择提现方式后添加账户</h3>
        <PlusOutlined style={{fontSize:'20px'}}/>
      </div>


<div style={{backgroundColor:'white',paddingBottom:'10px'}}>
      <div style={{marginTop:'5px',width:'90%',margin:'0 auto',paddingTop:'20px',}}>
        <h4 style={{fontSize:'16px'}}>
          提现金额
          <p style={{color:'#888'}}>(扣去一定劳务税收)</p>
          <Input  bordered={false} defaultValue="￥" style={{borderBottom:'1px solid #999999',margin:'0 auto',display:'block'}}/>
        </h4>
        <div style={{display:'flex',justifyContent:"space-between"}}>
          <span style={{color:'#888'}}>可用余额0.00元</span>
          <span style={{color:"#E17154"}}>全部体现</span>
        </div>
      </div>
    </div>


<div style={{backgroundColor:'white',marginTop:'10px',padding:'10px'}}>
  <p>安全密码</p>
  <Input.Password
  style={{height:"50px",borderRadius:'15px'}}
      placeholder="请输入6位数字安全密码"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
</div>
<Button  style={{ width:'90%',display:'block',margin:'20px auto ',backgroundImage:' linear-gradient(to right, #fe894c, #f16238)'}}>立即提现</Button>
<p style={{fontSize:'12px',color:'#888',paddingLeft:'5%'}}>*  按国家规定的劳务税进行扣税 <br/>
*  立即提现后，进入审核状态，我们将在1-3个工作日审核完成</p>
    </div>
  )
}

export default withRouter(PayCenter)
