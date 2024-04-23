
import React from 'react';
import { deletePlayer } from './ajaxHelpers'; // Assuming ajaxHelpers.js is in the same directory

function SinglePlayer({ player, onDelete }) {
    const handleDelete = async () => {
        try {
            await deletePlayer(player.id);
            onDelete(player.id);
        } catch (error) {
            console.error('Error deleting player:', error.message);
        }
    };

    return (
        <div>
            <h2>Player Details</h2>
            <p>Name: {player.name}</p>
            <p>Age: {player.age}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default SinglePlayer;