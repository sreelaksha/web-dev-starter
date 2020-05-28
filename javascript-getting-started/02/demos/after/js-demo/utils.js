function showMessage(message)
{
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage){
    document.getElementByID('percent-off').textContent = percentage + "% OFF" ;
}