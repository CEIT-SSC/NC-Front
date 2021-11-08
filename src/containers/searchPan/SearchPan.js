import styleModule from "./SearchPan.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function SearchPan() {
  return (
    <div className={`${styleModule.searchPan}`}>
      <div className={`${styleModule.middlePan}`}>
        <div className={`${styleModule.dummytext}`}>
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
        <div className={`${styleModule.inputPart}`}>
          <Input placeholder=" متن ورودی " title="لیبل ورودی" />
          <Button />
        </div>
      </div>
    </div>
  );
}
