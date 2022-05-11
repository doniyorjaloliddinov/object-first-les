// VARIABLES
let elMainForm = document.querySelector("#js-main-form");
let elNameInput = elMainForm.querySelector(".js-name");
let elSurnameInput = elMainForm.querySelector(".js-surname");
let elAgeInput = elMainForm.querySelector(".js-age");
let elSelectRelation = elMainForm.querySelector(".js-select-relation");
let elSubmitBtn = elMainForm.querySelector(".js-submit-btn");
let elReadyList = document.querySelector(".js-ready-list");


// ARRAYS
let arrSelectRelationship = ["friend","relative","strenger","monster","familiar"];

//EMPTY ARRAY
let userInfoArr = [];

// SELECT REALATION
for (let i = 0; i < arrSelectRelationship.length; i++) {
    let elRelationOptions = document.createElement("option");
    elRelationOptions.textContent = arrSelectRelationship[i];
    elRelationOptions.value = arrSelectRelationship[i];
    elSelectRelation.append(elRelationOptions);
}

// FUNCTION PUSHING TO ARRAY
let pushObjectToArray =  function(userName, userSurname, userAge, userRelationship) {
    userInfoArr.push({
        name: userName,
        surname: userSurname,
        age: userAge,
        relationship: userRelationship
    })
}

// FORM CLEARING FIELDS FUNCTION
let clearInputsInHtml = function() {
    elNameInput.value = "";
    elSurnameInput.value = "";
    elAgeInput.value = "";

    elNameInput.focus();
}
elNameInput.focus();

let readyListFunction = function() {
    for (let i = 0; i < userInfoArr.length; i++ ) {
        let elReadyItems = createElem("li", "", "ready-items");


        let elName = createElem("p", `Name: ${userInfoArr[i].name}`, "username");

        let elSurname = createElem("p", `Surname: ${userInfoArr[i].surname}`, "user-surname");

        let elAge = createElem("p", `Age: ${userInfoArr[i].age}`, "user-surname");

        let elRelation = createElem("p", `Relation: ${userInfoArr[i].relationship}`, "user-surname");

        let elDeleteBtn = createElem("button", "", "delete-btn");
        
        let elDeleteImg = createElem("img", "", "delete-img", "./img/delete-img.png");
        
        elReadyItems.append(elName,elSurname,elAge,elRelation,elDeleteBtn);
        elDeleteBtn.append(elDeleteImg);
        elReadyList.append(elReadyItems);
        return;
    }
}


// USER SUBMIT
elSubmitBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    
    let userName = elNameInput.value.trim().toLowerCase();
    let userSurname = elSurnameInput.value.trim().toLowerCase();
    let userAge = Number(elAgeInput.value.trim());
    let userRelationship = elSelectRelation.value;
    
    pushObjectToArray(userName, userSurname, userAge, userRelationship);
    readyListFunction();        
    clearInputsInHtml();
})


// DELETE LIST BTN
// elDeleteBtn.addEventListener("click", function(evt) {
//     evt.preventDefault();

// //    delete elReadyItems;
//     elReadyList.removeChild(elReadyItems);   
// })
