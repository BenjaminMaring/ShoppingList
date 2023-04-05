var tracker = -1;

class listItem {
    itemID;
    itemName;
} 

function loadList() {
   
}

function saveList() {
            
}

function addItem(food, quantity) {

    //creates an object of listItem and assigns values
    var item = new listItem();
    item.itemID = tracker +1;
    item.itemName = food + " " + quantity;

    //Initialize the div that other elements will be added to
    var divElement = document.createElement('div');
    divElement.className = "listItem";

    //initializes and assign text into the parent div
    var pElement = document.createElement('p');
    var textNode = document.createTextNode(item.itemID + ". " + item.itemName);
    pElement.appendChild(textNode);

    //initialize the checkbox 
    var inputElement = document.createElement('input');
    inputElement.className = "checkbox";
    inputElement.type ="checkbox"

    //assigns the text and checkbox to the parent div
    divElement.appendChild(pElement);
    divElement.appendChild(inputElement);

    //inserts the div into the list on the webpage
    var list = document.querySelector('.listSection');
    list.appendChild(divElement);
}

function removeItem(section) {
    
    
}