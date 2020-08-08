import React from 'react';

export default function TrackImage({ track, toggleTrackPlayer }) {
    return (
        <section className="track-image flex column" onClick={() => toggleTrackPlayer()}>
            <img className="pointer" src={track.artwork_url} alt={track.title} />
            <button>Play</button>
        </section>
    )
}