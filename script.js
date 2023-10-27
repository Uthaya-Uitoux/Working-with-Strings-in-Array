let elements=["uthaya","soundarya","sridhar","saravanan","bala","kanil","aanira","arina"]
let input_elements=document.querySelector("#element")
input_elements.textContent=elements.join(', ');
 
function map(){
    let mappedElement= elements.map( value => value.toUpperCase())
    //console.log(mappedValue);
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent=mappedElement;
 
}
function filter(){
    let valuemap= elements.filter(q =>q.length > 5)
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent=valuemap.join(' ');
}
function reduce(){
    let val= elements.reduce((total,el) => total+el)
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent=val;
}
function modify(){
    elements.forEach(element => {
        let upperCase=document.querySelector("#uppercase")
    upperCase.textContent=elements;
    console.log(element)
    });
}