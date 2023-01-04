import { useState } from "react";
import "./inputBox.css";

const InputBox = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputBox;

//
