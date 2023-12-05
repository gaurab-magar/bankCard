document.addEventListener('DOMContentLoaded',function(){
  let inputValues = document.getElementById("cd-name");
  let displayValue = document.getElementById("um");
  let cardNum = document.getElementById('cd-num');
  let displayNum = document.getElementById('dis-num');
  let cvc = document.getElementById('cvc');
  let displaycvc = document.getElementById('dis-cvc');

  let process = document.getElementById('thankYou');
  let button = document.getElementById('btn');

    inputValues.addEventListener('input',function(){
      displayValue.value = inputValues.value;
    })

    cardNum.addEventListener("input",function(){
      displayNum.value = cardNum.value;
    })

    cvc.addEventListener('input',function(){
      displaycvc.value = cvc.value;
    })

    button.addEventListener('click',function(){
      if(displayValue.value == '' || displayNum.value == '' || displaycvc.value == ''){
        alert('Please fill all fields!')}
        else {
          process.style.display = "block";          
          document.getElementById("login").style.display = "none";
          
        }

    })
})
