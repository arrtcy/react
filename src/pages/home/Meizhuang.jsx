import React from "react";
import { Card } from "antd-mobile";
import mianbuhufu from "../../img/面部护肤.svg";
import nanshihufu from "../../img/男士护肤.svg";
import xiangshuicaizhuang from "../../img/香水彩妆.svg";
import qiandaoyouli from "../../img/美容美体.svg";

import banner from "../../img/banner2.png";
import jingxuanhuodong from "../../img/精选活动.svg";
import jingxuanimg from "../../img/Screenshot_2020-10-22-14-45-40-011_cn.com.szqhyn.@2x.png";
import yashilandai from "../../img/雅诗兰黛.png";

function Tuijian() {
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
          <img src={qiandaoyouli} alt="爆款精选" />
          <p style={{ textAlign: "center" }}>口腔护理 </p>
        </div>
        <div>
          <img src={qiandaoyouli} alt="大牌折扣" />
          <p style={{ textAlign: "center" }}>毛发护理</p>
        </div>
        <div>
          <img src={qiandaoyouli} alt="今日特价" />
          <p style={{ textAlign: "center" }}>女性护理</p>
        </div>
        <div>
          <img src={qiandaoyouli} alt="签到有礼" />
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
            <div>
              <div className="left-top">赠4.50份HK08491</div>
              <img src={yashilandai} alt="" />
              <h4>【小样】雅诗兰黛持妆粉底液10ml</h4>

              <h3>￥66.00</h3>
            </div>
            <div>
              <div className="left-top">赠4.50份HK08491</div>
              <img
                src="https://gd2.alicdn.com/imgextra/i2/46459582/TB2HnLhbnnI8KJjSszgXXc8ApXa_!!46459582.jpg_400x400.jpg"
                alt=""
              />
              <h4>
                【天天特价】欧美时尚手提包 漆皮女包休闲潮流气质亮面女士包包
              </h4>

              <h3>￥66.00</h3>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tuijian;
