import React from "react";

const FooterIcon = ({ pathD }) => {
  return (
    <div className="footerIcon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d={pathD} />
      </svg>
    </div>
  );
};

export default FooterIcon;
