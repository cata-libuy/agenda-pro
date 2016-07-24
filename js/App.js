// Running the Gallery
$(document).ready(function() {
  sayHello();
  setCurrentResolution();
  window.addEventListener("resize", function() {
    setCurrentResolution();
  });
})
