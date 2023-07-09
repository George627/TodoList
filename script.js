//Javascript for the two buttons "Add" & "Delete".
var addButton = document.getElementById("add");

var deleteButton = document.getElementById("delete");


//Gets the user input in the texbox.
var newItem = document.getElementById("input");


//List that contains the items.
var list = document.querySelector("ul");


//An event that will trigger when the button is pressed.
//This will add a item to the list using the newItem 
//variable on line 7.
addButton.addEventListener("click", function(){

    //A new "list item" variable is created.
    var item = document.createElement("li"); 
    item.appendChild(document.createTextNode(newItem.value));
    
    //Adds item to the list.
    list.appendChild(item);
})


//An event that will trigger when the button is pressed.
//This will delete a item from the list using the newItem 
//variable on line 7.
deleteButton.addEventListener("click", function(){   
    
    //Uses the function isEqual() to check to see 
    //if the item is in the list.
    var answer = isEqual(list.children, newItem);


    //A placeholder that keeps track of the number of items is in the list.
    var placeholder = list.children;


    //If statement that checks if the answer variable is true or false.
    //If true, then the item will be removed from the list.
    //If false, then a statement will be printed in the console log.
    if(answer){
    
        
        //A for-loop that searches for the word in the list.
        //Once found, the word will be removed from the list.
        for(var i = 0; i < placeholder.length; i++){
            if(placeholder[i].innerHTML === newItem.value){
                list.removeChild(list.children[i]);
            }
        }
    }

    else{
        console.log("Cant remove item or item doesn't exist.");
    }
    
})

//Function that checks to see if the user's input is in the list.
function isEqual(array, ans){
    for(var i = 0; i < array.length; i++){

        if(array[i].innerHTML === ans.value){
            return true;
        }
    }

    return false;
}

