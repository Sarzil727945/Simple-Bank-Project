document.getElementById('btn-submit').addEventListener('click', function(){
     const emailValue = inputValueAndOutput('input-email');
     const passwordValue = inputValueAndOutput('input-password');
     
     if(emailValue == 'sarzilmuntaha@gmail.com' && passwordValue == '12345'){
       window.location.href = "calculateBankMoney.html";
     }
     else{
       alert('Your information is incorrect!!.Please enter correct information');
     }
  })
  function inputValueAndOutput(inputId){
       const input = document.getElementById(inputId);
       const inputValue = input.value;
       input.value ='';
       return inputValue;
  }