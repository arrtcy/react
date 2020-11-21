import React from 'react'
import {withRouter} from 'react-router-dom'

function Index(props) {
  console.log(props);
  return (
    <div>
      <h2>首页页</h2>
      <button onClick={()=>props.history.push('/login')}> 登录</button>
    </div>
  )
}

export default withRouter(Index)
