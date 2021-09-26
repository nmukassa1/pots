let balance = 1000;

const cardBalance = document.querySelector('.card__balance');

cardBalance.textContent = `£${balance}`;


const createBtn = document.querySelector('.pot__create');

createBtn.addEventListener('click', function() {
 
  //Check if User has money in account
  if(balance > 0) {
        const potName = prompt('Pot name:');
    
        const potAmount = prompt('Pot amount:');
        
        //Stop User from withdrawing more then what they have in account
        if(potAmount > balance) {
        alert(`You can't withdraw more then what your balance is.`);
        return
        } else if (!potAmount) {
        alert('Enter a value')
        return
        } else if (potAmount === '0') {
        alert(`Amount can't be 0`)
        return
        }
    
        const pot = document.createElement('li');
        pot.classList = 'pot__item pot__item--added';
        
        pot.innerHTML = `
            <h1 class="pot__name">${potName}</h1>
            <p class="pot__amount">£${potAmount}</p>
            <div class="pot__buttons">
                <button class="add"><i class="fas fa-plus"></i></button>
                <button class="withdrawl"><i class="fas fa-minus"></i></button>
            </div>
        `;
        
        const ul = document.querySelector('ul');
        
        ul.appendChild(pot);
            
            balance = balance - potAmount;
            
            cardBalance.textContent = `£${balance}`;

        //If no money is in account
    } else {
        alert('Your balance is 0, add more funds.')
    }
  
})



//DEPOSIT

const depositBtn = document.querySelector('.card__button');

depositBtn.addEventListener('click', function() {
  const depositAmount = prompt('Deposit:');
  
  

  if(!depositAmount) {
    alert('Please enter an amount.')
    } else if (depositAmount === '0') {
        alert('You cannot deposit 0.')
        return
    } else {
        balance = parseInt(depositAmount) + balance
        cardBalance.textContent = `£${balance}`
        return
    }
})


// setInterval(function() {
//     const add = document.querySelectorAll('.add')[0]
// console.log(add)
// }, 5000)

