function openMenu() {
  document.getElementById("backdrop").style.display = "block";
}
function closeMenu() {
  document.getElementById("backdrop").style.display = "none";
}

let modal = document.getElementById("backdrop");

window.onclick = function (event) {
  if (event.target == document.getElementById("backdrop")) {
    document.getElementById("backdrop").style.display = "none";
  }
};
// console.log(navbar);

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var ulitems = document.getElementsByClassName("navLinks");
  nav.classList.toggle("sticky", window.scrollY > 0);
  var next = nav.childNodes;
  console.log(ulitems);

  if (window.scrollY > 0) {
    nav.style.color = "black";
    for (let i = 0; i < ulitems.length; i++) {
      ulitems[i].style.color = "black";
    }
  } else {
    nav.style.color = "#ffffff";
    for (let i = 0; i < ulitems.length; i++) {
      ulitems[i].style.color = "white";
    }
  }
});
window.addEventListener("mousemove", function (e) {
  let cursor = document.getElementById("cursor");
  if (window.innerWidth > 600) {
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
  }
});
var ulitems = document.getElementsByClassName("navLinks");
// ulitems.forEach((link) => {
//   link.addEventListener("mouseenter", (event) => {
//     console.log(event);
//   });
// });
for (let i = 0; i < ulitems.length; i++) {
  ulitems[i].addEventListener("mouseenter", () => {
    console.log("hello world");
  });
}
// ulitems.array.forEach((link) => {});
