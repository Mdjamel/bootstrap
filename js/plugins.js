$(document).ready(function() {
  $(".carousel").carousel({
    interval: 6000
  });

  /* Show Color Optio Dic When Click On The Gear*/

  $(".gearcheck").click(function() {
    $(".coloroption").fadeToggle();
  });
});
