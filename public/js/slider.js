const carousel = document.getElementsByClassName("carousel")[0];
const img = document.getElementById('img');
var imgNum = 1;
window.onload = function(){
  img.src = "img/carousel/img" + imgNum + ".jpg";
}
var kids  = carousel.children.length;
var caroLength = 3;
carousel.addEventListener("click", (e) => {
  if(imgNum >= 3){
    imgNum = 1;
    img.src = "img/carousel/img" + imgNum + ".jpg";
  }else {
      imgNum++;
      img.src = "img/carousel/img" + imgNum + ".jpg";
  }
});
