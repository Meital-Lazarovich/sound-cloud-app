import SC from 'soundcloud';
import React, { Component } from 'react';
import { loadTracksData, setTracksData, loadRecentSearches, setRecentSearch } from '../actions/TracksActions';
import { connect } from 'react-redux';

import TrackList from '../components/TrackList';
import TrackImage from '../components/TrackImage';
import SearchBar from '../components/SearchBar';
import RecentSearches from '../components/RecentSearches';

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw'
const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/callback`;

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

class SoundCloudApp extends Component {
    state = {
        currTrack: null,
        searchValue: null
    }

    async componentDidMount() {
        this.props.loadRecentSearches()
    }

    handleFilter = async (val) => {
        SC.get('/tracks', {
            q: val,
            limit: 6,
            linked_partitioning: 1
        }).then(res => {
            this.props.setTracksData(res)
            this.props.setRecentSearch(val)
            this.setState(prevState => ({ ...prevState, searchValue: val }));
        })
    }

    setCurrTrack = async (track) => {
        this.setState(prevState => ({ ...prevState, currTrack: track }))
    }

    showNextPage = async () => {
        await this.props.loadTracksData(this.props.tracksData.next_href);
    }

    toggleTrackPlayer = async () => {
        var trackID = this.state.currTrack.id;
        SC.stream(`/tracks/${trackID}`).then(function (player) {
            player.play()
                .then(() => console.log('Playback started!'))
                .catch(e => console.error('Playback rejected. Try calling play() from a user interaction.', e));
        });
    }

    render() {
        const { tracksData, searches } = this.props
        const { currTrack, searchValue } = this.state
        return (
            <section className="sound-cloud-app flex wrap space-between">
                <div className="search">
                    <SearchBar handleFilter={this.handleFilter} findCurrLoc={this.findCurrLoc} />
                    {(tracksData?.collection.length > 0) && <TrackList tracks={tracksData.collection} searchValue={searchValue} setCurrTrack={this.setCurrTrack} />}
                    {(tracksData && !tracksData?.collection.length) && <h1 className="err">Could not find any tracks containing this word</h1>}
                    {tracksData?.next_href && <button onClick={this.showNextPage} className="next-btn bold">Next</button>}
                </div>
                {currTrack && <TrackImage toggleTrackPlayer={this.toggleTrackPlayer} track={currTrack} />}
                {(searches.length > 0) && <RecentSearches searches={searches} handleFilter={this.handleFilter} />}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracksData: state.tracksData,
        searches: state.searches
    }
}

const mapDispatchToProps = {
    loadTracksData,
    setTracksData,
    loadRecentSearches,
    setRecentSearch
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoundCloudApp)
