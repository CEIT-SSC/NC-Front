import React, { Component } from "react";
import SimpleTerminal from "../../components/terminal/SimpleTerminal";

function Terminal() {
  return <React.Fragment >
   <section className="row vh-100">
   <div className="col-8 my-auto p-5  ">
   <SimpleTerminal className=""/>
   </div>
   <div className="col-4 bg-success">
   side part
   </div>
   </section>

  </React.Fragment>;
}
export default Terminal;
