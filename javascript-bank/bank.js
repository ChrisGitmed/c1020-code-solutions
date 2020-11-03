/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else return null;
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts[number - 1] === undefined) {
    return null;
  } else {
    return this.accounts[number - 1];
  }
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    // Loop through accounts.
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
