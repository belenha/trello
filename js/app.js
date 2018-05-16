var inputValue = document.getElementById('input-list').value;

var show = function (){
    var hideMenu = document.getElementsByClassName('primero')[0];
    hideMenu.style.display = 'none';
    var showMenu = document.getElementsByClassName('box')[0];
    showMenu.style.display = "block";
};
var createList = document.getElementById('createList');
createList.addEventListener('click', show);

// Versión 0.0.2 //

var save = document.getElementById('greenButton');
save.addEventListener('click', function (){
    var cardTtl = document.getElementById('input-list').value;
    // document.getElementById('input-list').value = '';
});

// Versión 0.0.3 //

var firstCard = function (){
var createdCard = document.getElementById('newCard');    
var inputValue = document.getElementById('input-list').value;
document.getElementById('input-list').value = '';
var newText = document.createTextNode(inputValue);
console.log(newText);
var titleH4 = document.getElementById('cardText');
titleH4.appendChild(newText);
var esconde = document.getElementById('hide');
esconde.style.display = 'none';
createdCard.style.display = 'block';
}
var showNewBox = document.getElementById('greenButton');
showNewBox.addEventListener('click', firstCard);
















    // addButton.addEventListener('click', function(){
    // var nodeText = document.createElement('p');
    // nodeText.appendChild(newText);
    // createdCard.appendChild(nodeText);

    // var addButton = document.createElement('button');
    // createdCard.appendChild(addButton);
    // addButton.type = 'submit';
    // var buttonName = document.createTextNode('Añadir una tarjeta');
    // addButton.appendChild(buttonName);

  // var firstCard = document.createElement('div');
        // // var writeArea = document.createElement('textarea');
        // var addGreenButton = document.createElement('button');
        // var close = document.createElement('button');
        // var dots = document.createElement('i');
        // var textGreenButton = document.createTextNode('Añadir una tarjeta...');
        // var textCloseButton = document.createTextNode('x');

        // createdCard.appendChild(firstCard);
        // firstCard.appendChild(nodeText);
        // // firstCard.appendChild(writeArea);
        // firstCard.appendChild(addGreenButton);
        // firstCard.appendChild(close);
        // firstCard.appendChild(dots);
        // addGreenButton.appendChild(textGreenButton);
        // close.appendChild(textCloseButton);

        // firstCard.setAttribute('class', 'box');