$(document).ready(function() {
  let count = 0;
	$(".fr2").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr2").addClass("opa");
    }
    else if (count == 2) {
      $(".fr2").addClass("opa1");
    }
      else {
          $(".fr2").addClass("none");
      }
  });
});
