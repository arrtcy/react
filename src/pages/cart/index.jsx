import React from 'react'
import './index.css'
import CartCard from '../../components/CartCards'
import img from '../../img/编组 5.svg'
import pro from '../../img/pro1.png'
import pro1 from '../../img/pro2.png'
import { Checkbox,Button} from 'antd'


function Index() {
  return (
    <div className='bgc'>
      <div className='title'>
            <h2>购物车</h2>
            <p>管理</p>
      </div>
     <CartCard/>


{//每日推荐
}
       <img style={{margin:'0 auto'}} src={img} alt="55555"/>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'20px'}}>
  <img src={pro} alt="" style={{marginBottom:'10px'}}/>
  <img src={pro1} alt="" style={{marginBottom:'10px'}}/>
  <img src={pro} alt="" style={{marginBottom:'10px'}}/>
  <img src={pro1} alt="" style={{marginBottom:'10px'}}/>
</div>

<div className="payoff" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
  <div>
    <Checkbox/>全选
  </div>
<div className="price">
  合计:<span style={{color:"red"}}> ￥ 0.00</span> 
</div>
<Button type="primary">结算(0)</Button>
</div>
    </div>
  )
}

export default Index
