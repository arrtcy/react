import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./updown.css";

function UpDown(props) {
  return (
    <>
      {props.num && (
        <div className="updown">
          <Button icon={<PlusOutlined />} size="small" />
          <Button
            disabled
            size="small"
            style={{ border: "none", backgroundColor: "white", color: "black" }}
          >
            {props.num}
          </Button>
          <Button size="small" icon={<MinusOutlined />} />
        </div>
      )}
    </>
  );
}

export default UpDown;
