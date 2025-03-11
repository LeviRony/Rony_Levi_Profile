$(document).ready(function () {
  $(".inner").each(function () {
    var widthValue = $(this).attr("data-pg") || "0%"; // Default to 0%
    
    if (!widthValue.includes("%")) {
      widthValue += "%"; // Ensure percentage
    }

    $(this).animate({ width: widthValue }, 2000);
  });
});
