// Running the Gallery
$(document).ready(function() {
  sayHello();
  setCurrentResolution();
  window.addEventListener("resize", function() {
    setCurrentResolution();
  });
  location.hash = "gallery";
  $(window).on('hashchange', function() {
    handleBackButton();
    location.hash = "gallery";
});
  $('#4').hover(function() {
    $('.triangle-cover').css('border-color', 'yellow');
  });
  $('#4').mouseout(function() {
    $('.triangle-cover').css('border-color', '#fff');
  });

})
