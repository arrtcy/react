import React from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import tuiguang from '../../img/推广奖励.svg'
import zengpin from '../../img/赠品.svg'
import xiaofei from '../../img/xiaofei.svg'

function Index(props) {
  return (
    <div>
       <div className='titl'>
            <h2>账户</h2>
            <p>账户明细</p>
      </div>
      <div className="ori">
     <div className="left">
       <p>推广奖励</p>
       <span>0.00</span>
       <p>赠品价值</p>
       <span>0.00</span>
     </div>
     {//卡片
     }
     <div className="right">
<Button style={{color:'white',backgroundColor:'rgba(255,255,255,0.25)',padding:'0 20px',border:'none',borderRadius:'14px'}} onClick={()=>props.history.push('/account/paycenter')}>提现</Button>
<Button style={{color:'white',backgroundColor:'rgba(255,255,255,0.25)',border:'none',borderRadius:'14px'}} onClick={()=>props.history.push('/account/giftapply')}>申请赠品</Button>
     </div>
      </div>
     <div className="card"> 
         <img src={tuiguang} alt="推广"/>
        <h4>推广奖励</h4>
        <div>
            <p>可体现</p>
            <span>0.00</span>
        </div>
        <div>
          <p>已消费</p>
          <span>0.00</span>
        </div>
        <div>
          <p style={{marginRight:'15px'}}>在途</p>
          <span>0.00</span>
        </div>
     </div>
     <div className="card"> 
         <img src={zengpin} alt="推广"/>
        <h4><p style={{color:'black'}}> 赠品HK08491</p> <p style={{color:'#EA6542'}}>0.26 KHD/份</p> </h4>
        <div>
            <p>可申请</p>
            <span>0.00</span>
        </div>
        <div>
          <p style={{marginRight:'15px'}}>在途</p>
          <span>0.00</span>
        </div>
     </div>
     <div className="card"> 
         <img src={xiaofei} alt="推广"/>
          <h4>专区消费券</h4>
        <div>
            <p>可申请</p>
            <span>0.00</span>
        </div>

        <div>
          <p style={{marginRight:'15px'}}>在途</p>
          <span>0.00</span>
        </div>
     </div>
        <p style={{fontSize:'12px',color:'#888',paddingLeft:'5%'}}>*  赠品份数需满5000的整数倍可申请配送 <br/>
*  在途是签收商品后未满7天期的过程，满7天后可正常使用</p>
    </div>
  )
}

export default withRouter(Index)
