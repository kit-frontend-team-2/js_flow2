// 2. 편의점 물건 확인하기
// 당신은 편의점에서 야간 아르바이트를 하는 학생입니다
// 당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
// 당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 일의 순서는 아래와 같습니다.
// 출력
// 표의품목 != 물건이름     -> '물건이름'
// 표의값 != 갯수   -> '전산표와 일치하지않습니다'
// 표의값 = 갯수   -> '전산표와 일치합니다'
const menu = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
};

function 편의점전산표(product, count) {
  const item = menu.product;
  //   const 갯수 = menu.count;
  if (!item) {
    console.log(product);
  }
  //물건 확인
  else {
    if (item === count) {
      console.log("전산표와 일치합니다.");
    } else {
      console.log("전산표와 일치하지않습니다.");
    }
    //갯수 확인
  }
}
편의점전산표("바나나우유", 10);

// function 편의점전산표(product, count) {
//   const item = menu[product];
//   if (!item) return console.log(product);
//   if (item !== count) return console.log("전산표와 일치하지 않습니다");
//   if (item === count) return console.log("전산표와 일치합니다.");
// }

// 편의점전산표("바나나우유", 8);
