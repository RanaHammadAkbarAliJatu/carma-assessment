export function itemsHaveError(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function itemsAreLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function popularFetchDataSuccess(state = [], action) {
    switch (action.type) {
        case 'POPULAR_FETCHDATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
export function top_ratedFetchDataSuccess(state = [], action) {
    switch (action.type) {
        case 'TOP_RATED_FETCHDATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
export function searchFetchDataSuccess(state = [], action) {
    switch (action.type) {
        case 'SEARCH_FETCHDATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
export function upcomingFetchDataSuccess(state = [], action) {
    switch (action.type) {
        case 'UPCOMING_FETCHDATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}