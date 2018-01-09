var maxProfit = function(prices) {
  var minVal  = prices[0], maxProfit = 0;
  for(var i = 1 ; i < prices.length; i++ ){
      var curProfit = prices[i] - minVal;
      maxProfit = Math.max(curProfit, maxProfit);
      minVal = Math.min(minVal , prices[i]);
  }
  return maxProfit;
};

console.log(`max Profit:: ${maxProfit([7,1,5,3,6,4])}`);