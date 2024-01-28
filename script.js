const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const heartContainer = document.getElementById('heartContainer');

let collided = false;

function createHearts() {
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('img');
        heart.src = 'heart.png';
        heart.style.left = `${Math.random() * window.innerWidth}px`; // Случайная позиция по горизонтали
        heart.style.animationDelay = `${Math.random() * 2}s`; // Задержка 
        heartContainer.appendChild(heart);
    }
}

function moveitems() {
    const position1 = parseInt(item1.style.left) || 0;
    const position2 = parseInt(item2.style.right) || 0;

    item1.style.left = position1 + 2 + 'px';
    item2.style.right = position2 + 2 + 'px';

    if (position1 >= (window.innerWidth / 2 - 120) && !collided) {
        collided = true;
        item1.style.display = 'none';
        item2.style.display = 'none';
        item3.style.display = 'block';
        heartContainer.style.display = 'block';
        createHearts();

        clearInterval(animation);
    }
}

const animation = setInterval(moveitems, 50); 