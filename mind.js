function previous() {
  let container = document.getElementById("featureContainer");
  container.scrollLeft -= 200;
}

function next() {
  let container = document.getElementById("featureContainer");
  container.scrollLeft += 200;
}

function change() {
  // this function for slider of features card
  let obj = document.querySelectorAll(".dotSlider");
  obj.forEach((elt) => {
    elt.onclick = () => {
      obj.forEach((del) => {
        del.classList.remove("active");
      });
      elt.classList.add("active");
      changeCard(elt.id);
    };
  });
}

change();

function changeCard(id) {
  // this function is changing Services card
  let card = document.querySelectorAll(".serviceCard");
  card.forEach((elt) => {
    elt.style.left = `-${id - 1}0em`;
  });
}

function hamburger() {
  // on / off hamburger button
  let menuOpen = false;
  const hamMenu = document.querySelector(".hamMenu");
  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.onclick = () => {
    menuBtn.classList.toggle("open");
    hamMenu.classList.toggle("active");
  };
}

hamburger();
