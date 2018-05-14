var createList = document.addEventListener('click', function showMenu(event){
    var hideMenu = document.getElementsByClassName('primero')[0];
    hideMenu.style.display = 'none';
    var showMenu = document.getElementsByClassName('box')[0];
    showMenu.style.display = "block";
});