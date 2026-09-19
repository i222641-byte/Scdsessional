const button = document.getElementById('changeButton');
const title = document.getElementById('title');

button.addEventListener('click', () => {
  title.textContent = 'You clicked the button!';
});
