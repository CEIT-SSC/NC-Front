import React, { Component } from "react";
import SimpleTerminal from "../../components/terminal/SimpleTerminal";
import MainLayot from "../../Layouts/MainLayout";

function Terminal() {
  // return <React.Fragment >
  //  <section className="row vh-100">
  //  <div className="col-8 my-auto p-5  ">
  //  <SimpleTerminal className=""/>
  //  </div>
  //  <div className="col-4 bg-success">
  //  side part
  //  </div>
  //  </section>

  // </React.Fragment>;
  return <MainLayot>
    <SimpleTerminal></SimpleTerminal>
  </MainLayot>
}
export default Terminal;
