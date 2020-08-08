import React from 'react';

export default function RecentSearches({ searches, handleFilter }) {
    const searchList = searches.slice(0, 5)
    return (
        <section className="recent-searches flex column">
            <h2>Recent Searches</h2>
            {searchList.map((searchVal, idx) => {
                return (
                    <h4 onClick={() => handleFilter(searchVal)} key={idx}>{searchVal}</h4>
                )
            })}
        </section>
    )
}