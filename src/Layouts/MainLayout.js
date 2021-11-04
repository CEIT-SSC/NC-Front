import React, { Component } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";


import classes from "./layout.module.css";

function MainLayot(prpos){
    return <div className="row vh-100 w-100">
   {/* <section > */}
   <div className={`${classes.left} col-8 d-flex flex-column justify-content-center p-5 vh-100`}>
   {prpos.children}
   </div>
   <div className={`${classes.sidelayout} col row `}>
   {/* Titles and text section */}
   <div className="p-2">
       <h1 className="text-end">تایتل</h1>
       <h3 className="text-end">ساب تایتل</h3>
       <p className="text-end">
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی            
       </p>
   </div>
   {/* End of titles and text section */}

    {/* input & buttons section */}
   <div className="d-flex flex-column ">
  <Input placeholder=" متن ورودی "></Input>
  <Button ></Button>
   </div>
   {/* End of input and buttons */}
   
   </div>
  
   {/* </section> */}
   </div>
  
  ;
}


export default MainLayot;