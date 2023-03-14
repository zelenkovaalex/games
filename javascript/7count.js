$(document).ready(function() {
  let count = 0;
	$(".fr6").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr6").addClass("opa");
    }
    else if (count == 2) {
      $(".fr6").addClass("opa1");
    }
      else if (count == 3) {
        $(".fr6").addClass("opa2");
      }
        else {
            $(".fr6").addClass("none");
        }
  });
});
