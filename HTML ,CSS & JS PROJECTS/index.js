class Bank{
    constructor(balance){
        this.balance = balance
    }   


deposit(amount){
    this.balance += amount;
    console.log("Deposited: ", `Ksh${amount}`);
    console.log({Blance:this.balance});
    }

    withdraw(amount){
        if(this.balance - amount <= 0){
            console.log("SYSTEM ERROR !! YOU CANNOT WITHDRAW MORE THAN YOU HAVE.");
            console.log({balance: this.balance});
            return
        }
this.balance -= amount;
console.log("Withdrawn : ", `Ksh${amount}`);
    console.log({Blance:this.balance });
    }
}
    

const joseCheking = new Bank(100);
console.log(joseCheking.balance);
// joseCheking.deposit(200);
// joseCheking.withdraw(10);

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");

depositButton.onclick = () => {
    const amount = Number(amountInput.value);
    joseCheking.deposit(amount);
    balanceDiv.innerText = `Balance ${joseCheking.balance}`;
    
}

withdrawButton.onclick = () => {
    const amount = Number(amountInput.value);
    joseCheking.withdraw(amount);
    balanceDiv.innerText = `Balance ${joseCheking.balance}`;
    
}
