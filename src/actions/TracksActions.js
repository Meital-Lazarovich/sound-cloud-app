import TracksService from '../services/TracksService'

export const loadTracksData = (url) => {
    return async (dispatch) => {
        const tracksData = await TracksService.getTracksData(url)
        return dispatch(setTracksData(tracksData))
    }
}

export const setTracksData = (tracksData) => {
    return { type: 'SET_CURR_RESULTS', tracksData }
}

export const loadRecentSearches = () => {
    return async (dispatch) => {
        const searches = await TracksService.getRecentSearches()
        return dispatch(setRecentSearches(searches))
    }
}

export const setRecentSearch = (val) => {
    return async (dispatch) => {
        const searches = await TracksService.saveRecentSearch(val)
        return dispatch(setRecentSearches(searches))
    }
}

export const setRecentSearches = (searches) => {
    return { type: 'SET_RECENT_SEARCHES', searches }
}