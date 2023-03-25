import { combineReducers, configureStore } from "@reduxjs/toolkit";
import professionsReducer from "./professions";
import qualitiesReducer from "./qualities";
import usersReducer from "./users";

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    users: usersReducer,
    professions: professionsReducer

});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
