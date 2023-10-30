document.addEventListener('DOMContentLoaded', function () {
    const tipForm = document.getElementById('tipForm');
    const billTotal = document.getElementById('billTotal');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');

    tipForm.addEventListener('input', function () {
        const billAmount = parseFloat(billTotal.value);
        const percentage = parseInt(tipPercentage.value);
        
        if (isNaN(billAmount) || isNaN(percentage)) {
            tipAmount.value = '';
            totalBill.value = '';
            return;
        }

        const tip = (billAmount * percentage) / 100;
        tipAmount.value = tip.toFixed(2);

        const total = billAmount + tip;
        totalBill.value = total.toFixed(2);
    });
});
