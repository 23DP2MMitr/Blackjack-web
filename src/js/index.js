// Set random rotation for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.floating-cards-section .card');
    
    cards.forEach(card => {
        const rotation = card.getAttribute('data-rotation') || Math.floor(Math.random() * 40 - 20);
        card.style.setProperty('--rotation', `${rotation}deg`);
    });
});
