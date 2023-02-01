function displayList() {
  const fruits = document.getElementById("fruits");
  const fruitList = ["リンゴ", "イチゴ", "ブドウ"];
  let fruitHTML = "<ul>";

  for (let i = 0; i < fruitList.length; i++) {
    fruitHTML += "<li>" + fruitList[i] + "</li>";
  }

  fruitHTML += "</ul>";
  fruits.innerHTML = fruitHTML;
}
