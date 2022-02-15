function getRandomPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinString = pin + '';
   if(pinString.length == 4){
       return pin;
   }
   else{
    //    console.log('got calling 3 pin');
       return getRandomPin();
   }
}
function generatePin(){
    const pin = getRandomPin();
    document.getElementById('pinInput').value = pin;
}

document.getElementById('inputNumber').addEventListener('click', function(event){
    const number = event.target.innerText;
    // console.log(number);
    const numberInput = document.getElementById('display-input');
    if(isNaN(number)){
        if(number == 'C'){
            numberInput.value = '';
        }
    }
    else{
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber;
    }
    
})

function verifyPin(){
const pinPlus = document.getElementById('pinInput').value;
const pinTyped = document.getElementById('display-input').value;
let pinCheck = document.getElementById('pin-success');
let pinFailed = document.getElementById('pin-failed');
    if(pinPlus === pinTyped){
        pinCheck.style.display = 'block';
        pinFailed.style.display = 'none';
        // console.log('habijabi');
    }
    else{
        
        pinFailed.style.display = 'block';
        pinCheck.style.display = 'none';
        // console.log('failed');
    }
}