// SELECTOR FUNCTION
let selectorElem = function (selector, node = document) {
    return node.querySelector(selector);
}

// CREATE ELEMENT FUNCTION 
let createElem = function(elementName, textCont, classNam, src) {
    let element =  document.createElement(elementName);
    element.textContent = textCont;
    element.className = classNam;
    element.src = src;
    return element;
}

// CAPITILIZE FIRST LETTER
// let capitalize = function(letter) {
//     let text = letter.charAt(0).toUpperCase();
//     return text+letter;
// }
// let test1 = capitalize("doni")
// console.log(test1);