import axios from 'axios';

export default {
    getTracksData,
    getRecentSearches,
    saveRecentSearch
}

const RECENT_SEARCHES_KEY = 'recent-searches'

async function getTracksData(url) {
    try {
        const res = await axios.get(url)
        const { data } = res
        return data;
    } catch (err) {
        console.log('Error while getting tracks data from api: ', err);
    }
}

function saveRecentSearch(val) {
    var searches = getRecentSearches()
    searches.unshift(val)
    _saveToStorage(RECENT_SEARCHES_KEY, searches)
    return searches
}

function getRecentSearches() {
    var searches = _loadFromStorage(RECENT_SEARCHES_KEY)
    return searches ? searches : []
}

function _saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function _loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var value = JSON.parse(str)
    return value;
}

