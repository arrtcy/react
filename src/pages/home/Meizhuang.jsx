import React,{} from "react";
import { Card } from "antd-mobile";
import mianbuhufu from "../../img/面部护肤.svg";
import nanshihufu from "../../img/男士护肤.svg";
import xiangshuicaizhuang from "../../img/香水彩妆.svg";
import qiandaoyouli from "../../img/美容美体.svg";
import kouqianghuli from "../../img/口腔护理.svg"

import banner from "../../img/banner2.png";
import jingxuanhuodong from "../../img/精选活动.svg";
import maofahuli from "../../img/毛发护理.svg";
import nvxinghuli from "../../img/女性护理.svg";
import shentihuli from "../../img/身体护理.svg";


import { connect } from "react-redux";


function Tuijian(props) {
  
  return (
    <div style={{ maxHeight: "2000px" }}>
      <div className="img">
        <img
          src={banner}
          alt=""
          style={{ display: "block", margin: "1rem auto" }}
        />
      </div>
      <div
        className="meizhuang-banner-bottom banner-bottom"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          <img src={mianbuhufu} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>面部护肤</p>
        </div>
        <div>
          <img src={nanshihufu} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>男士护肤</p>
        </div>
        <div>
          <img src={xiangshuicaizhuang} alt="今日特价" />
          <p style={{ textAlign: "center" }}>香水彩妆</p>
        </div>
        <div>
          <img src={qiandaoyouli} alt="签到有礼" />
          <p style={{ textAlign: "center" }}>美容美体</p>
        </div>
        <div>
          <img src={kouqianghuli} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>口腔护理 </p>
        </div>
        <div>
          <img src={maofahuli} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>毛发护理</p>
        </div>
        <div>
          <img src={nvxinghuli} alt="今日特价" />
          <p style={{ textAlign: "center" }}>女性护理</p>
        </div>
        <div>
          <img src={shentihuli} alt="签到有礼" />
          <p style={{ textAlign: "center" }}>身体护理</p>
        </div>
      </div>
      <hr
        style={{
          height: "5px",
          border: "none",
          backgroundColor: "#F0F0F0",
        }}
      />
      {/* ----------------------------------------------------- */}
      <Card>
        <Card.Header
          title="为您推荐"
          thumb={jingxuanhuodong}
          extra={<span></span>}
        />
        <Card.Body>
          <div className="tuijiancard ">
          {props.list.map((temp,index) => {
              if(index%3===0){
                return (
                <div key={temp._id}>
                  <div className="left-top">赠4.50份HK08491</div>
                  <img src={temp.coverImg} alt="" />
                  <h4>{temp.name}</h4>

                  <h3>￥{temp.price}</h3>
                </div>
              );
              }
              return ''
              
            })}
<div></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default connect(store=>store.products)(Tuijian);
