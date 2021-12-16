import React from "react";

const Input = ({ name, value, placeholder, onChange }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
