//recurring function
function factorial(n){
    if (n<=1){
        return 1
    }
    else{
        return n* factorial(n-1)
    }
}

console.log(factorial(3))

//palindromes

function palindromes(str){
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var str_len = str.length;
    if(str_len == 1){
        console.log('string is palidrome')
        return true
    }else{
        for(var i = 0 ; i < str_len/2 ; i++){
            if(str[i] !== str[str_len-1-i]){
                console.log('string is notS palidrome')
                return false;
            }
        }
        console.log('string is palidrome')
        return true
    }
}
var str = "ab"
palindromes(str)

//fibonnaci series

var fibonaci_series = function(n){
    if(n==1){
        return [0,1]
    }
    else{
        var s = fibonaci_series(n-1);
        s.push(s[s.length -1] + s[s.length -2]);
        return s
    }
}
console.log(fibonaci_series(1))
