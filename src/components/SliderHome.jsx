import React from "react";

const SliderHome = () => {
  return (
    <div className="flex w-full pb-6 overflow-x-scroll transition-all duration-500 scrollbar-thumb-rounded scrollbar hover:scrollbar-thumb-primary lg:justify-center">
      <div className="flex items-center justify-start gap-5 ml-5 w-max">
        <div className="flex items-center justify-center h-32 px-5 mt-5 w-72 rounded-xl bg-primary">
          <div className="flex flex-col gap-4 text-greyColor">
            <h1 className="text-xl font-medium">New purchases</h1>
            <p className="text-sm font-light">
              Shop more with the new product finder
            </p>
          </div>
          <img
            className="object-cover object-center w-16 h-full "
            src="https://res.cloudinary.com/ikevinmejia/image/upload/v1660680774/1_1_a7ug7e.png"
            alt="icon"
          />
        </div>
        <div className="flex items-center justify-center h-32 px-5 mt-5 w-72 rounded-xl bg-primary">
          <div className="flex flex-col gap-4 text-greyColor">
            <h1 className="text-xl font-medium">New purchases</h1>
            <p className="text-sm font-light">
              Shop more with the new product finder
            </p>
          </div>
          <img
            className="object-cover object-center w-16 h-full "
            src="https://res.cloudinary.com/ikevinmejia/image/upload/v1660680774/1_1_a7ug7e.png"
            alt="icon"
          />
        </div>
        <div className="flex items-center justify-center h-32 px-5 mt-5 w-72 rounded-xl bg-primary">
          <div className="flex flex-col gap-4 text-greyColor">
            <h1 className="text-xl font-medium">New purchases</h1>
            <p className="text-sm font-light">
              Shop more with the new product finder
            </p>
          </div>
          <img
            className="object-cover object-center w-16 h-full "
            src="https://res.cloudinary.com/ikevinmejia/image/upload/v1660680774/1_1_a7ug7e.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
