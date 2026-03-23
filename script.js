// Example list of games. Add your Defold exports here!
const games = [
    {
        title: "Salmon Leap",
        icon: "assets/icons/salmon-leap.png",
        url: "games/salmon-leap/index.html"
    },
    {
        title: "Bubble Pop",
        icon: "assets/icons/bubble-pop.png",
        url: "games/bubble-pop/index.html"
    }
];

const grid = document.getElementById('game-grid');
const modal = document.getElementById('game-modal');
const frame = document.getElementById('game-frame');
const closeBtn = document.querySelector('.close-button');

// Render the grid
games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <img src="${game.icon}" alt="${game.title}">
        <span>${game.title}</span>
    `;
    card.onclick = () => {
        frame.src = game.url;
        modal.style.display = 'block';
    };
    grid.appendChild(card);
});

// Close functionality
closeBtn.onclick = () => {
    modal.style.display = 'none';
    frame.src = ""; // Stop the game audio/logic when closed
};
