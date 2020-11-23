import React, { useState, useEffect } from "react";
import { NavBar, Icon } from "antd-mobile";
import { Button } from 'antd';
import { useLocation } from "react-router-dom";
import { loadProductDetail } from "../services/products";
import {addToCart} from "../services/carts"
function Detail(props) {
  console.log(props);
  let location = useLocation();
  let getID = new URLSearchParams(location.search);
  let id = getID.get("id");
  const [temp, setTemp] = useState({});
  useEffect(() => {
    loadProductDetail(id).then((res) => setTemp(res));
  }, [id]);

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => props.history.go(-1)}
        rightContent={[<Icon key="1" type="ellipsis" />]}
      >
        NavBar
      </NavBar>
      <div className="detail-img">
        <img
          src={temp.coverImg}
          alt=""
          style={{ width: "80%", margin: "0 auto" }}
        />
      </div>













      <div className="detail-bottom" style={{height:"4rem",width:"100%",position:"fixed",bottom:"0",left:"0",border:"solid 1px "}} >
        
      <Button type="primary" shape="round" style={{width:"10rem",height:"3rem"}}
      onClick={()=>{
        addToCart(id).then(res=>console.log(res))
      }}
      
      >
          加入购物车
        </Button>
<Button>立即购买</Button>

      </div>
    </div>
  );
}

export default Detail;
