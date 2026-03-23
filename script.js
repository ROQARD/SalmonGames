// The Endpoint from your list
const API_URL = "https://www.freetogame.com/api/games?platform=browser";

// We use a public proxy to bypass the CORS block
const PROXY = "https://corsproxy.io/?"; 

async function fetchSalmonGames() {
    const grid = document.getElementById('game-grid');
    
    try {
        // Combine Proxy + API URL
        const response = await fetch(PROXY + encodeURIComponent(API_URL));
        
        if (!response.ok) throw new Error("API Limit reached or blocked");
        
        const games = await response.json();
        grid.innerHTML = ""; // Clear the "Failed to load" message

        // Take the top 30 Browser games
        games.slice(0, 30).forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            
            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <div class="game-info">
                    <span class="game-title">${game.title}</span>
                    <span class="game-genre">${game.genre}</span>
                </div>
            `;

            // Clicking opens the game URL
            card.onclick = () => {
                window.open(game.game_url, '_blank');
            };

            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Salmon Games Error:", error);
        grid.innerHTML = `<p>Salmon Games is having trouble jumping upstream. <br> Error: ${error.message}</p>`;
    }
}

fetchSalmonGames();
