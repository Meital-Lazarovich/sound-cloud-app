import React from 'react';

export default function TrackList({ tracks, searchValue, setCurrTrack }) {
    return (
        <section className="track-list flex column">
            <h1 className="showing semi">Showing results for "{searchValue}"</h1>
            {tracks.map((track, idx) => {
                return (
                    <h4 onClick={() => setCurrTrack(track)} key={idx}>{track.title}</h4>
                )
            })}
        </section>
    )
}