if (document.referrer.length != 0) {
  myRef = document.referrer;
  if (myRef.indexOf("http://www.google.co.jp") == 0) {
    document.write("Google検索からお越しですね！ ありがとうございます！");
  } else if (myRef == "http://www.red.oit-net.jp/tatsuya/java/index.htm") {
    document.write("イヌでもわかるJavaScript講座 目次 から いらっしゃいませ！");
  } else {
    document.write(myRef + "からお越しですね！");
  }
} else {
  document.write("直接このホームページへお越し下さってありがとうございます");
}
