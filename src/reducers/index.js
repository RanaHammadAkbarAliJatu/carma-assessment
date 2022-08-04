import { combineReducers } from 'redux';
import {
    popularFetchDataSuccess,
    top_ratedFetchDataSuccess,
    upcomingFetchDataSuccess,
    itemsHaveError,
    itemsAreLoading,
    searchFetchDataSuccess
} from './movies';

export default combineReducers({
    popularFetchDataSuccess,
    top_ratedFetchDataSuccess,
    searchFetchDataSuccess,
    upcomingFetchDataSuccess,
    itemsHaveError,
    itemsAreLoading
});
