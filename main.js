// Game Database
const games = [
    { id: 'salmon-run', title: 'Salmon Run', color: '#ff7675' },
    { id: 'river-jump', title: 'River Jump', color: '#74b9ff' },
    { id: 'bear-escape', title: 'Bear Escape', color: '#55efc4' },
    { id: 'egg-collect', title: 'Egg Collect', color: '#ffeaa7' },
    { id: 'upstream', title: 'Upstream', color: '#a29bfe' },
    { id: 'hook-dodge', title: 'Hook Dodge', color: '#fab1a0' }
];

const grid = document.getElementById('grid');
const container = document.getElementById('game-container');
const closeBtn = document.getElementById('close-btn');

// 1. Create the UI Grid
games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div style="width:100%; height:80%; background:${game.color}"></div>
        <span>${game.title}</span>
    `;
    card.onclick = () => launchGame(game.id);
    grid.appendChild(card);
});

// 2. Phaser Game Logic
let phaserGame = null;

function launchGame(gameId) {
    container.style.display = 'block';
    
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-container',
        scene: {
            preload: preload,
            create: create
        }
    };

    phaserGame = new Phaser.Game(config);
}

function preload() {
    // Assets would go here
}

function create() {
    this.add.text(400, 300, 'SALMON ENGINE LOADING...', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    this.add.circle(400, 400, 50, 0xff7675);
}

// 3. Close Game
closeBtn.onclick = () => {
    container.style.display = 'none';
    if (phaserGame) {
        phaserGame.destroy(true);
        phaserGame = null;
    }
};
