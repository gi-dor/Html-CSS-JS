
//  일단 비어있는 배열 생성
const bingo = [];

// bingo길이 선정   , 그러면 bingo[0] ~ bingo[24] 완성 안에 요소없음
bingo.length = 25;

// 배열 요소 집어넣기  
for (let i = 0; i < bingo.length;i++){  //  0 <= x <25
  for(let j = 0; j< bingo.length; j++_){
    bingo[i][j] = i+1,j;
       }  
  }
  
    // bingo[0] = 1+0  부터 시작   
    // bingo[0] = 1

    // bingo[1] = 1+1      
    // bingo[1] = 2

    // bingo[2] = 2+1
    // bingo[2] = 3
    
console.log(bingo); // 출력해보기

// 정렬
// bingo.sort();

//  섞는 메서드 
// function bingo(){return Math.random() - 0.5}

bingo.sort(function bingo()  {
    return Math.random() - 0.5
        } );  // 섞기
console.log(bingo); // 섞은뒤 출력하기

// html 테이블에 숫자 집어넣기... 어떻게 ?

for (let i = 0; i < bingo.length; i++) {
    document.getElementById(i).innerHTML = bingo[i];
  }







// var bingo = [];
//
// bingo.length = 25;
// 25
// for (i = 0; i < bingo.length;i++){ 
//  bingo[i] = 1+i;         bingo[i] = 1+[i] 하지 않게 주의 
// }  
// 
// console.log(bingo);

// bingo.sort(function bingo(){return Math.random() - 0.5});
// (25) [1, 2, 22, 3, 18, 11, 13, 4, 5, 20, 10, 17, 15, 21, 23, 8, 6, 7, 25, 9, 24, 12, 19, 16, 14]
// bingo.sort(function bingo(){return Math.random() - 0.5});
// (25) [2, 6, 17, 21, 24, 25, 13, 22, 16, 19, 8, 12, 14, 4, 18, 10, 1, 3, 5, 7, 20, 15, 11, 9, 23]
// bingo.sort(function bingo(){return Math.random() - 0.5});
// (25) [13, 24, 17, 21, 23, 7, 10, 8, 19, 1, 15, 22, 6, 12, 14, 16, 3, 5, 4, 9, 18, 2, 25, 11, 20]

