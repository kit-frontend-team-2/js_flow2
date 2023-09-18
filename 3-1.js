arr = [1, 2, 3, 4, 5];
let fun = 16;
const arr2 = [];
let check = 0;
for (i = 0; i < arr.length; i++) {
  const number = arr[i] + 10;
  if (number != fun) {
    arr2.push(number);
  } else {
    check++;
  }
}
if (check == 1) {
  console.log(arr2);
} else {
  console.log("결과값이 없습니다");
}
//혼자
