import Image from "next/image";
import quotationMarks from "../../assests/images/quotation-marks.png";

const CustomerSlide = (props) => {
  const { desc, title, desig } = props;
  return (
    <div className="grid text-white space-y-11 ">
      <div className="grid justify-center">
        <Image src={quotationMarks} alt="" />
      </div>
      <p className="text-lg px-10 lg:px-40 md:text-2xl lg:text-3xl font-normal text-center">
        {desc}
      </p>
      <p className="text-base md:text-xl lg:text-2xl pb-12 text-center">
        {title}
        <br />
        {desig}
      </p>
    </div>
  );
};

export default CustomerSlide;
