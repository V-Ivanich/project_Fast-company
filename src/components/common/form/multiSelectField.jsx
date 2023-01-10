import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;

    const handleChange = (e) => {
        console.log(e);
        onChange(e);
    };
    return (
        <Select
            isMulti
            options={optionsArray}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            name={name}
        />
    );
};

MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string
};
export default MultiSelectField;
