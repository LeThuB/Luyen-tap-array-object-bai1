let numbers = [1,2,3,4,5,6,7,8,];
let max = numbers[0];
let tong = 0;
for(let i = 0; i < numbers.length; i = i + 1){
    if(numbers[i]> max){
        max = numbers[i];
        tong = tong + numbers[i];
    }

}
let trungbinh = tong / numbers.length;
console.log(`Giá trị lớn nhất trong mảng là ${max}`)
console.log(`trung bình cộng của mảng là ${trungbinh}`)