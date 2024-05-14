function hideElementByID(elementID){
    const element =document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')

}

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
// discount


  //user Validation
  function validation(){
      const userName =document.getElementById('name')
      const number = document.getElementById('number')
      const userEmail = document.getElementById('email')
      const btn =document.getElementById('btn')
      // get input Value
      const nameinput = userName.value
      const numberinput = number.value
      const emailInput= userEmail.value
    
     if( nameinput !=='' && numberinput !=='' && emailInput !=='' ){
        btn.removeAttribute('disabled')
     }


  }

  function dis(){


    const discountField = document.getElementById('discount')
    const discountFieldText = discountField.innerText
    const discountFieldTextStr =discountFieldText.toString()
    if( discountFieldTextStr == 'New15'){
       let grandTotal = updatedPrice - updatedPrice*2.25
       console.log(grandTotal)
       
   
    }
   }
