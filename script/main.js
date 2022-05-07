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

// EMPTY OBJECT AND EMPTY ARRAY
let userInfo = {
    name:  null,
    surname: null,
    age: null,
    selectedRelationship: null
}
let userInfoArr = [];

// SELECT
for (let i = 0; i < arrSelectRelationship.length; i++) {
    let elRelationOptions = document.createElement("option");
    elRelationOptions.textContent = arrSelectRelationship[i];
    elRelationOptions.value = arrSelectRelationship[i];
    elSelectRelation.append(elRelationOptions);
}

// USER SUBMIT
elSubmitBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

    let userName = elNameInput.value.trim().toLowerCase();
    let userSurname = elSurnameInput.value.trim().toLowerCase();
    let userAge = Number(elAgeInput.value.trim());
    let userRelationship = elSelectRelation.value;

    // USER AGE IF STATEMENT
    // if (userAge = !Number(userAge)) {
    //     userAge = "not a number";
    //     elAgeInput.value = "Write number!";
    //     elAgeInput.style.borderColor = "red";
    //     return;
    // } else {
    //     userInfo.age = userAge;
    // }

    // INCLUDING USER INPUT TO OBJECT
    userInfo.name = userName;
    userInfo.surname = userSurname;
    userInfo.age = userAge;
    userInfo.selectedRelationship = userRelationship;
    console.log(userInfo);
    userInfoArr = Object.entries(userInfo);
    console.log(userInfoArr);


    for (let i = 0; i < userInfoArr.length; i++ ) {
        let elReadyItems = document.createElement("li");
        let elDeleteBtn = document.createElement("button");
        // let horizontalLine = document.createElement("hr");
        elReadyItems.textContent = userInfoArr[i];
        elReadyItems.value = userInfoArr[i];
        elReadyList.append(elReadyItems);
    }

})

