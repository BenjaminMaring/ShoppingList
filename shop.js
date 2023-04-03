function loadList() {
   
}

function saveList() {
            
}

function addItem(item, quantity) {

    var divElement = document.createElement('h3');
    
    var textNode = document.createTextNode(item + " " + quantity);

    divElement.appendChild(textNode);
    var add = document.querySelector('.listSection');
    add.appendChild(divElement);
    
}