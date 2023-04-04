class listItem {
    itemNum=0;
} 

function loadList() {
   
}

function saveList() {
            
}

function addItem(item, quantity) {

    var liElement = document.createElement('li');
    liElement.className = "listItem";

    var h3Element = document.createElement('p');
    var textNode = document.createTextNode(item + " " + quantity);
    h3Element.appendChild(textNode);

    var inputElement = document.createElement('input');
    inputElement.className = "checkbox";
    inputElement.type ="checkbox"

    liElement.appendChild(h3Element);
    liElement.appendChild(inputElement);

    var list = document.querySelector('.listSection');
    list.appendChild(liElement);
    
}

function removeItem(section) {
    var elementR = document.getElementById(section);
    
}