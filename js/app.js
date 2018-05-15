var show = function (){
    var hideMenu = document.getElementsByClassName('primero')[0];
    hideMenu.style.display = 'none';
    var showMenu = document.getElementsByClassName('box')[0];
    showMenu.style.display = "block";
};
var createList = document.getElementById('createList');
createList.addEventListener('click', show);
