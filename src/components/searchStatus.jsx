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
    return (
        <span
            className={
                `badge rounded-pill m-1 ms-2 pt-2 bg-` +
                (length > 0 ? "primary" : "danger")
            }
        >
            {length !== 0
                ? <h5>{renderPhrase(length)}</h5>
                : <h5 className="mx-3">Никто не пойдет с тобой тусить</h5>}
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
