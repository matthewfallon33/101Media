const carousel = document.getElementsByClassName("carousel")[0];
const img = document.getElementById('img');
var imgNum = 1;
window.onload = function(){
  img.src = "img/carousel/img" + imgNum + ".jpg";
}
var kids  = carousel.children.length;
var caroLength = 3;
carousel.addEventListener("click", (e) => {
  console.log("clikced");
  console.log("imgNum:" + imgNum);
  if(imgNum >= 3){
    console.log("Img num more than 3!");
    imgNum = 1;
    img.src = "img/carousel/img" + imgNum + ".jpg";
  }else {
      console.log("Img num within bounds");
      imgNum++;
      img.src = "img/carousel/img" + imgNum + ".jpg";

  }

});
