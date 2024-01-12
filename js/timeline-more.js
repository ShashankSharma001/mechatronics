document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".timeline");

  scrollContainer.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}); 