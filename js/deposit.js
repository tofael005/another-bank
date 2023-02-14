/* 
    1. add event lisener button in deposit button
    2. get deposit amount to the input field 
    2-5 Convert deposite string amount number of a type
    3. clear deposit field getting the value
    4. get the previus deposit total
    5. Culculate new deposite total
    6. Current balance total
    7. caculat total balance



*/
// Step- 1. add event lisener button in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step- 2. get deposit amount to the input field 
    const depositField = document.getElementById('deposit-filed');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step - 3
    depositField.value = '';

    // Step- 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    // Step - 5
    const newDepositeTotal = previusDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositeTotal;

    // Step- 6
    const balanceTotalElement = document.getElementById('balance-total')
    const previusBalanceTotalString = balanceTotalElement.innerText;
    const previusBalanceTotalAmount = parseFloat(previusBalanceTotalString);

    // Step- 7
    const newBalanceTotal = previusBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})