import React from "react";

const FormSection = ({ children, flexDirection }) => {
  return (
    <section
      className={`flex ${flexDirection} md:w-[50%]  justify-between items-center p-4 my-4`}
    >
      {children}
    </section>
  );
};
export default FormSection;
