function addbackgroundColor(elementID){
    const element =document.getElementById(elementID)
    element.classList.add('bg-lime-400')
}
function RemovebackgroundColor(elementID){
    const element =document.getElementById(elementID)
    element.classList.remove('bg-lime-400')
}

function getElement_TextByID(elementID){
    const element = document.getElementById(elementID);
    const elementText =  element.innerText;
    return elementText;
}

function setValue(elementID,value){
    const element = document.getElementById(elementID)
    element.innerText = value;
}