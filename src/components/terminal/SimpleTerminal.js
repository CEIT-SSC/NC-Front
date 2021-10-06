import React, { Component } from "react";
import Terminal from "react-console-emulator";

function SimpleTerminal() {
  const commands = {
    sayhello: {
      description: "says Hello to the presented name .",
      usage: "sayhello <string> ",
      fn: function () {
        return `hello ${Array.from(arguments).join(" ")}`;
      },
    },
  };

  return <Terminal commands={commands} promptLabel={"me@NC:~$"} />;
}
export default SimpleTerminal;
