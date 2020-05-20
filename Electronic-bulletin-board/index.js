myMsg = "いらっしゃいませ　こんにちは！";

//初期値設定
cnt = 0;

function en() {
  //値を受け取り,substoringメソッドで0からcnt分だけ表示
  document.myForm.myFormMes.value = myMsg.substring(0, cnt) + "_";
  //cnt＋をすることである分だけ
  cnt = cnt + 1;
}
setInterval("en()", 500);
