import React from 'react'
import { NavLink ,withRouter} from 'react-router-dom'
import {ShopOutlined,ShoppingCartOutlined,YahooOutlined,UserOutlined} from '@ant-design/icons'

function navBottom() {
  return (
    <div className="navBottom">
      <NavLink to="/" exact><ShopOutlined style={{fontSize:'18px'}}/><span>商城</span> </NavLink>
      <NavLink to="/cart"><ShoppingCartOutlined style={{fontSize:'18px'}}/><span>购物车</span> </NavLink>
      <NavLink to="/account"><YahooOutlined style={{fontSize:'18px'}}/><span>账户</span> </NavLink>
      <NavLink to="/user"><UserOutlined style={{fontSize:'18px'}}/><span>我的</span> </NavLink>
    </div>
  )
}

export default withRouter(navBottom)
