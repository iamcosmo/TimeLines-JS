// script.js
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    const currentYearDiv = document.querySelector('.current-year');

    items.forEach((item, index) => {
        const circle = item.querySelector('.circle');
        const line = item.querySelector('.line');
        circle.style.backgroundColor = 'lightgray';
        if (line) {
            line.style.backgroundColor = 'lightgray';
        }
    });

    currentYearDiv.textContent = items[0].getAttribute('data-year');
    dynamicText.textContent = items[0].getAttribute('data-text');
});


document.addEventListener('wheel', function(event) {
    const items = document.querySelectorAll('.timeline-item');
    const currentYearDiv = document.querySelector('.current-year');
    const dynamicText = document.getElementById('dynamic-text');
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
            nextCircle.style.backgroundColor = '#4b99ba';
            if (nextLine) {
                nextLine.style.backgroundColor = '#4b99ba';
            }
            currentYearDiv.textContent = nextItem.getAttribute('data-year');
            dynamicText.textContent = nextItem.getAttribute('data-text');
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
            // currentYearDiv.textContent = currentFilledIndex > 0 
            //     ? items[currentFilledIndex - 1].getAttribute('data-year') 
            //     : items[0].getAttribute('data-year');



                const previousPreviousItem = items[currentFilledIndex - 1];
                const previousPreviousCircle = previousPreviousItem.querySelector('.circle');
                const previousPreviousLine = previousPreviousItem.querySelector('.line');
                if (previousPreviousCircle) {
                    previousPreviousCircle.classList.add('lightgray');
                }
                if (previousPreviousLine) {
                    previousPreviousLine.classList.add('lightgray');
                }
                currentYearDiv.textContent = previousPreviousItem.getAttribute('data-year');
                dynamicText.textContent = previousPreviousItem.getAttribute('data-text');
        }
    }
});
