var tracker = 0;

class listItem {
    itemID;
    itemName;
    quantity;
} 

function loadList() {
   
}

function saveList() {
            
}

function AddItem(food, quant) {

    //initialize values
    var divElement = document.createElement('div');
    var item = new listItem();
    item.itemID = ++this.tracker;
    item.itemName=food;
    item.quantity = quant;

    //This code creates the div element out of the object
    divElement.className="listItem";
    divElement.insertAdjacentHTML("beforeend", item.itemID + ". " + item.itemName + ", " + item.quantity);
    divElement.insertAdjacentHTML("beforeend", "<input type='checkbox' class='checkb'></input><button class='deleteB'></button>");

    //inserts the div into the list on the webpage
    var list = document.querySelector('.listSection');
    list.appendChild(divElement);
}

function removeItem(section) {
    
    
}