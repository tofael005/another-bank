/*  1. add event lisener button in deposit button
    2. get deposit amount to the input field 
    2-5 Convert deposite string amount number of a type
    3. clear deposit field getting the value
    4. get the previus deposit total
    5. Culculate new deposite total
    6. Current balance total
    7. Calculat total withdraw balance
*/
// Step- 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step- 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrwaAmountString = withdrawField.value;
    const newWithdrwaAmount = parseFloat(newWithdrwaAmountString)

    // Step- 3
    withdrawField.value = '';

    // Step- 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString)


    // Step- 5
    const newWithdrawTotal = previusWithdrawTotal + newWithdrwaAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;


    // Step- 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previusBalanceTotalAmountString = balanceTotalElement.innerText;
    const previusBalanceTotalAmount = parseFloat(previusBalanceTotalAmountString);


    // Step- 7
    const newBalanceTotal = previusBalanceTotalAmount - newWithdrwaAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})