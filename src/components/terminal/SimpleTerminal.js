import React from "react";
import Terminal from "react-console-emulator";
import useTerminal from "../../hooks/useTerminal";

function SimpleTerminal() {
  const { commands, path } = useTerminal();
  return (
    <Terminal
      commands={commands}
      promptLabel={`${path}$ `}
      style={{
        backgroundColor: `#f6e6d6`,
        boxShadow: "5px 6px 13px 0px var(--button-shadow)",
        borderRadius: `15px`,
        height: `57vh`,
      }}
      promptLabelStyle={{ color: "#0a038f", fontSize: "1rem" }}
      contentStyle={{ color: `#382154`, paddingTop: `33px` }}
      inputTextStyle={{ color: `#0a0c26`, fontSize: `1rem`, margin: `3px` }}
    />
  );
}
export default SimpleTerminal;
