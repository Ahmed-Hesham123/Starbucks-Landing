const imgThumb = document.querySelectorAll(".thumb > li > img");
imgThumb.forEach((item) => {
  item.addEventListener("click", (eo) => {
    if (item.getAttribute("src") == "images/thumb1.png") {
      imgSlider("images/img1.png");
      changeCircleColor("#017143");
    } else if (item.getAttribute("src") == "images/thumb2.png") {
      imgSlider("images/img2.png");
      changeCircleColor("#eb7495");
    } else if (item.getAttribute("src") == "images/thumb3.png") {
      imgSlider("images/img3.png");
      changeCircleColor("#d752b1");
    }
  });
});

function imgSlider(imgSrc) {
  let imgSlider = document.querySelector(".starbucks");
  imgSlider.src = imgSrc;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
