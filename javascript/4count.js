$(document).ready(function() {
  let count = 0;
	$(".fr3").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr3").addClass("opa");
    }
      else {
          $(".fr3").addClass("none");
      }
  });
});
