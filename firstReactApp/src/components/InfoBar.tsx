import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type InfoBoxProps = {
  text: string;
};

function InfoBar({ text }: InfoBoxProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px",
        backgroundColor: "#eee",
      }}
    >
      <input type="text" value={text} readOnly style={{ width: "100%" }} />
    </div>
  );
}
export default InfoBar;
