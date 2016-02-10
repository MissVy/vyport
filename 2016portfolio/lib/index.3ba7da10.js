$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function() {
	var totalNumberOfItems = 15;
	var banaLeaves = "../img/flat.92055364.png";
	var yellowFlower = "../img/yellowflower5.0fbed9db.png";


	var theItems = [
		yellowFlower,
		banaLeaves,
	];



	function ramdomNumberWhat() {
		return Math.floor((Math.random() * 2));
	}

	function ramdomTop() {
		return Math.floor((Math.random() * 30) - 5);
	}


	function ramdomLeft() {
		return Math.floor((Math.random() * 95) - 10);
	}

	function bottomBottom() {
		return Math.floor((Math.random() * 20) + 60);
	}

	function ramdomWidth() {
		return Math.floor((Math.random() * 40) + 95);
	}



	//generate images for the index page 
	function generateImagesMainPage() {
		for (i = 0; i < totalNumberOfItems; i++) {
			var insertPlace = $(".flowersandleaves"); //all over the page
			var insertedDiv = $("<div> </div>");
			var insertElement = $("<img> </img>");
			insertedDiv.append(insertElement);
			insertedDiv.addClass("randomElement");
			insertPlace.append(insertedDiv);
			var x = ramdomNumberWhat();
			var randomAngle = Math.floor((Math.random() * 45) - 65);
			var randomAngleSmall = Math.floor((Math.random() * 45) - 25);
			//top image left and right 
			if (x === 0) {
				insertedDiv.css("top", ramdomLeft() + "%");
				insertedDiv.css("left", ramdomLeft() + "%");
				insertedDiv.addClass("mediumItems");
				insertedDiv.addClass("farLeft");
				insertElement.attr("src", theItems[x]);



			} else {
				insertedDiv.css("top", bottomBottom() + "%");
				insertedDiv.css("left", ramdomLeft() + "%");
				insertedDiv.addClass("bottomItems");
				insertElement.attr("src", theItems[x]);
				insertElement.css({
					'-webkit-transform': 'rotate(' + randomAngle + 'deg)',
					'-moz-transform': 'rotate(' + randomAngle + 'deg)'
				});
			}


		}
	}

	//generate leaves only

	generateImagesMainPage();

	$(".smallItems").hover(function() {
		$(this).css("display", "none");
	});

	$(".callMe").on("click", function() {
		$(".medetails").toggleClass("showmedetails");
	});

	$(".showAboutMe").on("click", function() {
		$(".navBottom").toggleClass("showNavBottom");
	});



})