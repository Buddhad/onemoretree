import React from "react";

export default function Index() {
  return (
    <div>
      <div
        className="
      flex
      justify-center
      my-10
      items-center
      flex-col
      px-4
      md:px-6
      xl:px-20
      py-9
      md:py-12
      xl:py-10
    "
      >
        <section>
          <h1
            className="
          leading-5 md:leading-6 xl:leading-9
          text-gray-800 text-xl
          md:text-2xl
          xl:text-4xl
          font-semibold
          text-center
        "
          >
            Act Before it&apos;s too late!
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </section>
        <section
          className="
        grid grid-cols-2
        xl:grid-cols-3
        gap-4
        md:gap-6
        xl:gap-8
        mt-8
        md:mt-10
        xl:mt-12
        mb-6 mb-8
      "
        >
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img1.png" />
          </div>
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img2.png" />
          </div>
          <div className="w-full">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner10_img3.png" />
          </div>
        </section>
        <section className="flex justify-center">
          <button
            className="
          px-6
          h-11
          text-gray-800 text-base
          font-medium
          flex
          items-center
          border border-gray-600
          hover:bg-gray-200
        "
          >
            <span> Explore </span>
            <img
              className="ml-2"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg"
            />
          </button>
        </section>
      </div>
    </div>
  );
}
