let numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
let max = numbers[0];
let vitri = 0;
for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > max ){
        max = numbers[index];
        vitri = index;
    }
    
}
console.log(`Phần tử lớn nhất là ${max}`)
console.log(`Vị trí của phẩn tử đó là ${vitri} `)