import React from "react";
import "./Avatar.css";

const Avatar = ({ className, src, alt, ...props }) => {
  const handleOnError = (e) => {
    e.target.src =
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
  };
  return (
    <div>
      {src ? (
        <img
          {...props}
          className={`defaultClass ${className}`}
          src={src}
          alt={alt}
          onError={handleOnError}
        />
      ) : (
        <img
          {...props}
          className={`defaultClass ${className}`}
          src={
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
          alt={alt}
        />
      )}
      <div className="img-submit-btn">
        <input type="submit" value="Upload profile"></input>
      </div>
    </div>
  );
};

export default Avatar;
