import React, { useState, useEffect } from 'react';
import { fetchAllPlayers, fetchPlayerById } from './ajaxHelpers'; // Assuming ajaxHelpers.js is in the same directory
import { useNavigate, useParams } from 'react-router-dom';

function AllPlayers() {
    const [thePlayers, setThePlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const navigate = useNavigate(); // Hook for navigating to different routes
    const { playerId } = useParams(); // Get the playerId from the URL params

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'https://api.example.com/players'; // Replace with your actual API URL

        // Fetch all players when the component mounts
        fetchAllPlayers(apiUrl)
            .then(players => {
                // Set the players in the state
                setThePlayers(players);
            })
            .catch(error => {
                console.error('Error fetching players:', error.message);
            });
    }, []); // Empty dependency array to execute effect only once when component mounts

    useEffect(() => {
        // Fetch the selected player when playerId changes
        if (playerId) {
            fetchPlayerById(playerId)
                .then(player => {
                    setSelectedPlayer(player);
                })
                .catch(error => {
                    console.error('Error fetching player:', error.message);
                    setSelectedPlayer(null); // Reset selectedPlayer if error occurs
                });
        }
    }, [playerId]); // Fetch when playerId changes

    const handlePlayerClick = (playerId) => {
        // Navigate to SinglePlayer component with the selected player's ID
        navigate(`/players/${playerId}`);
    };

    return (
        <div>
            <h1>All Players</h1>
            {selectedPlayer ? (
                <div>
                    <h2>Selected Player Details</h2>
                    <p>Name: {selectedPlayer.name}</p>
                    <p>Age: {selectedPlayer.age}</p>
                    {/* Render other player details as needed */}
                </div>
            ) : (
                <ul>
                    {thePlayers.map(player => (
                        <li key={player.id}>
                            {/* Pass the player's ID to handlePlayerClick */}
                            <button onClick={() => handlePlayerClick(player.id)}>
                                {player.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
<div>
{
    players.map((player)=>{
        return (
            <div>
                <h4>{player.name}</h4>
                ...whatever you want to display
            </div>
        )
    })
}
</div>

export default AllPlayers;