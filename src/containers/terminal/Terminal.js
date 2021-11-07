import React from "react";
import SimpleTerminal from "../../components/terminal/SimpleTerminal";
import styleModul from "./Terminal.module.css";

function Terminal() {
  return (
    <div className={`${styleModul.Terminal}`}>
      <div className={`${styleModul.buttons}`}>
        <span>
          <button></button>
          <button></button>
          <button></button>
        </span>
        <p>AUT N00B CHALLANGE</p>
        <span></span>
      </div>
      <SimpleTerminal />
    </div>
  );
}
export default Terminal;
