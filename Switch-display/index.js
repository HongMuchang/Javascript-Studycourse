//初期値を0に設定
let count = 0;

function from() {
  //0で入れば返り値1,1で入れば返り値0
  if (count == 0) {
    //ananのbbbをvalueを取得
    document.anan.bbb.value = "いらっやい";
    count = 1;
  } else {
    //ananのbbbをvalueを取得
    document.anan.bbb.value = "こんばんは";
    count = 0;
  }
}

setInterval("from()", 500);
