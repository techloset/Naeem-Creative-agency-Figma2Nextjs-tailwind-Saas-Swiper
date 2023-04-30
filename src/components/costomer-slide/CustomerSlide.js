import Image from "next/image";
import quotationMarks from "../../assests/images/quotation-marks.png";
import { VscArrowRight } from "react-icons/vsc";
const CustomerSlide = (props) => {
  const { desc, title, desig } = props;
  return (
    <div className="grid text-white space-y-11">
      <div className="grid justify-center -mb-8">
        <Image src={quotationMarks} alt="quoteMark"/>
      </div>
      <div className="grid justify-center">
        <p className="text-[28px] leading-10 font-normal text-white px-10 lg:w-[723px] md:text-2xl lg:text-3xl  text-center">
          {desc}
        </p>
      </div>
      <p className="text-lg md:text-xl lg:text-xl pb-10 text-center">
        {title}
        <br />
        {desig}
      </p>
    </div>
  );
};

export default CustomerSlide;
