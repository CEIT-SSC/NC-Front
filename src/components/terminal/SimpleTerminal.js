import React, { Component } from "react";
import Terminal from "react-console-emulator";
import useTerminal from "../../hooks/useTerminal";

function SimpleTerminal() {
  const commands = useTerminal();
  return <Terminal commands={commands} promptLabel={"NOOB1$"}  style={{backgroundColor:`#f6e6d6`, boxShadow: '5px 6px 13px 0px var(--button-shadow'}} promptLabelStyle={{color:'#0a038f',fontSize:'1rem'}}/>;
}
export default SimpleTerminal;
