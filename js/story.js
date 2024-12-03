let arr = JSON.parse(localStorage.getItem("array"));

function option(element) {
  let option = element.innerHTML;
  arr[arr.length] = `<span>&#9656</span>${option}`;
  localStorage.setItem("array", JSON.stringify(arr));
}

let content = document.getElementById("content").innerHTML;
arr[arr.length] = content;
localStorage.setItem("array", JSON.stringify(arr));
