import { orderBy } from "lodash";
import React, { useState, useEffect } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import CommentsList, { AddCommentForm } from "../common/comments";
import { useComments } from "../../hooks/useComments";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    const { createComments } = useComments();
    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);

    const handleSubmit = (data) => {
        createComments(data);
        // api.comments
        //     .add({ ...data, pageId: userId })
        //     .then((data) => setComments([...comments, data]));
    };

    const handleRemoveComment = (id) => {
        api.comments
            .remove(id)
            .then((id) =>
                setComments(comments.filter((comment) => comment._id !== id))
            );
    };

    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    console.log("sortCom", sortedComments);
    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
