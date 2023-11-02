let elements=["uthaya","soundarya","sridhar","saravanan","bala","kanil","aanira","arina"]
let input_elements=document.querySelector("#element")
input_elements.textContent=elements.join(', ');
 
function map() {
    let mappedElement = elements.map(value => value.toUpperCase());
    let contentWrapper = document.getElementById("contentWrapper");
    contentWrapper.textContent = mappedElement.join(',  ');
}

function filter() {
    let valueMap = elements.filter(q => q.length > 5);
    let contentWrapper = document.getElementById("contentWrapper");
    contentWrapper.textContent = valueMap.join(' ');
}

function reduce() {
    let val = elements.reduce((total, el) => total + el);
    let contentWrapper = document.getElementById("contentWrapper");
    contentWrapper.textContent = val;
}
function modify() {
    let contentWrapper = document.getElementById("contentWrapper");
    contentWrapper.textContent = elements.join(' ');
    console.log(contentWrapper);
}
