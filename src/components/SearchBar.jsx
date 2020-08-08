import React, { useState } from 'react'

export default function TrackFilter({ handleFilter }) {
    const [searchValue, setFilter] = useState('');

    const submitForm = (ev) => {
        ev.preventDefault();
        handleFilter(searchValue);
        setFilter('');
    }

    return (
        <section className="search-bar flex space-between wrap">
            <form onSubmit={ev => submitForm(ev)}>
                <input type="text" placeholder="Search" onChange={ev => setFilter(ev.target.value)} value={searchValue} />
                <button type="submit" className="bold">Go</button>
            </form>
        </section>
    )
}