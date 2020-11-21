import React from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import logo from '../img/LOGO.svg'
import chat from '../img/Chat.svg'



function Search() {

  const { Search } = Input;
  const onSearch = value => console.log(value);
  return (
    <div className="SearchTop">

    <img src={logo} alt="logo"/>
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 200, margin: '0 10px' }}
    />
    <img src={chat} alt="chat"/>
    </div>
  )
}

export default Search

