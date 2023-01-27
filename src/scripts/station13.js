function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let check = document.getElementById("check");
  let text = document.getElementById("text");

  if (check.checked) {
      text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}
