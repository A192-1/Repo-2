//Get Modal Element
let modal = document.getElementById("modal_div");

//Get modal button
var modal_btn = document.getElementById("modal_btn");

//Close modal button
let close_btn = document.getElementById("close_btn");

//Event open modal
modal_btn.addEventListener('click' , openModal);

//Event close modal
close_btn.addEventListener("click" , closeModal);

//Open Home modal
function openModal(){
modal.style.display = "block";
}

//Close Home modal
function closeModal(){
modal.style.display = "none";
}



// object1
let office1 = {SQ: "21AS" , CSL: "Adam" , Email: "adam@us.mil" , Phone:"707-111-111A"};

//SQ object2
let office2 = {SQ: "60CS" , CSL: "Mike" , Email: "mike@us.mil" , Phone:"707-111-111B"};

//base array
let baseA = [office1 , office2];

//JS to JSON
let baseA_JSON = JSON.stringify(baseA);

//JSON to store
localStorage.setItem("baseA_data", baseA_JSON);

//Retrieve - get JSON data
let text1 = localStorage.getItem("baseA_data");

// data to text
let obj1 = JSON.parse(text1);

console.log(obj1);


//data output to CSL_ID
let ID_input = document.querySelector("#CSL_ID");


//data ouput to email
let email_input = document.querySelector("#email");

// data output to telephone
let phone_input =document.querySelector("#phone");


//data for office1
let sq1 = document.querySelector("#sq-1")
sq1.addEventListener('click' , function(){
    ID_input.value = obj1[0].CSL;
    email_input.value = obj1[0].Email;
    phone_input.value = obj1[0].Phone;
});

//data for office2
let sql2 = document.querySelector("#sq-2")
sql2.addEventListener('click' , function (){
    ID_input.value = obj1[1].CSL;
    email_input.value = obj1[1].Email;
    phone_input.value = obj1[1].Phone;
});


//clear CSL input box
let clear_CSL = document.querySelector('#CSL_ID');

//clear email input box
let clear_email = document.querySelector('#email');

//clear phone input box
let clear_phone = document.querySelector('#phone');


/*
//clear button
let inputs = document.getElementsByTagName("input");
console.log(inputs)
let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click' , function(){
    inputs.forEach(input => input.value = '');
    
});
*/

//clear button2


