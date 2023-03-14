$(document).ready(function() {
	$(".inf").click(function() {
		$(".menu").addClass("none");
    $(".info").removeClass("none");
	});
  $(".inf_2").click(function() {
		$(".info").addClass("none");
    $(".menu").removeClass("none");
	});
  $(".f").click(function() {
    $(".menu").addClass("none");
    $(".Fgame").removeClass("none");
  });
  $(".r").click(function() {
    $(".menu").addClass("none");
    $(".Sgame").removeClass("none");
  });
  $(".ff").click(function() {
    $(".menu").addClass("none");
    $(".Tgame").removeClass("none");
  });


// back part


	$(".menu1").click(function() {
		$(".Fgame").addClass("none");
    $(".menu").removeClass("none");
	});
  $(".menu1").click(function() {
		$(".Sgame").addClass("none");
    $(".menu").removeClass("none");
	});
  $(".menu1").click(function() {
		$(".Tgame").addClass("none");
    $(".menu").removeClass("none");
	});


// Fgame


	$(".ready").click(function() {
    $(".belka").removeClass("none");
    $(".ready").addClass("none");
    setTimeout(function(){
      $(".finish").removeClass("none");
    }, 4000);
	});



	$(".butt1").click(function() {
		$(".Sgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".menu1").click(function() {
		$(".Fgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".butt2").click(function() {
		location.reload();
		$(".menu").addClass("none");
    $(".Fgame").removeClass("none");
	});


// Sgame

  $(".p").click(function() {
  	$(".p").addClass("none");
  });
  $(".p_1").click(function() {
  	$(".p_1").addClass("none");
  });
  $(".p_2").click(function() {
  	$(".p_2").addClass("none");
  });
  $(".p_3").click(function() {
  	$(".p_3").addClass("none");
  });
  $(".b").click(function() {
  	$(".b").addClass("none");
  });
  $(".b_1").click(function() {
  	$(".b_1").addClass("none");
  });
  $(".b_2").click(function() {
  	$(".b_2").addClass("none");
  });
  $(".b_3").click(function() {
  	$(".b_3").addClass("none");
  });
  $(".ch").click(function() {
  	$(".ch").addClass("none");
  });
  $(".ch_1").click(function() {
  	$(".ch_1").addClass("none");
  });
  $(".ch_2").click(function() {
  	$(".ch_2").addClass("none");
  });
  $(".ch_3").click(function() {
  	$(".ch_3").addClass("none");
  });
  $(".s").click(function() {
  	$(".s").addClass("none");
  });
  $(".s_1").click(function() {
  	$(".s_1").addClass("none");
  });
  $(".s_2").click(function() {
  	$(".s_2").addClass("none");
  });
  $(".s_3").click(function() {
  	$(".s_3").addClass("none");
  });


  let count = 0;
	$(".Sgame").click(function() {
    count +=1;
    if (count == 16 ) {
      $(".finish_1").removeClass("none");
    }
 });



	$(".butt1_1").click(function() {
		$(".Sgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".menu1_1").click(function() {
		$(".Sgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".butt2_1").click(function() {
		location.reload();
		$(".menu").addClass("none");
    $(".Sgame").removeClass("none");
	});

// Tgame

	let count1 = 0;
	$(".fr").click(function() {
		count1 +=1;
		if (count1 == 1 ) {
			$(".fr").addClass("opa");
		}
		else if (count1 == 2) {
			$(".fr").addClass("opa1");
		}
			else if (count1 == 3) {
				$(".fr").addClass("opa2");
			}
				else {
						$(".fr").addClass("none");
				}
	});

	let count2 = 0;
	$(".fr1").click(function() {
    count2 +=1;
    if (count2 == 1 ) {
      $(".fr1").addClass("opa");
    }
    else if (count2 == 2) {
      $(".fr1").addClass("opa1");
    }
      else {
          $(".fr1").addClass("none");
      }
  });

	let count3 = 0;
	$(".fr2").click(function() {
    count3 +=1;
    if (count3 == 1 ) {
      $(".fr2").addClass("opa");
    }
    else if (count3 == 2) {
      $(".fr2").addClass("opa1");
    }
      else {
          $(".fr2").addClass("none");
      }
  });

	let count4 = 0;
	$(".fr3").click(function() {
    count +=1;
    if (count4 == 1 ) {
      $(".fr3").addClass("opa");
    }
      else {
          $(".fr3").addClass("none");
      }
  });

	let count5 = 0;
	$(".fr4").click(function() {
    count5 +=1;
    if (count5 == 1 ) {
      $(".fr4").addClass("opa");
    }
    else if (count5 == 2) {
      $(".fr4").addClass("opa1");
    }
      else if (count5 == 3) {
        $(".fr4").addClass("opa2");
      }
        else {
            $(".fr4").addClass("none");
        }
  });

	let count6 = 0;
	$(".fr5").click(function() {
		count6 +=1;
		if (count6 == 1 ) {
			$(".fr5").addClass("opa");
		}
		else if (count6 == 2) {
			$(".fr5").addClass("opa1");
		}
			else {
					$(".fr5").addClass("none");
			}
	});

	let count7 = 0;
	$(".fr6").click(function() {
    count7 +=1;
    if (count7 == 1 ) {
      $(".fr6").addClass("opa");
    }
    else if (count7 == 2) {
      $(".fr6").addClass("opa1");
    }
      else if (count7 == 3) {
        $(".fr6").addClass("opa2");
      }
        else {
            $(".fr6").addClass("none");
        }
  });

  if ($('.fr6, .fr5, .fr4, .fr3, .fr2, .fr1').hasClass('none')) {
    setTimeout(function() {
      $(".finish_2").removeClass("none");
    }, 1000)
  }

	$(".butt1_2").click(function() {
		$(". Tgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".menu1_2").click(function() {
		$(".Tgame").addClass("none");
    $(".menu").removeClass("none");
	});

	$(".butt2_2").click(function() {
		location.reload();
		$(".menu").addClass("none");
    $(".Tgame").removeClass("none");
	});
});
