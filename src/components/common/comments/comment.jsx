import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { displayDate } from "../../../utils/dislayDate";
import API from "../../../api";
import { identity } from "lodash";

const Comment = ({
    content,
    created_at: created,
    _id: identity,
    userId,
    onRemove
}) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {});
};
