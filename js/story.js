let arr = JSON.parse(localStorage.getItem("array"));

function option(element) {
  let option = element.innerHTML;
  arr[arr.length] = `<span>&#9656</span>${option}`;
  localStorage.setItem("array", JSON.stringify(arr));
}

let content = document.getElementById("content").innerHTML;
arr[arr.length] = content;
localStorage.setItem("array", JSON.stringify(arr));

/* collection functions */
function panda() {
  localStorage.setItem("panda", "obtained");
}

function lantern() {
  localStorage.setItem("lantern", "obtained");
}

function ribbon() {
  localStorage.setItem("ribbon", "obtained");
}

function bell() {
  localStorage.setItem("bell", "obtained");
}

function bamboo() {
  localStorage.setItem("bamboo", "obtained");
}

function poppy() {
  localStorage.setItem("poppy", "obtained");
}
