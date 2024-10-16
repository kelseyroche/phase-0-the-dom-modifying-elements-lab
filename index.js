// Write your code here!
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const newHeader = document.createElement('h1');

console.log('Before setting id:', newHeader.id); 
newHeader.id = 'victory';
console.log('After setting id:', newHeader.id);

newHeader.innerHTML = 'Arsenal is the champion'