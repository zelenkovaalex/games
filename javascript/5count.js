$(document).ready(function() {
  let count = 0;
	$(".fr4").click(function() {
    count +=1;
    if (count == 1 ) {
      $(".fr4").addClass("opa");
    }
    else if (count == 2) {
      $(".fr4").addClass("opa1");
    }
      else if (count == 3) {
        $(".fr4").addClass("opa2");
      }
        else {
            $(".fr4").addClass("none");
        }
  });
});
