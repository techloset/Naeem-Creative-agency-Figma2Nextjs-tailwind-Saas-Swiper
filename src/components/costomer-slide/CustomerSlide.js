import Image from "next/image";
import quotationMarks from "../../assests/images/quotation-marks.png";
import { VscArrowRight } from "react-icons/vsc";
const CustomerSlide = (props) => {
  const { desc, title, desig } = props;
  return (
    <div className="grid text-white space-y-[44px]">
      <div className="grid justify-center">
        <Image src={quotationMarks} alt="quoteMark"/>
      </div>
      <div className="grid justify-center">
        <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal px-4 text-white lg:w-[723px] text-center">
          {desc}
        </p>
      </div>
      <p className="text-lg md:text-xl lg:text-xl pb-[34px] text-center">
        {title}
        <br />
        {desig}
      </p>
    </div>
  );
};

export default CustomerSlide;
