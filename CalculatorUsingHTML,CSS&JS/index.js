let input ; 

 document.getElementById("inputBox").addEventListener("click",abc);

function abc(){
    document.getElementById("inputBox").style.backgroundColor="black";
}


let display = document.getElementById("inputBox");
let Buttons = document.querySelectorAll("Button");

let buttonsArray =Array.from(Buttons);

let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e) =>{
     
        if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string; 
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;    
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string; 
        }else{
            string += e.target.innerHTML;
            display.value = string;    
        };
    });

});