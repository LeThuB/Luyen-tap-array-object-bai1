let numbers = [1,2,15,22,44,6,7,10,9,56];
let count = 0;
let dem = [];
for( let i = 0; i < numbers.length; i = i + 1){
if( numbers[i] >= 10){
    count ++
   dem.push(numbers[i]);
}
}

console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10 
    và những số đó là ${dem.join(",")}`)
