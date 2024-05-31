function calculateTotal(purchases) {
  let result = 0;
  for (const purchase of purchases) {
    result += purchase.price * purchase.count;
 }
return result;
 }

// function calculateTotal(purchases) {
//   return purchases.reduce((total, purchase) => total + (purchase.price * purchase.count), 0);
// }

export default calculateTotal;