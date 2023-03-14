$(document).ready(function() {
  let count = 0;
	$(".fr1").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr1").addClass("opa");
    }
    else if (count == 2) {
      $(".fr1").addClass("opa1");
    }
      else {
          $(".fr1").addClass("none");
      }
  });
});
