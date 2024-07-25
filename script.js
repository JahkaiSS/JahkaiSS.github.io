let countInit = 0

let myOutputBox = document.getElementById('num')
let outputItem = document.createElement('h1');

myOutputBox.appendChild(outputItem);

function countUp(){
    countInit += 1;
    console.log(countInit);
    outputItem.textContent = countInit;
}





