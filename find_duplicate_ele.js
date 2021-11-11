var arr = [1,2,3,4,2,4,4,2,2,4,5,7,4,2,4];

function findEle(arr){
    var arr_length = arr.length;
    var obj = {}
    for(var i=0; i< arr_length ;i++){
        var val = arr[i];
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1
        }
    }
    console.log(obj)
    var sort = Object.entries(obj).sort(([,a],[,b])=>{
        //console.log(a, b)
        return b-a
    });
    console.log(sort,sort[0][0])
    
    var keys = Object.keys(obj);
    delete obj[sort[0][0]];
    return obj
}

console.log(findEle(arr))
