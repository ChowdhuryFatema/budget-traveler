function setInnerTextById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function totalCost(elementId, value){
    const element = document.getElementById(elementId).innerText;
    const elementValue = parseInt(element);
    
    setInnerTextById('total-cost', elementValue + value)
}
function grandTotal(category){
    const grandTotalElement = document.getElementById('total-cost').innerText;
    const grandTotal = parseInt(grandTotalElement);
    setInnerTextById('grand-total', grandTotal)
    
    if (category === 'bus'){
        setInnerTextById('grand-total', grandTotal + 100)
    }
    else if(category === 'train'){
        setInnerTextById('grand-total', grandTotal - 200)
    }
    else if(category === 'flight'){
        setInnerTextById('grand-total', grandTotal + 500)
    }
    else{
        setInnerTextById('grand-total', grandTotal)
    }

   
}