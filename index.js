console.log("Olá");

var a = 1.2;
var b = 'Iagor';
var c = [];
var d = {};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

const data = [1,2,3,4,5,6,7,8,"teste"];
console.log(data.length);

for(var i=0;i<data.length;i++){
    console.log(data[i]);
}

data.forEach((i,shiw)=>{
    console.log(i,shiw)
})

//função logo abaixo
/*const somaDoisValores ()=>{
}*/

let temp = [];
data.forEach((item,index) => {
    if(item<=5){
        temp.push(item);
    }
});

console.log(temp.length);