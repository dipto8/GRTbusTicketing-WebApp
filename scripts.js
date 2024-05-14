let selectedSeats = [];

function handleClick(event) {

   
    const id = event.target.id;
  if (selectedSeats.length >= 4) {
    return;
  }

  if (!selectedSeats.includes(id)) {
    selectedSeats.push(id);
    addbackgroundColor(id);
  } else {
    return;
  }


  // Total seat
  const totalSeatElement = document.getElementById("total-seat");
  const totalSeatElementText = totalSeatElement.innerText;
  const currentSeat = parseInt(totalSeatElementText);
  const updateSeat = currentSeat - 1;
  totalSeatElement.innerText = updateSeat;
  // selected seat
  const selectedseatElement = document.getElementById("selected-seats");
  const selectedseatElementText = selectedseatElement.innerText;
  const currentSelected = parseInt(selectedseatElementText);
  const totalSeatSelected = currentSelected + 1;
  selectedseatElement.innerText = totalSeatSelected;

  // Total-price
  const totalpriceElement = document.getElementById("Total-price");
  const totalpriceElementText = totalpriceElement.innerText;
  const currentTotalPrice = parseInt(totalpriceElementText);
  const updatedPrice = currentTotalPrice + 12;
  totalpriceElement.innerText = updatedPrice;

  const seatName = document.getElementById('selected')
  const seatNameField = seatName.innerText

  seatNameField.innerText = id;
  
}




// Get all elements with class 'kbd'
const kbdElements = document.querySelectorAll(".kbd");
for (const kbdElement of kbdElements) {
  kbdElement.addEventListener("click", handleClick);
}


const btn =document.getElementById('btn')
btn.addEventListener('click',function(){
    hideElementByID('header')
    hideElementByID('main')
    hideElementByID('foter')
    showElementByID('success')
   

})