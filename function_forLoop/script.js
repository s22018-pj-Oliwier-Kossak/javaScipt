const arr = [1,2,3,4,5,6]

for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

function sum(num1,num2,num3){
    console.log(num1+num2*num3);
}

sum(1,2,3)

if (arr.length <5){
    console.log(false);
}
else{
    console.log(true);
}

console.log(`Tablica z cyframi ma ${arr.length} elementow`)