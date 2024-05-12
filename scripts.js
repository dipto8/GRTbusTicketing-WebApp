
// Function to handle click event
function handleClick(event) {
    // Get the ID of the clicked element
    const id = event.target.id;
     addbackgroundColor(id)
     

     // Total seat 
     const totalSeatElement = document.getElementById('total-seat')
     const totalSeatElementText = totalSeatElement.innerText; 
     const currentSeat = parseInt(totalSeatElementText);
     const updateSeat = currentSeat - 1 ;
     totalSeatElement.innerText = updateSeat
     // selected seat
     const selectedseatElement = document.getElementById('selected-seats')
      const selectedseatElementText = selectedseatElement.innerText
      const currentSelected = parseInt(selectedseatElementText);
      const totalSeatSelected = currentSelected + 1
       selectedseatElement.innerText = totalSeatSelected
       
     // Total-price
     const totalpriceElement = document.getElementById('Total-price')
     const totalpriceElementText = totalpriceElement.innerText
     const currentTotalPrice = parseInt(totalpriceElementText);
     const updatedPrice =  currentTotalPrice + 12
     totalpriceElement.innerText = updatedPrice
    
}
  
  // Get all elements with class 'kbd'
  const kbdElements = document.querySelectorAll('.kbd');
   for(const kbdElement of kbdElements ){
    kbdElement.addEventListener('click', handleClick)
   }

  
