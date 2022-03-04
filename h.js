function stock_profit(prices) {
//track of the best profit so far
  let bestProfitSoFar = -Infinity
//first stock price we buy
  let lowestPriceSoFar = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const purchase = lowestPriceSoFar
    const sale = prices[i]
    const profit = sale - purchase

    lowestPriceSoFar = Math.min(lowestPriceSoFar, sale)
    bestProfitSoFar = Math.max(bestProfitSoFar, profit)
  }

  return bestProfitSoFar
}
