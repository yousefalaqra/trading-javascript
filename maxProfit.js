function getMaxProfit (stockPrices) {
    if(stockPrices.length <= 1){
            return console.log('You must send at least 2 stock to get max profit');
    }
    const max = Math.max(...stockPrices);
    const min = Math.min(...stockPrices);

    const result = (max-min);
    return result > 0 ? result : -999;
}
  
const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));
// ibtihaj adham
