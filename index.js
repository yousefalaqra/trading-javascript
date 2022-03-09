function getMaxProfit (stockPrices) {

  if (stockPrices.length < 2){
    console.error('Need at least 2 stock prices to calculate profit');
    return -1;
  }

  let max = stockPrices[0];
  let min = stockPrices[0];
  let best = 0;

  for (let i = 1; i < stockPrices.length; i++) {
    if (stockPrices[i] <= min) min = stockPrices[i];
    else if (stockPrices[i] >= max) {
      max = stockPrices[i];
      let avg = max - min;
      if (best < avg) best = avg;
    }

    if (best > 0) return best;
    else {
      return stockPrices[1] - stockPrices[0];
    }
  }
};

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));
