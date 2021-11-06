import React, { Component } from "react";
import Terminal from "react-console-emulator";
import useTerminal from "../../hooks/useTerminal";

function SimpleTerminal() {
  const commands = useTerminal();
  return <Terminal commands={commands} promptLabel={"NOOB1$"}  style={{backgroundColor:`#f6e6d6`, boxShadow: '5px 6px 13px 0px var(--button-shadow' ,borderRadius:`15px`}} 
  promptLabelStyle={{color:'#0a038f',fontSize:'1rem',paddingTop:`16px`}}
  contentStyle={{color:`#382154`}}
  inputTextStyle={{color:`#0a0c26` ,fontSize:`1rem`,marginTop:`15.8px`}}
  />;
}
export default SimpleTerminal;
