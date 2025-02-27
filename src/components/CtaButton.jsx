import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-purple-600 hover:bg-purple-500 hover:shadow hover:shadow-blue-500 text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
