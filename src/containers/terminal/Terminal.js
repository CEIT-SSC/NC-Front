import React from "react";
import SimpleTerminal from "../../components/terminal/SimpleTerminal";
import MainLayot from "../../hoc/layout/MainLayout";

function Terminal() {
  return (
    <MainLayot>
      <SimpleTerminal></SimpleTerminal>
    </MainLayot>
  );
}
export default Terminal;
