let count = 1;
// get cart btn 
const allBtn = document.getElementsByClassName('add-btn');
for( let btn of allBtn ){

    // handle button click 
    btn.addEventListener('click', function(e){
        setInnerTextById('cart-count', count)
        count++

        // get place name and price 
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const priceElement = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const price = parseInt(priceElement);

        // get title and price container 
        const selectedContainer = document.getElementById('selected-place-container');

        // create li & p tag 
        const li = document.createElement('li');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        p.innerText = placeName + ' :';
        p2.innerText = price;
        
        e.target.setAttribute("disabled", "");
        e.target.parentNode.parentNode.style.backgroundColor = 'lightgray';

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);
        

        const budgetElement = document.getElementById('budget');
        const budgetElementText = budgetElement.innerText;
        const budget = parseInt(budgetElementText);

        if(budget - price < 0){
            return alert('Low budget please earn more')
        }
        budgetElement.innerText = budget - price;

        totalCost('total-cost', price)
        grandTotal()
        
    })
   
    
}

