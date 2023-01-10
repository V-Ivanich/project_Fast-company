import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;
    return (
        <Select
            isMulti
            options={optionsArray}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onChange}
        />
    );
};

MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default MultiSelectField;
