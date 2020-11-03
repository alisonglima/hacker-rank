function bonAppetit(bill, k, b) {
  bill.splice(k, 1);

  const sum = bill.reduce((a, b) => a + b, 0);
  const annaPart = sum / 2;

  if (annaPart === b) console.log("Bon Appetit");
  else console.log((b - annaPart).toFixed(0));
}

const bill = [21, 2, 89, 94, 33, 45, 86, 22, 24, 60];
const k = 8;
const b = 226;

bonAppetit(bill, k, b);
