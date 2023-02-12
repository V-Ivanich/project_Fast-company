import React from "react";
import PropTypes from "prop-types";

const renderPhrase = (number) => {
    const pattern = /^[2-4]{1}$|^.{0,}[2-4][2-4]$/;
    if (pattern.test(number)) {
        return `${number} человека тусанет с тобой сегодня`;
    } else {
        return `${number} человек тусанет с тобой сегодня`;
    }
};

const SearchStatus = ({ length }) => {
    const backgroundColor = length > 0 ? "#ADD8E6" : "#ffa07a";
    return (
        <span
            className="badge mt-2 mb-1 pt-2"
            style={{
                background: backgroundColor,
                color: "#6A5ACD",
                borderBottom: "1px solid #6A5ACD"
            }}
        >
            {length ? (
                <h5>{renderPhrase(length)}</h5>
            ) : (
                <h5 className="mx-3">Никто не пойдет с тобой тусить</h5>
            )}
        </span>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
renderPhrase.propTypes = {
    number: PropTypes.number.isRequired,
    pattern: PropTypes.symbol.isRequired
};

export default SearchStatus;
