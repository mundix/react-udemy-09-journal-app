import React from 'react';
import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    className="notes__title-input"
                    placeholder="Some awesome title"
                />

                <textarea
                    placeholder="What happend today"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://bigthink.com/wp-content/uploads/2021/10/greg-rakozy-oMpAz-DN-9I-unsplash-e1633352959373.jpg?lb=1536,864"
                        alt="notes__image"
                    />
                </div>
            </div>
        </div>
    )
}
