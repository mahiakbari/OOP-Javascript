var str = 'abc.de.f.g';
var result = 'gfe.dc.b.a'

function revStr(str){
	var str_len = str.length;
	var rev_str = ''
	for(var i=0; i< str_len ; i++){
		if(str.charAt(i) != '.'){
			var char = str.charAt(str_len - 1- i);
			rev_str += char
		}
		else{
			rev_str += '.'
		}
	}
	return rev_str;
}
revStr(str);

 //sum million num
function sum(n) {

    return (n*(n+1)/2)

}
Console.log(sum(1000000));

function func(i) {
setTimeout(function() {
console.log(i);
}, 0);
}

for(var i=0; i<=2; i++) {
func(i);
}


for(let i=0; i<=2; i++) {
setTimeout(function() {
console.log(i);
}, 0);
}

for(var i=0; i<=2; i++) {
setTimeout(function() {
console.log(i);
}, 0);
}

const value1 = 0;
for(let i=0; i<=2; i++) {
const value = i; 
value1 = i; 
console.log(value);
}

for(let i=0; i<=2; i++) {
const value = i; 
console.log(value);
}


//amazon
// Create a simple component to display the current time dynamically.
 var currentTime = Date.now(); 
function getTime(){
    var hour = currentTime.getHours(); //1
    var min = currentTime.getMin(); //1
    var sec = currentTime.getSec(); //20
    setInterval(()=>{
        sec ++;
        if(sec == 60){
            if(min == 60){
                hour++;
                min = 1
            }
            else{
                min++
            }
            sec = 1;
        }
    },1000)
    
}
// Create a component that takes in a Date and renders text that shows how long ago the date was. 
// The widget should update as time passes and should represent the time as one of the following:
//- just now <= 30s
//- less than a minute ago <= 60
//- n minutes ago <= 1 hour
//- n hours ago <= 24 hours

function timeWidget(time){
    var currentTime = Date.now(); // 164348976333
    var oldertime = Date.
    var diff = currentTime - oldertime; // seconds  //52
    var hours = diff.getHours(); /0
    var min = diff.getMin(); // 0
    var sec= diff.getSec(); // 30
    if(hours != 0){
        return `${hours} hours ago`
    }
    else if(min != 0){
        return `${min} minutes ago`
    }
    else{
        return `${sec} Seconds ago`
    }
}


 
var olderDate = new Date('23/09/2021T12:54:45')

class a extends OnInit{
    
    constructor(timeService: tieSetvice){}
    
    ngOnInit(){
        timeService.timeWidget(posttime)
    }
}

it('posttime is less than to current time' , () =>{
    var olderDate = new Date('23/09/2021T12:54:45');
    execute(timeWidget(olderDate)).tolessThan(currentTime)
})
//amazon end
