import React from "react";
import PropTypes from "prop-types";

const renderPhrase = (number) => {
    const pattern = /^[2-4]{1}$|^.{0,}[2-4]$|^.{0,}[2-4][2-4]$/;

    if (pattern.test(number)) {
        return `${number} человека тусанет с тобой сегодня`;
    } else {
        return `${number} человек тусанет с тобой сегодня`;
    }
};

const SearchStatus = ({ length }) => {
    return (
        <h1
            className={
                `badge rounded-pill mt-1 ms-1 px-2 py-2 bg-` +
                (length > 0 ? "primary" : "danger")
            }
        >
            {length !== 0
                ? renderPhrase(length)
                : "Никто не пойдет с тобой тусить"}
        </h1>
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
