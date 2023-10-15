const stack = [];
const stackContainer = document.getElementById('stack');
const pushButton = document.getElementById('push-button');
const popButton = document.getElementById('pop-button');
const clearButton = document.getElementById('clear-button');
const itemInput = document.getElementById('item-input');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

pushButton.addEventListener('click', pushItem);
popButton.addEventListener('click', popItem);
clearButton.addEventListener('click', clearStack);

function pushItem() {
    const itemValue = itemInput.value.trim();
    if (itemValue === '') return;

    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.textContent = itemValue;
    itemElement.style.backgroundColor = getRandomColor();
    stack.unshift(itemValue); // Add items to the beginning of the stack
    stackContainer.insertBefore(itemElement, stackContainer.firstChild);
    itemInput.value = '';
}

function popItem() {
    if (stack.length === 0) return;
    stack.shift(); // Remove items from the beginning of the stack
    const removedItem = stackContainer.firstChild;
    stackContainer.removeChild(removedItem);
}

function clearStack() {
    while (stack.length > 0) {
        stack.shift();
        const removedItem = stackContainer.firstChild;
        stackContainer.removeChild(removedItem);
    }
}
