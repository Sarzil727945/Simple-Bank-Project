// deposit part
document.getElementById('btn-deposit').addEventListener('click', function(){
     // inputValueInOutput function call 
     const inputDeposit = inputValueInOutput('input-deposit');
     
     if(isNaN(inputDeposit)){
     alert('Please give your input number!!');
     return;
     }
     if(inputDeposit < 0){
     alert('Your value is invalid!!')
     return;
     }
     if(inputDeposit == 0){
     alert('Your value is null!!')
     return;
     }
     
     // value push in deposit 
     const depositTotalText = document.getElementById('deposit-total');
     const depositTotalNumber = Number(depositTotalText.innerText);
     depositTotalText.innerText = depositTotalNumber + inputDeposit;
     
     // value push in balance
     const balanceTotalText = document.getElementById('balance-total');
     const balanceTotalNumber = Number(balanceTotalText.innerText);
     balanceTotalText.innerText = balanceTotalNumber + inputDeposit;
     
})

// withdraw part 
document.getElementById('btn-withdraw').addEventListener('click', function(){
     // inputValueInOutput function call 
     const inputWithdraw = inputValueInOutput('input-withdraw');

     if(isNaN(inputWithdraw)){
     alert('Please give your input number!!');
     return;
     }
     if(inputWithdraw < 0){
     alert('Your value is invalid!!')
     return;
     }
     if(inputWithdraw == 0){
     alert('Your value is null!!')
     return;
     } 
     
     // value push in Withdraw 
     const withdrawTotalText = document.getElementById('withdraw-total');
     const withdrawTotalNumber = Number(withdrawTotalText.innerText);
     
     // value push in balance
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalNumber = Number(balanceTotal.innerText);
     if(balanceTotalNumber < inputWithdraw){
          alert('This balance is not available!!');
          return;
     }
     withdrawTotalText.innerText =  withdrawTotalNumber + inputWithdraw;
     balanceTotal.innerText = balanceTotalNumber - inputWithdraw;
})

// inputValueInOutput function
function inputValueInOutput(inputId){
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputNumber = +inputString;
    input.value ='';
    
    return inputNumber;

}