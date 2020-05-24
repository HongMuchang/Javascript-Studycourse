// function en() {
//   document.myForm.age1.value = Math.floor(Math.round() * 9);
//   document.myForm.age2.value = Math.floor(Math.round() * 9);
//   document.myForm.kotae.value = "";
// }

// function start() {
//   num1 = eval(document.myForm.age1.value);
//   num2 = eval(document.myForm.age2.value);
//   answer = num1 * num2;
//   //kotae＝送信される合計の値
//   if ((answer = kotae)) {
//     alert("正解");
//   } else {
//     alert("外れ");
//   }
//   en();
// }
// 九九の問題をフォームにセットする関数
function mySet() {
  document.myForm.myFormQ1.value = Math.floor(Math.random() * 9) + 1; // 九九の問題の値(左) をフォームへセット
  document.myForm.myFormQ2.value = Math.floor(Math.random() * 9) + 1; // 九九の問題の値(右) をフォームへセット
  document.myForm.myFormA.value = ""; // 九九の答え 入力欄をクリア
}

// 入力した答えが正解か不正解かを判定する関数 (答えを入力して、[OK]ボタンを押した時の処理)
function myCheck() {
  myQ1 = eval(document.myForm.myFormQ1.value); // 九九の問題の値(左) を取得
  myQ2 = eval(document.myForm.myFormQ2.value); // 九九の問題の値(右) を取得
  myA = eval(document.myForm.myFormA.value); // 入力された 九九の答え を取得
  myKotae = myQ1 * myQ2; // 九九の答えを計算
  if (myKotae == myA) {
    // 答えと入力した値は等しいか(正解か)?
    alert("あたり！　(^_^)");
  } else {
    alert("はずれ ！　こたえは " + myKotae + " です !");
  }
  mySet(); // 次の問題をセット
}
