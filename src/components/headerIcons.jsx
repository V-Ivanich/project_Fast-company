import React from "react";
import PropTypes from "prop-types";

const HeaderIcon = ({ statusIcon, ...props }) => {
  return (
        <i
          {...props}
          className={`bi bi-chevron-compact-${
          statusIcon ? "down" : "up"
        }`}
      >
      </i>
    );
};

HeaderIcon.propTypes = {
  statusIcon: PropTypes.bool.isRequired
};
export default HeaderIcon;
