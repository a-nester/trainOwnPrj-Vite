// ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transactions = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account1 = {
    // Поточний баланс рахунку
    balance: 0,
    // Історія транзакцій
    transactions: [],
     /* Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.*/
    createTransaction(amount, type) {
      this.transactions.push({
        id:amount, amount, type,});
    },
    /* Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій*/
    deposit(amount) {
      this.balance += amount;
      this.createTransaction(amount, Transactions.DEPOSIT);
      this.getBalance();
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {},
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      console.log(`Your balance: ${this.balance}$`);
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      for (const elem of this.transactions) {
        if (elem.id === id) {
          console.log(elem);    
        }
      }
      
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
  };

account1.deposit(100);
account1.deposit(300);
// console.log(account1.getBalance());
console.log(account1.transactions);
account1.getTransactionDetails(100);