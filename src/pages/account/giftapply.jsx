import React from 'react'
import {withRouter} from 'react-router-dom'
import {Input,Button} from 'antd'
import {LeftOutlined,EyeTwoTone,EyeInvisibleOutlined,RightOutlined,PlusSquareOutlined,MinusSquareOutlined} from '@ant-design/icons'



function GiftApply(props) {


 

  return (
    <div className="bgc">
      <div className="title">
        <LeftOutlined onClick={()=>props.history.push('/account')} style={{fontSize:'20px'}}/>
        <h3>赠品申请</h3>
        <span>
          申请记录
        </span>
      </div>
<div style={{backgroundColor:'white',margin:'10px auto',width:'90%',  boxShadow: '2px 1px 5px #dfdfdf',padding:'10px 0',borderRadius:'10px'}}>
<div style={{width:"90%",borderBottom:'1px solid #979797',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px',margin:'0 auto'}}>
<p style={{margin:'0'}}>申请份额</p>
<div style={{display:'flex',alignItems:'center',width:'90px',justifyContent:'space-between'}}>
  <PlusSquareOutlined style={{fontSize:'20px',color:'#F2663B'}}/>
  <Button style={{backgroundColor:'#FDEEE9'}}>0</Button>
  <MinusSquareOutlined style={{fontSize:'20px',color:'#F2663B'}} />
  </div>
  </div>

  <div style={{width:"90%",borderBottom:'1px solid #888888',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px',margin:'0 auto'}}>
<p style={{margin:'0',height:'30px',lineHeight:"30px"}}>赠品名称</p>
<span style={{color:'#F3623D'}}>赠品HK08491</span>
  </div>
  <div style={{width:"90%",borderBottom:'1px solid #888888',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px',margin:'0 auto'}}>
<p style={{margin:'0',height:'30px',lineHeight:"30px"}}>可得份数</p>
<span style={{color:'#F3623D'}}>0.0份</span>
  </div>


</div>
 


<div style={{backgroundColor:'white',margin:'10px auto',padding:'10px',width:'90%',borderRadius:'10px'}}>
  <p>安全密码</p>
  <Input.Password
  style={{height:"50px",borderRadius:'15px'}}
      placeholder="请输入6位数字安全密码"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    <Input
  style={{marginTop:'20px', height:"50px",borderRadius:'15px'}}
      placeholder="请输入收货地址"
      suffix={<RightOutlined/>}
    />
</div>
<Button  style={{width:'90%',display:'block',margin:'60px auto ',backgroundImage:' linear-gradient(to right, #fe894c, #f16238)'}}>提交</Button>

    </div>
  )
}

export default withRouter(GiftApply)
