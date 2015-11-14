$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function() {
	var totalNumberOfItems = 50;
	var cocoLeaves = "../img/coco.png ";
	var banaLeaves = "../img/flat.png";
	var blueFlower1 = "../img/blueflower1.png";
	var blueFlower2 = "../img/blueflower2.png";
	var yellowFlower = "../img/yellowflower5.png";
	var vines = "../img/leave1.png";

	var theItems = [
		// top left items 0
		cocoLeaves,
		// top right side items 1
		cocoLeaves,
		//large items 2
		cocoLeaves,
		//medium items 3-7
		cocoLeaves,
		banaLeaves,
		banaLeaves,
		blueFlower2,
		blueFlower1,
		//small items 8-9
		yellowFlower,
		vines,
		//bottom  left items 10
		cocoLeaves,
		//bottom  right items 11
		cocoLeaves
	];



	function ramdomNumberWhat() {
		return Math.floor((Math.random() * 12));
	}

	function randomNumberWhereX() {
		return Math.floor((Math.random() * 85) - 5);
	}

	function randomNumberWhereLeft() {
		return Math.floor((Math.random() * 15) - 25);
	}

	function randomNumberWhereRight() {
		return Math.floor((Math.random() * 5) + 63);
	}

	function randomNumberWhereTop() {
		return Math.floor((Math.random() * 15) - 50);
	}

	function randomNumberWhereBottom() {
		return Math.floor((Math.random() * 15) + 15);
	}

	function randomNumberWhereMiddle() {
		return Math.floor((Math.random() * 15) + 5);
	}


	// functions to generate the images and where to place them 
	function generateImagesBotTopAndSmall() {
		for (i = 0; i < totalNumberOfItems; i++) {
			var insertPlace = $(".insertforproject"); //bottom, top, and small items only
			var insertElement = $("<img> </img>");
			insertPlace.append(insertElement);
			insertElement.addClass("randomElement");
			var x = ramdomNumberWhat();

			//large items at top left
			if (x <= 1) {
				insertElement.css("top", randomNumberWhereTop() + "%");
				insertElement.css("left", randomNumberWhereLeft() + "%");
				insertElement.css("-webkit-transform", "rotate(45deg)");
				insertElement.addClass("topItems");
				insertElement.addClass("largeItems");
				insertElement.attr("src", theItems[x]);
				if (x === 1) {
					insertElement.css("left", randomNumberWhereRight() + "%");
					insertElement.css("-webkit-transform", "rotate(-45deg)");
				}
				//small items 
			} else if (x >= 6 && x <= 7) {
				insertElement.css("top", randomNumberWhereX() + "%");
				insertElement.css("left", randomNumberWhereX() + "%");
				insertElement.addClass("smallItems");
				insertElement.attr("src", theItems[x]);

				// bottom items
			} else if (x >= 8 && x <= 9) {
				insertElement.css("top", randomNumberWhereBottom() + "%");
				insertElement.css("left", randomNumberWhereLeft() + "%");
				insertElement.addClass("bottomItems");
				insertElement.attr("src", theItems[x]);
				insertElement.css("-webkit-transform", "rotate(45deg)");
				if (x === 9) {
					insertElement.css("left", randomNumberWhereRight() + "%");
					insertElement.css("-webkit-transform", "rotate(-45deg)");
				}
			}
		}
	}


	function generateImagesMainPage() {
		for (i = 0; i < totalNumberOfItems; i++) {
			var insertPlace = $(".flowersandleaves"); //all over the page
			var insertedDiv = $("<div> </div>");
			var insertElement = $("<img> </img>");
			insertedDiv.append(insertElement);
			insertedDiv.addClass("randomElement");
			insertedDiv.addClass("largeItems");
			insertPlace.append(insertedDiv);
			var x = ramdomNumberWhat();

			if (x <= 1) {

				insertedDiv.css("top", randomNumberWhereTop() + "%");
				insertedDiv.css("left", randomNumberWhereLeft() + "%");
				insertedDiv.addClass("topItems");
				insertElement.attr("src", theItems[x]);

				//top left image
				insertElement.css("-webkit-transform", "rotate(90deg)");
				if (x === 1) {
					//top right image
					insertedDiv.css("left", randomNumberWhereRight() + "%");
					insertElement.css("-webkit-transform", "rotate(-90deg)");
				}
			} else if (x === 2) {
				insertedDiv.css("top", randomNumberWhereBottom() + "%");
				insertedDiv.css("left", randomNumberWhereX() + "%");
				insertedDiv.addClass("largeItems");
				insertElement.attr("src", theItems[x]);

			} else if (x >= 3 && x <= 7) {
				insertedDiv.css("top", randomNumberWhereMiddle() + "%");
				insertedDiv.css("left", randomNumberWhereX() + "%");
				insertedDiv.addClass("mediumItems");
				insertElement.attr("src", theItems[x]);
				insertElement.css("-webkit-transform", "rotate(27deg) scaleX(-1)");
				insertElement.css("-webkit-filter", "FlipH");
				if (x >= 5 && x <= 7) {
					insertedDiv.css("left", randomNumberWhereRight() + "%");
					insertElement.css("-webkit-transform", "rotate(5deg)");
				}
			} else if (x >= 8 && x <= 9) {
				insertedDiv.css("top", randomNumberWhereX() + "%");
				insertedDiv.css("left", randomNumberWhereX() + "%");
				insertedDiv.addClass("smallItems");
				insertElement.attr("src", theItems[x]);
			} else if (x >= 10 && x <= 11) {
				insertedDiv.css("top", randomNumberWhereBottom() + "%");
				insertedDiv.css("left", randomNumberWhereLeft() + "%");
				insertedDiv.addClass("bottomItems");
				insertElement.attr("src", theItems[x]);
			}
		}
	}

	generateImagesBotTopAndSmall();
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