import React, { useState } from 'react';
import { createPlayer } from './ajaxHelpers'; // Assuming ajaxHelpers.js is in the same directory

function NewPlayerForm({ onPlayerCreated }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPlayer = await createPlayer({ name, age });
            onPlayerCreated(newPlayer);
            setName('');
            setAge('');
        } catch (error) {
            console.error('Error creating player:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
            </label>
            <button type="submit">Create Player</button>
        </form>
    );
}

export default NewPlayerForm;