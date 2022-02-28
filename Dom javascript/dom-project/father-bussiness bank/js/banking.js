document.getElementById('deposit-handler').addEventListener('click', function(){
    const depositfiled = document.getElementById('deposit-input');
    const depositInputText = depositfiled.value;
    const depositInput = parseFloat(depositInputText);
    
    const depositAmount = document.getElementById('deposit-amount');
   const currentAmounttext = depositAmount.innerText;
   const currentAmount = parseFloat(currentAmounttext);
    const presentAmount = currentAmount + depositInput;
    depositAmount.innerText = presentAmount;

    // update accout blance
    balanceTotalText = document.getElementById('balance-amount');
    balanceTotal = parseFloat(balanceTotalText.innerText);
    balanceTotalText.innerText = balanceTotal + depositInput;
    



    depositfiled.value = '';

    
})
document.getElementById('withdraw-handler').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmount = parseFloat(withdrawInput.value);
    console.log(withdrawInputAmount);
})