window.onload = function () {
  let story = JSON.parse(localStorage.getItem("array"));
  console.log(story);
  for (let i = 0; i < story.length; i++) {
    document.getElementById("your-story").innerHTML += story[i];
  }
};
