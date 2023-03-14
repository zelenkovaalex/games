$(document).ready(function() {
  let count = 0;
	$(".fr").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr").addClass("opa");
    }
    else if (count == 2) {
      $(".fr").addClass("opa1");
    }
      else if (count == 3) {
        $(".fr").addClass("opa2");
      }
        else {
            $(".fr").addClass("none");
        }
  });
});
