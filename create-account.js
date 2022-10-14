function createAccount(pin, amount=0) {
    return {
        checkBalance(p) {
            if (p === pin)
                return `$${amount}`;
            else 
                return "Invalid PIN.";
        },

        deposit(p, am) {
            if (p === pin) {
                amount += am;
                return `Succesfully deposited $${am}. Current balance: $${amount}.`;
            }

            else 
                return "Invalid PIN.";

        },
        
        withdraw(p, am) {
            if (p !== pin)  
                return "Invalid PIN.";

            if (am > amount)
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                    
            else {
                amount = amount - am;
                return `Succesfully withdrew $${am}. Current balance: $${amount}.`;
            }
        },
        
        changePin(oldP, newP) {
            if (oldP !== pin) return "Invalid PIN.";

            pin = newP;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
