import React from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";

const tabs = [
  { title: <Badge>推荐</Badge> },
  { title: <Badge>美妆·洗护</Badge> },
  { title: <Badge>母婴·玩具</Badge> },
  { title: <Badge>日用·百货</Badge> },
];

// const tabs2 = [
//   { title: 'First Tab', sub: '1' },
//   { title: 'Second Tab', sub: '2' },
//   { title: 'Third Tab', sub: '3' },
// ];

function Index() {
  return (
    <div>
      <Tabs
        animated={true}
        tabBarBackgroundColor="rgb(252,120,69)"
        tabs={tabs}
        tabBarInactiveTextColor="white"
        tabBarActiveTextColor="white"
        initialPage={1}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff",
          }}
        >
          Content of first tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
            backgroundColor: "#fff",
          }}
        >
          Content of second tab
        </div>
        <div>
          Content of third tab
        </div>
        <div>
          Content of third tab
        </div>
      </Tabs>
      <div></div>
    </div>
  );
}

export default Index;
