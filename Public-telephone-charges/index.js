myCnt = 1;

function en() {
  document.myForm.formOne.value = myCnt + "秒";
  document.myForm.formSecond.value = Math.floor(myCnt * 0.2);
  myCnt = myCnt + 1;
}
setInterval("en()", 1000);
