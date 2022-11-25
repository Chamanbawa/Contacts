

import { onEvent, getElement, select, print } from "./utils.js";
import Shape from "./Shape.js";



const create = select('.create');
const middle = select('.middle');
const info = select('.info');
const index = [];

onEvent('click', create, function () {
    event.preventDefault();

   
    if (index.length < 20) {
        info.innerText = "";
        let newIndex = new Shape(shape.value, color.value);
        index.push(newIndex);
        
        const elementOne = document.createElement("div");
        
        middle.appendChild(elementOne);
        elementOne.classList.add(shape.value);
        elementOne.style.backgroundColor = ' #757373';
        
        onEvent('click', elementOne, function () {

            
        });    
    } else {
        info.innerText = 'Storage is Full!';
    }  
}  
});    




