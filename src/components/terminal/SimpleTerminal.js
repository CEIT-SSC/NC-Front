import React, { Component } from "react";
import Terminal from "react-console-emulator";
import { commands } from "./commends";

function SimpleTerminal() {
  return <Terminal commands={commands} promptLabel={"me@NC:~$"} />;
}
export default SimpleTerminal;
