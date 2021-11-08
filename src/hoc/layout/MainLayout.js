import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import classes from "./layout.module.css";

function MainLayot(prpos) {
  return (
    <div className="row vh-100 w-100">
      {/* left Container */}
      <div className={`${classes.left} col-9  p-5 d-flex`}>
        <div className="d-flex flex-column  justify-content-center mx-auto ">
          {prpos.children}
        </div>
      </div>

      {/* End of left Container */}
      <div className={`${classes.sidelayout} col row d-flex `}>
        {/* Titles and text section */}
        <div className={`${classes.dummytext} p-2`}>
          <h1 className="text-end">تایتل</h1>
          <h3 className="text-end">ساب تایتل</h3>
          <p className="text-end">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی
          </p>
        </div>
        {/* End of titles and text section */}

        {/* input & buttons section */}
        <div className="d-flex flex-column justify-content-center mx-auto">
          <Input placeholder=" متن ورودی " title="لیبل ورودی" />
          <span className={`${classes.button}`}>
            <Button />
          </span>
        </div>
        {/* End of input and buttons */}
      </div>
    </div>
  );
}

export default MainLayot;
