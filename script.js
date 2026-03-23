const API_URL = "https://www.freetogame.com/api/games";

async function fetchGames() {
    const grid = document.getElementById('game-grid');

    try {
        const response = await fetch(API_URL);
        const games = await response.json();

        // Clear the grid
        grid.innerHTML = "";

        // Display the first 50 games from the API
        games.slice(0, 50).forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';

            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <div class="game-info">
                    <span class="game-title">${game.title}</span>
                    <span class="game-genre">${game.genre}</span>
                </div>
            `;

            // Clicking a card takes you to the game
            card.onclick = () => {
                window.open(game.game_url, '_blank');
            };

            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching games:", error);
        grid.innerHTML = "<p>Failed to load games. Check your connection.</p>";
    }
}

// Start the fetch when the page loads
fetchGames();
