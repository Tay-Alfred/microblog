  // Function to generate a random delay between 0 and 5 seconds
  function getRandomDelay() {
    return Math.random() * 5 + "s";
}

// Function to generate a random left position between 5% and 85%
function getRandomLeft() {
    return Math.floor(Math.random() * 81) + 5 + "%";
}

// Create 17 arrows dynamically
for (let i = 0; i < 17; i++) {
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.style.left = getRandomLeft();
    arrow.style.animationDelay = getRandomDelay();
    document.body.appendChild(arrow);
}
