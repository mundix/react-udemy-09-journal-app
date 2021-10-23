import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">

            <div className="journal_entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.insider.com/520a7f3a6bb3f73f29000001?width=1000&format=jpeg&auto=webp)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal_entry-title">
                    Un nuevo dia
                </p>
                <p className="journal_entry-content">
                    Veniam magna anim quis enim sit non esse.
                </p>
            </div>
            <div className="journal_entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
