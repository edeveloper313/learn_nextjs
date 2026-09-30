import React from "react";
type ButtonProps = {
  title: string;

  description: string;
};
const Buttons = ({ title, description }: ButtonProps) => {
  return (
    <>
      <div className="inline-flex">
        <button
          className="rounded-s-sm border border-gray-200 px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50"
          title={description}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default Buttons;
