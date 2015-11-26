$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function() {
	var totalNumberOfItems = 30;
	var cocoLeaves = "../img/coco.png ";
	var banaLeaves = "../img/flat.png";
	var blueFlower1 = "../img/blueflower1.png";
	var blueFlower2 = "../img/blueflower2.png";
	var yellowFlower = "../img/yellowflower5.png";
	var vines = "../img/leave1.png";

	var theItems = [
		//top left 0-1
		cocoLeaves,
		cocoLeaves,
		//top right 2-3
		cocoLeaves,
		cocoLeaves,
		//middle items 4
		yellowFlower,
		//bottom bottom 5- 6
		banaLeaves,
		banaLeaves

	];



	function ramdomNumberWhat() {
		return Math.floor((Math.random() * 6));
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
			if (x <= 3) {
				insertedDiv.css("top", ramdomTop() + "%");
				insertedDiv.css("left", ramdomLeft() + "%");
				insertElement.css("width", ramdomWidth() + "%");
				insertedDiv.addClass("topItems");
				insertedDiv.addClass("largeItems");
				insertElement.attr("src", theItems[x]);
				insertElement.css({
					'-webkit-transform': 'rotate(' + randomAngleSmall + 'deg)',
					'-moz-transform': 'rotate(' + randomAngleSmall + 'deg)'
				});
				if (x === 3) {
					insertedDiv.css("top", ramdomTop() + "%");
					insertedDiv.css("left", bottomBottom() + "%");
				}
			} else if (x === 4) {
				insertedDiv.css("top", ramdomLeft() + "%");
				insertedDiv.css("left", ramdomLeft() + "%");
				insertedDiv.addClass("mediumItems");
				insertedDiv.addClass("farLeft");
				insertElement.attr("src", theItems[x]);

			} else if (x >= 5 && x <= 6) {
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