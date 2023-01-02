import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange, onClick }) => {
    return (
        <div className="mb-2 mt-1">
            <input
                type="text"
                className="form-control p-1 w-100"
                placeholder="Поиск..."
                value={value}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    );
};
Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};
export default Search;
