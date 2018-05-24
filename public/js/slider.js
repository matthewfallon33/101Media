const carousel = document.getElementsByClassName("carousel")[0];
var kids  = carousel.children.length;
// setInterval(function(){console.log("noooott")}, 1000);
carousel.addEventListener("mouseover", (e) => {
  carousel.style.marginLeft += 100 + "%";
  console.log(carousel.style.marginLeft);
});
