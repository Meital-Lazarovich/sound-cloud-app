const INITIAL_STATE = {
    tracksData: null,
    searches: []
}

export default function tracksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_RESULTS':
            return {
                ...state,
                tracksData: action.tracksData,
            }
        case 'SET_RECENT_SEARCHES':
            return {
                ...state,
                searches: action.searches,
            }
        default:
            return state
    }
}