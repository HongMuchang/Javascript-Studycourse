function mySet() {
  myNow = new Date();
  myBirth = new Date(
    document.myF.myFy.value,
    document.myF.myFM.value - 1,
    document.myF.myFd.value
  );
  myMsec = myNow.getTime() - myBirth.getTime();
  myDay = Math.floor(myMsec / (1000 * 60 * 60 * 24));
  document.myF.myFmes.value = "生まれてから " + (myDay + 1) + "日目になります";
}
