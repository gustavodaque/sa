let isPlaying = false;

// Função para alternar reprodução
function togglePlay() {
    const playButton = document.querySelector('.player-bar button:nth-child(2)');
    isPlaying = !isPlaying;
    playButton.textContent = isPlaying ? '⏸️' : '⏯️';
}

// Função para avançar para a próxima música
function nextSong() {
    alert("Próxima música!");
}

// Função para voltar para a música anterior
function previousSong() {
    alert("Música anterior!");
}
