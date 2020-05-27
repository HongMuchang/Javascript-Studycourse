function mySet() {
  myWeekTbl = new Array("日", "月", "火", "水", "木", "金", "土");
  myDate = new Date(
    document.myF.myY.value,
    document.myF.myM.value - 1,
    document.myF.myD.value
  );
  myWeek = myDate.getDay();
  document.myF.myMes.value =
    "あなたは" + myWeekTbl[myWeek] + "曜日に生まれました";
}
