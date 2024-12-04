window.onload = function () {
  if (localStorage.getItem("panda") == "obtained") {
    document.getElementById("panda").innerHTML = `
        <img class="collImg" src="/img/panda.png" alt="stone panda"><p>Stone Panda</p>
    `;
  }

  if (localStorage.getItem("lantern") == "obtained") {
    document.getElementById("lantern").innerHTML = `
        <img class="collImg" src="/img/lantern.png" alt="paper lantern"><p>Paper Lantern</p>
    `;
  }

  if (localStorage.getItem("ribbon") == "obtained") {
    document.getElementById("ribbon").innerHTML = `
        <img class="collImg" src="/img/ribbon.png" alt="silk ribbon"><p>Silk Ribbon</p>
    `;
  }

  if (localStorage.getItem("bell") == "obtained") {
    document.getElementById("bell").innerHTML = `
        <img class="collImg" src="/img/bell.png" alt="bell"><p>Bell</p>
    `;
  }

  if (localStorage.getItem("bamboo") == "obtained") {
    document.getElementById("bamboo").innerHTML = `
        <img class="collImg" src="/img/bamboo.png" alt="bamboo"><p>Bamboo</p>
    `;
  }

  if (localStorage.getItem("poppy") == "obtained") {
    document.getElementById("poppy").innerHTML = `
        <img class="collImg" src="/img/poppy.png" alt="poppy"><p>Poppy</p>
    `;
  }
};
