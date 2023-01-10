import React from "react";
import PropType from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            {options.map((option) => (
                <div
                    key={option.name + "_" + option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        checked={option.value === value}
                        value={option.value}
                        onChange={onChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={option.name + "_" + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    options: PropType.array,
    name: PropType.string,
    onChange: PropType.func,
    value: PropType.string,
    label: PropType.string
};

export default RadioField;
