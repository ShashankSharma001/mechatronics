document.addEventListener("DOMContentLoaded", function () {
    const timelineContainer = document.querySelector(".timeline");
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    timelineContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      timelineContainer.classList.add('active');
      timelineContainer.classList.add('grabbing');
      startX = e.pageX - timelineContainer.offsetLeft;
      scrollLeft = timelineContainer.scrollLeft;
    });
  
    timelineContainer.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        timelineContainer.classList.remove('active');
        timelineContainer.classList.remove('grabbing');
      }
    });
  
    timelineContainer.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        timelineContainer.classList.remove('active');
        timelineContainer.classList.remove('grabbing');
      }
    });
  
    timelineContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timelineContainer.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      timelineContainer.scrollLeft = scrollLeft - walk;
    });
  });
  