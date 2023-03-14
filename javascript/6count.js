$(document).ready(function() {
  let count = 0;
	$(".fr5").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr5").addClass("opa");
    }
    else if (count == 2) {
      $(".fr5").addClass("opa1");
    }
      else {
          $(".fr5").addClass("none");
      }
  });
});
