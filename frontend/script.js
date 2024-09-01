// script.js
document.addEventListener('wheel', function(event) {
    const items = document.querySelectorAll('.timeline-item');
    const currentYearDiv = document.querySelector('.current-year');
    let currentFilledIndex = -1;

   
    for (let i = 0; i < items.length; i++) {
        const circle = items[i].querySelector('.circle');
        if (circle.style.backgroundColor === 'lightgray') {
            break;
        }
        currentFilledIndex = i;
    }

    if (event.deltaY > 0) {
   
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
