// Calculator Program
   const display =document.getElementById("display") ;  
   
//    we have 3 function to display
function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}
 
function calculate(){
    try{
        display.value = eval(display.value); 
    }

    catch(error){
        display.value = "Error"
    }
   
}

