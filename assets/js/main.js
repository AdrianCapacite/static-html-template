document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  console.log('Hello from main.js');
})


document.getElementById('click-me').addEventListener('click', function() {
    // Random color
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.boxShadow = `0 0 64px 16px #${randomColor}`;
    this.innerText = 'You\'ve clicked me!';
})