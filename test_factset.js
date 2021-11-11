function sum(a,b,c){
    var sum = a+b+c;
    return function(x,y,z){
        var inner_sum = x+y+z
        return function(){
            return sum+inner_sum
        }
    }
}

var total = sum(10,20,30)(39,60,12)();
console.log(total)




function sum1(a,b,c){
    var sum = b ? a+b+c : a
    return function(x,y,z){
        if(!x){
            return a;
        }else{
            var inner_sum = x+y+z
            return sum1(sum+inner_sum)
        }
    }
}

var total1 = sum1(10,20,30)(39,60,12)(45, 67, 89)();
console.log(total1);

y = {
    a: 'A'
}
z = y
x = {...y}
y.a = 'b';
console.log(x,y,z);


function maxProfit(price , n)
{

    // buy1 - Money lent to buy 1 stock
    // profit1 - Profit after selling
    // the 1st stock buyed.
    // buy2 - Money lent to buy 2 stocks
    // including profit of selling 1st stock
    // profit2 - Profit after selling 2 stocks
    var buy1, profit1, buy2, profit2;

    // Set initial buying values to
    // Number.MAX_VALUE as we want to
    // minimize it
    buy1 = buy2 = Number.MAX_VALUE;
    console.log(buy1,buy2, Number.MAX_VALUE)
    // Set initial selling values to
    // zero as we want to maximize it
    profit1 = profit2 = 0;

    for (i = 0; i < n; i++) {

        // Money lent to buy the stock
        // should be minimum as possible.
        // buy1 tracks the minimum possible
        // stock to buy from 0 to i-1.
        console.log('buy1' , buy1, price[i])
        buy1 = Math.min(buy1, price[i]);

        // Profit after selling a stock
        // should be maximum as possible.
        // profit1 tracks maximum possible
        // profit we can make from 0 to i-1.
        console.log('profit1',profit1, price[i] - buy1)
        profit1 = Math.max(profit1, price[i] - buy1);

        // Now for buying the 2nd stock,
        // we will integrate profit made
        // from selling the 1st stock
        console.log('buy2' , buy2, price[i] - profit1)
        buy2 = Math.min(buy2, price[i] - profit1);

        // Profit after selling a 2 stocks
        // should be maximum as possible.
        // profit2 tracks maximum possible
        // profit we can make from 0 to i-1.
        console.log('profit2' , profit2, price[i] - buy2)
        profit2 = Math.max(profit2, price[i] - buy2);
    }
    console.log(profit2)
    return profit2;
}

// Driver Code   
    var price = [1, 2, 3, 4, 5 ];
    var n = price.length;
    maxProfit(price, n);

    var obj = {
        a:2,
        b: {
          c:3
        }
      }
      
    var flattenObj  = {};

function flatten (obj){
    Object.keys(obj).forEach((key) =>{
        if(typeof obj[key] == "object"){
            Object.assign(flattenObj, flatten(obj[key]))
        }
        else{
            flattenObj[key] = obj[key]
        }
    });
    return flattenObj;
}
console.log(flatten(obj))
