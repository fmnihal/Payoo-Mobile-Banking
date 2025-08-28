document.getElementById('card-add-money').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='block';
    document.getElementById('form-cash-out').style.display='none';
    document.getElementById('form-transfer-money').style.display='none';
    document.getElementById('form-get-bonus').style.display='none';
    document.getElementById('form-pay-bill').style.display='none';
    document.getElementById('form-transaction').style.display='none';
});
document.getElementById('card-cash-out').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='none';
    document.getElementById('form-cash-out').style.display='block';
    document.getElementById('form-transfer-money').style.display='none';
    document.getElementById('form-get-bonus').style.display='none';
    document.getElementById('form-pay-bill').style.display='none';
    document.getElementById('form-transaction').style.display='none';
});
document.getElementById('card-transfer-money').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='none';
    document.getElementById('form-cash-out').style.display='none';
    document.getElementById('form-transfer-money').style.display='block';
    document.getElementById('form-get-bonus').style.display='none';
    document.getElementById('form-pay-bill').style.display='none';
    document.getElementById('form-transaction').style.display='none';
});
document.getElementById('card-get-bonus').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='none';
    document.getElementById('form-cash-out').style.display='none';
    document.getElementById('form-transfer-money').style.display='none';
    document.getElementById('form-get-bonus').style.display='block';
    document.getElementById('form-pay-bill').style.display='none';
    document.getElementById('form-transaction').style.display='none';
});
document.getElementById('card-pay-bill').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='none';
    document.getElementById('form-cash-out').style.display='none';
    document.getElementById('form-transfer-money').style.display='none';
    document.getElementById('form-get-bonus').style.display='none';
    document.getElementById('form-pay-bill').style.display='block';
    document.getElementById('form-transaction').style.display='none';
});
document.getElementById('card-transaction').addEventListener('click', function(event){
    document.getElementById('form-add-money').style.display='none';
    document.getElementById('form-cash-out').style.display='none';
    document.getElementById('form-transfer-money').style.display='none';
    document.getElementById('form-get-bonus').style.display='none';
    document.getElementById('form-pay-bill').style.display='none';
    document.getElementById('form-transaction').style.display='block';
});




const validPin= 1234;
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // event.preventDeafult();
    console.log('Add Money button clicked');
    const bankName= document.getElementById('select-bank').value;
    const accountNumber= document.getElementById('input-bank-acc-number').value
    const amount= parseInt(document.getElementById('input-add-amount').value);
    const pin= parseInt(document.getElementById('input-add-pin').value);
    // console.log(bankName, accountNumber, amount, pin);
    let balance= parseInt(document.getElementById('balance').innerText);

    if (bankName === "Select a Bank") {
        alert("Please select a bank before adding money!");
        return; // stop execution here
    }
    if(accountNumber.length<11 || accountNumber.length>11){
        alert('Please Provide Valid Account Number');
        return;
    }
    if (pin!==validPin){
        alert('Please Provide Valid PIN Number');
        return;
    }

    console.log(balance, amount);
    const newBalance= balance+amount;
    console.log(newBalance);
    document.getElementById('balance').innerText= newBalance;
    balance= newBalance;
    console.log(balance);
});

document.getElementById('btn-withdraw-money').addEventListener('click', function(event){
    // event.preventDeafult();
    console.log('Withdraw Money button clicked');
    const agentNumber= document.getElementById('input-cash-agent-number').value
    const amount= parseInt(document.getElementById('input-cash-amount').value);
    const pin= parseInt(document.getElementById('input-cash-pin').value);
    // console.log(bankName, accountNumber, amount, pin);
    let balance= parseInt(document.getElementById('balance').innerText);

    if(agentNumber.length<11 || agentNumber.length>11){
        alert('Please Provide Valid Account Number');
        return;
    }
    if(amount>balance){
        alert('You cannot withdraw more than your balance');
        return;
    }
    if (pin!==validPin){
        alert('Please Provide Valid PIN Number');
        return;
    }

    console.log(balance, amount);
    const newBalance= balance-amount;
    console.log(newBalance);
    document.getElementById('balance').innerText= newBalance;
    balance= newBalance;
    console.log(balance);
});