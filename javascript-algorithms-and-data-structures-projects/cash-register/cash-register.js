function checkCashRegister(price, cash, cid) {
  var change = [];

  const currencyObj = {
    "PENNY": 1,	
    "NICKEL": 5,	
    "DIME": 10,	
    "QUARTER": 25,	
    "ONE": 100,	
    "FIVE": 500, 
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000 
  }

  var changeOwed = (cash - price) * 100;

  var changeOwedCopy = changeOwed;   

  var filteredCid = cid.filter(el => el[1] !== 0).reverse();

  var cidSum = 0;

  filteredCid.forEach(el => {
    let curr = el[0];
    let currSum = el[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeOwed >= currencyObj[curr] && currSum > 0) {
      amount += currencyObj[curr];
      changeOwed -= currencyObj[curr];
      currSum -= currencyObj[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  var status = "";

  if (changeOwed > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeOwed == 0 && changeOwedCopy == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }

  var final = {
    "status": status, 
    "change": change
  };

  return final;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);