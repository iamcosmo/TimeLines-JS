// script.js
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    const currentYearDiv = document.querySelector('.current-year');

    // Reset all circles and lines to their initial state
    items.forEach((item, index) => {
        const circle = item.querySelector('.circle');
        const line = item.querySelector('.line');
        circle.style.backgroundColor = 'lightgray';
        if (line) {
            line.style.backgroundColor = 'lightgray';
        }
    });

    // Ensure the first circle is the starting point
    currentYearDiv.textContent = items[0].getAttribute('data-year');
});

// Wheel event listener for scrolling animation
document.addEventListener('wheel', function(event) {
    const items = document.querySelectorAll('.timeline-item');
    const currentYearDiv = document.querySelector('.current-year');
    let currentFilledIndex = -1;

    // Find the current last filled circle
    for (let i = 0; i < items.length; i++) {
        const circle = items[i].querySelector('.circle');
        if (circle.style.backgroundColor === 'lightgray') {
            break;
        }
        currentFilledIndex = i;
    }

    if (event.deltaY > 0) {
        // Scroll down - fill the next item
        if (currentFilledIndex < items.length - 1) {
            const nextItem = items[currentFilledIndex + 1];
            const nextCircle = nextItem.querySelector('.circle');
            const nextLine = nextItem.querySelector('.line');
            nextCircle.style.backgroundColor = '#4CAF50';
            if (nextLine) {
                nextLine.style.backgroundColor = '#4CAF50';
            }
            currentYearDiv.textContent = nextItem.getAttribute('data-year');
        }
    } else {
        // Scroll up - unfill the current item
        if (currentFilledIndex >= 0) {
            const currentItem = items[currentFilledIndex];
            const currentCircle = currentItem.querySelector('.circle');
            const currentLine = currentItem.querySelector('.line');
            currentCircle.style.backgroundColor = 'lightgray';
            if (currentLine) {
                currentLine.style.backgroundColor = 'lightgray';
            }
            currentYearDiv.textContent = currentFilledIndex > 0 
                ? items[currentFilledIndex - 1].getAttribute('data-year') 
                : items[0].getAttribute('data-year');
        }
    }
});
