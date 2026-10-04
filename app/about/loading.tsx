import React from "react";

const loading = () => {
  return (
    <>
      <div
        role="alert"
        className="border-2 bg-yellow-400 p-4 text-indigo-900 shadow-[1px_3px_0_0] shadow-indigo-600 dark:bg-green-800 dark:text-green-50 dark:shadow-white w-fit px-20 "
      >
        <div className="flex items-center justify-center gap-3">
          <i className="ri-check-line bg-black px-1 py-[0.5px] text-base text-white rounded-full"></i>
          <strong className="block flex-1 leading-tight font-semibold">
            Loading....
          </strong>
        </div>
      </div>
    </>
  );
};

export default loading;
