import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";
import { nanoid } from "nanoid";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentError: (state, action) => {
            state.error = action.payload;
        },
        commentCreated: (state, action) => {
            state.entities = state.entities.push(action.payload);
        },
        commentRemoved: (state, action) => {}
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentsReceived,
    commentsRequestFailed,
    commentCreated,
    commentError
    // commentRemoved
} = actions;

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const createComment = (state, action) => async (dispatch) => {
    const comment = {
        state,
        _id: nanoid(),
        pageId: action.payload._id,
        created_at: Date.now(),
        userId: action.payload._id
    };
    try {
        const { content } = await commentService.createComment(comment);
        dispatch(
            commentCreated((state.entities[action.payload.userId] = content))
        );
    } catch (error) {
        dispatch(commentError(error.message));
    }
};

export const removeComment = () => (dispatch) => {};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
