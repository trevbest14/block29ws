async function fetchAllPlayers(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch players');
        }
        const players = await response.json();
        return players;
    } catch (error) {
        console.error('Error fetching players:', error.message);
        throw error;
    }
}