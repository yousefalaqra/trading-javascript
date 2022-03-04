# trading-javascript
An algorithm exercises to refresh the mind 


# Teaching software development hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

1) The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
2) The values are the price (in US dollars) of one share of Apple stock at that time.
3) So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

**Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.**


'''
const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
'''

## No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.


Do you have an answer? please fork the repository and submit a pull-request!
Do you need help? please contact me with questions!

