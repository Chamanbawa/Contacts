'use strict';

function onEvent(event, selector, callback) {

    return selector.addEventListener(event, callback);

}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);

}


function print(arg) {
    console.log(arg);
}



//---------------Working in the Backend---------------------------

class Contact {
    #name;
    #city;
    #email;

    constructor(name, city, email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }
    set name(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set city(city) {
        this.#city = city;
    }
    get city() {
        return this.#city;
    }
    set email(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }

}

// --------------------FrontEnd--------------------------

const add = select('.create');
const middle = select('.middle');
const info = select('.info');
const number = select('.number');
const input = select('.input');
const index = [];

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;



function listContact() {
    
    
    // ------------------Splitting values-----------------------
    
    let str = input.value;

    const trimming = str.split(',').map(element => element.trim());
    
    if (trimming.length === 3){
        if (!emailRegex.test(trimming[2])){
            info.innerText = 'Please Enter valid Email!'
        } else{
            
            let contact = new Contact(trimming[0], trimming[1], trimming[2]);
            index.push(contact);

            // ------------------NewDiv-----------------------
            
            let newDiv = document.createElement("div");
            
            middle.appendChild(newDiv);
            newDiv.classList.add('frame');
            newDiv.style.backgroundColor = ' #757373';
            
            let userName = document.createElement("p");
            newDiv.appendChild(userName);
            userName.innerText = `Name:${contact.name}`;
            
            let userCity = document.createElement("p");
            newDiv.appendChild(userCity);
            userCity.innerText = `City:${contact.city}`;
            
            let userEmail = document.createElement("p");
            newDiv.appendChild(userEmail);
            userEmail.innerText = `Email:${contact.email}`;
            
            input.value = '';
            

onEvent('click',newDiv,function() {
  newDiv.remove();

    });             
        }
        
    } else {
        info.innerText = 'Please Enter Full Details!';
    }
    
}
function savedContacts() {
    number.innerText = `Saved Contacts:${index.length}`
}


onEvent('click', add, function () {
    event.preventDefault();


    if (index.length < 15 && input.value !== '') {
        info.innerText = "";

        listContact()
        savedContacts();
        print('koosa');

    } else if (input.value === '') {
        info.innerText = 'Please Input Details';
    } else if (index.length > 5){
        info.innerText = 'Memory is Full!';
    } else {
        info.innerText = 'Invalid Input';
    }
});

