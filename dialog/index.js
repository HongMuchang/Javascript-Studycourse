function test() {
  //表示と送られてきた値を格納
  num1 = prompt("パシワードを入力してください");
  //-----格納した値がpass1と一致する時-----
  if (num1 == "pass1") {
    //ダイアログの表示
    daiyaru = window.confirm("100万年です");
    //[はい]を押した時
    if (daiyaru == true) {
      alert("集金に行きます");
      //[いいえ]を押した時
    } else {
      alert("またのご利用お待ちしております");
    }
    //-----格納した値がpass1と一致しない時-----
  } else {
    alert("外れ");
  }
}
test();
