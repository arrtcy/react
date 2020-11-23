import React from "react";
import { Tabs, Badge } from "antd-mobile";
import { withRouter } from "react-router-dom";
import Tuijian from "./Tuijian";
import Meizhuang from "./Meizhuang";
import Muying from "./Muying";

import "./home.css";

const tabs = [
  { title: <Badge>推荐</Badge> },
  { title: <Badge>美妆·洗护</Badge> },
  { title: <Badge>母婴·玩具</Badge> },
  { title: <Badge>日用·百货</Badge> },
];
function Index(props) {
  console.log(props);
  return (
    <div className="content">
      <Tabs
        tabBarPosition="top"
        animated={true}
        tabBarBackgroundColor="rgb(252,120,69)"
        tabs={tabs}
        tabBarInactiveTextColor="white"
        tabBarActiveTextColor="white"
        initialPage={0}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div className="tabs-buttom" style={{ overflow: "auto" }}>
          <Tuijian />
        </div>
        <div>
          <Meizhuang></Meizhuang>
        </div>
        <div><Muying/></div>
        <div>Content of third tab</div>
      </Tabs>
      <div></div>
    </div>
  );
}

export default withRouter(Index);
