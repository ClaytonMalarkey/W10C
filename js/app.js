// Get the elements by their IDs
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');
const element4 = document.getElementById('element4');
const element5 = document.getElementById('element5');

// Event listener for when the user clicks an element
element1.addEventListener('click', () => {
    element1.style.backgroundColor = 'lightblue';
});

// Event listener for when the user double clicks an element
element2.addEventListener('dblclick', () => {
    element2.innerHTML = 'Double Clicked!';
    element2.style.color = 'red';
});

// Event listener for when the user hovers over an element
element3.addEventListener('mouseenter', () => {
    element3.style.fontWeight = 'bold';
});

element3.addEventListener('mouseleave', () => {
    element3.style.fontWeight = 'normal';
});

// Event listener for when the user presses the space key on their keyboard
document.body.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        document.body.style.backgroundColor = 'lightgray';
    }
});

document.body.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
        document.body.style.backgroundColor = 'white';
    }
});
// Function to change the background color of the body
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'orange'; // Change the background color to orange (you can use any color you like)
}

// Set a timeout to trigger the background color change after 15 seconds (15000 milliseconds)
setTimeout(changeBackgroundColor, 15000);

// Function to move an element randomly
function moveElementRandomly(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Select the element you want to move (for example, element1)
const element6 = document.getElementById('element1');

// Set an interval to move the element every 3 seconds (3000 milliseconds)
setInterval(() => {
    moveElementRandomly(element6);
}, 3000);
// Function to move an element randomly
function moveElementRandomly(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Select the element you want to move (for example, element1)
const element7 = document.getElementById('element1');

// Set an interval to move the element every 3 seconds (3000 milliseconds)
setInterval(() => {
    moveElementRandomly(element7);
}, 3000);