import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { Card } from "antd-mobile";
import jingxuan from "../../img/爆款精选.svg";
import dapaizhekou from "../../img/大牌折扣.svg";
import jinritejia from "../../img/今日特价.svg";
import qiandaoyouli from "../../img/签到有礼.svg";

import banner from "../../img/banner1.png";
import banner2 from "../../img/好友百万红包.svg";
import jingxuanhuodong from "../../img/精选活动.svg";
import jingxuanimg from "../../img/Screenshot_2020-10-22-14-45-40-011_cn.com.szqhyn.@2x.png";

import { connect } from "react-redux";
import { loadProducts } from "../../services/products";

function Tuijian(props) {
  console.log(props);
  useEffect(() => {
    if(props.list.length===0){
 loadProducts(1).then((res) => {
      console.log(res);
      props.dispatch({
        type: "LOAD_PRODUCTS",
        payload: res.products,
      });
    });
    }
   
  }, [props]);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="img">
        <img
          src={banner}
          alt=""
          style={{ display: "block", margin: "1rem auto" }}
        />
      </div>
      <div className="banner-bottom">
        <div>
          <img src={jingxuan} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>爆款精选</p>
        </div>
        <div>
          <img src={dapaizhekou} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>大牌折扣</p>
        </div>
        <div>
          <img src={jinritejia} alt="今日特价" />
          <p style={{ textAlign: "center" }}>今日特价</p>
        </div>
        <div>
          <img src={qiandaoyouli} alt="签到有礼" />
          <p style={{ textAlign: "center" }}>签到有礼</p>
        </div>
      </div>

      <div className="img">
        <img
          src={banner2}
          alt=""
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>

      <Card>
        <Card.Header
          title="精选活动"
          thumb={jingxuanhuodong}
          extra={<span></span>}
        />
        <Card.Body>
          <div className="card-img" style={{ position: "relative" }}>
            <img src={jingxuanimg} alt="" style={{ width: "100%" }} />
            <div className="jingxuanhuodong">
              <div style={{ color: "#F27372" }}>
                <p>购物节</p>
                <span>超值好物大聚惠</span>
              </div>
              <div style={{ color: "#7D8CF2" }}>
                <p>购物节</p>
                <span>超值好物大聚惠</span>
              </div>
              <div style={{ color: "#B97B47" }}>
                <p>购物节</p>
                <span>超值好物大聚惠</span>
              </div>
              <div style={{ color: "#B489CF" }}>
                <p>购物节</p>
                <span>超值好物大聚惠</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* ----------------------------------------------------- */}
      <hr
        style={{
          height: "5px",
          border: "none",
          backgroundColor: "#F0F0F0",
        }}
      />
      <Card>
        <Card.Header
          title="为您推荐"
          thumb={jingxuanhuodong}
          extra={<span></span>}
        />
        <Card.Body>
          <div className="tuijiancard ">
            {props.list.map((temp,index) => {
              if(index<10){
                return (
              <div key={temp._id}>
                   <div className="left-top">赠4.50份HK08491</div>
                  <Link to={"/detail/?id="+ temp._id}><img src={temp.coverImg} alt="" />
                  <h4>{temp.name}</h4>

                  <h3>￥{temp.price}</h3></Link> 
                </div>
              );
              }
              return ''
              
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default connect((store) => store.products)(Tuijian);
