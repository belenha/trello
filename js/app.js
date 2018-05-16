// Versión 0.0.1 //

var show = function (){
    var hideMenu = document.getElementsByClassName('primero')[0];
    hideMenu.style.display = 'none';
    var showMenu = document.getElementsByClassName('box')[0];
    showMenu.style.display = "block";
};
var createList = document.getElementById('createList');
createList.addEventListener('click', show);

var save = document.getElementById('greenButton');
save.addEventListener('click', function (){
    var cardTtl = document.getElementById('input-list').value;
    // document.getElementById('input-list').value = '';
});

// Versión 0.0.2 //

var cardOne = function (){
    var createdCard = document.getElementById('newCard');    
    var inputValue = document.getElementById('input-list').value;
    // document.getElementById('input-list').value = '';
    var newText = document.createTextNode(inputValue);
    var titleH4 = document.getElementById('cardText');
    titleH4.appendChild(newText);
    var esconde = document.getElementById('hide');
    esconde.style.display = 'none';
    createdCard.style.display = 'block';
};
var showNewBox = document.getElementById('greenButton');
showNewBox.addEventListener('click', cardOne);

// Versión 0.0.3 //

var cardTwo = function (){
    var secondCard = document.getElementById('secondCard')
    var inputValueTwo = document.getElementById('input-list').value;
    var secondCardTitle = document.createTextNode(inputValueTwo);
    var secondTitleH4 = document.getElementById('cardTitle');
    secondTitleH4.appendChild(secondCardTitle);
    var write = document.getElementById('whiteArea');
    var otherAddBtn = document.getElementById('addBtn');
    var closeAgain = document.getElementById('secondClose');
    var noShow = document.getElementById('newCard');
    noShow.style.display = 'none';
    secondCard.style.display = 'block';
    write.focus();// Versión 0.0.4 //
};

var task = document.getElementById('addWhiteArea');
task.addEventListener('click', cardTwo);

// Versión 0.0.4 //

var lastCard = function (){
    var pFather = document.getElementById('cardTitle');
    var newP = document.createElement('p');
    var textAreaValue = document.getElementById('whiteArea').value;
    var taskName = document.createTextNode(textAreaValue);
    pFather.appendChild(newP);
    newP.appendChild(taskName);
    var writeTwo = document.getElementById('whiteArea');
    document.getElementById('whiteArea').value = '';
    var secondAddBtn = document.getElementById('addBtn');
    var finalClose = document.getElementById('secondClose');
}

var bigCard = document.getElementById('addBtn');
bigCard.addEventListener ('click',lastCard);