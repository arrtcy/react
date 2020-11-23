import React,{} from "react";
import { Card } from "antd-mobile";
import baobaochuxing from "../../img/宝宝出行.svg";
import buruweiyang from "../../img/哺乳.svg";
import ertongwanju from "../../img/玩具.svg";
import fushilingshi from "../../img/零食.svg";

import niaobushijin from "../../img/尿裤湿巾.svg";
import xihuyongpin from "../../img/洗护用品.svg";
import tongzhuang from "../../img/童装.svg";
import yunchanhuli from "../../img/孕产.svg";

import banner from "../../img/母婴.png";
import jingxuanhuodong from "../../img/精选活动.svg";


import { connect } from "react-redux";


function Muying(props) {
  
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
          <img src={baobaochuxing} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>宝宝出行</p>
        </div>
        <div>
          <img src={buruweiyang} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>哺乳喂养</p>
        </div>
        <div>
          <img src={ertongwanju} alt="今日特价" />
          <p style={{ textAlign: "center" }}>儿童玩具</p>
        </div>
        <div>
          <img src={fushilingshi} alt="签到有礼" />
          <p style={{ textAlign: "center" }}>辅食零食</p>
        </div>
        <div>
          <img src={niaobushijin} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>尿裤湿巾 </p>
        </div>
        <div>
          <img src={xihuyongpin} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>洗护用品</p>
        </div>
        <div>
          <img src={tongzhuang} alt="今日特价" />
          <p style={{ textAlign: "center" }}>童装</p>
        </div>
        <div>
          <img src={yunchanhuli} alt="签到有礼" />
          <p style={{ textAlign: "center" }}>孕产护理</p>
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
              if(index%2===1){
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

export default connect(store=>store.products)(Muying);
