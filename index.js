// Write your code here!

// Remove the <main id="main"> element
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and assign to variable `newHeader`
const newHeader = document.createElement('h1');

// Set its id to "victory"
newHeader.id = 'victory';

// Set the inner text with your name (replace YOUR-NAME with your real name)
newHeader.textContent = 'Ann Ngatia is the champion';

// Append it to the body
document.body.appendChild(newHeader);
