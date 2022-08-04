import { get_popular_movies, get_search_movies, get_top_rated_movies, get_upcoming_movies } from 'apis/api';
export function itemsHaveError(bool) {
    return {
        type: 'ITEMS_HAVE_ERROR',
        hasError: bool
    };
}

export function itemsAreLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}
export function popularFetchDataSuccess(items) {
    return {
        type: 'POPULAR_FETCHDATA_SUCCESS',
        items
    };
}
export function searchFetchDataSuccess(items) {
    return {
        type: 'SEARCH_FETCHDATA_SUCCESS',
        items
    };
}
export function top_ratedFetchDataSuccess(items) {
    return {
        type: 'TOP_RATED_FETCHDATA_SUCCESS',
        items
    };
}
export function upcomingFetchDataSuccess(items) {
    return {
        type: 'UPCOMING_FETCHDATA_SUCCESS',
        items
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));
        const popular_movies = get_popular_movies()
        const top_rated_movies = get_top_rated_movies()
        const upcoming_movies = get_upcoming_movies()
        popular_movies.then((response) => {
            dispatch(popularFetchDataSuccess(response.results))
            dispatch(itemsAreLoading(false));
        })
        upcoming_movies.then((response) => {
            dispatch(upcomingFetchDataSuccess(response.results))
            dispatch(itemsAreLoading(false));
        })
        top_rated_movies.then((response) => {
            dispatch(itemsAreLoading(false));
            dispatch(top_ratedFetchDataSuccess(response.results))
        })
        dispatch(itemsHaveError(false))
    };
}
export function searchMovies(s) {
    return (dispatch) => {
        if(s !=""){
            dispatch(itemsAreLoading(true));
            const s_movies = get_search_movies(s)
            s_movies.then((response) => {
            dispatch(itemsAreLoading(false));
                dispatch(searchFetchDataSuccess(response.results))
            })
        }else{
            dispatch(searchFetchDataSuccess([]))
        }
    };
}
