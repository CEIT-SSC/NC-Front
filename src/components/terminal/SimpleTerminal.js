import React, { Component } from "react";
import Terminal from "react-console-emulator";
import useTerminal from "../../hooks/useTerminal";

function SimpleTerminal() {
  const commands = useTerminal();
  return <Terminal commands={commands} promptLabel={"me@NC:~$"} />;
}
export default SimpleTerminal;
