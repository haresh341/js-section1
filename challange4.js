const billValue = 230;

const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const totalBill = billValue + tip;

console.log(
  `your bill is ${billValue}, tip is ${tip} and total bill is ${totalBill}`
);
