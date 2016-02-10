$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function() {

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop != 0) {
			$('#theNavBar').addClass("hideTheNavBar");
		} else {
			$('#theNavBar').removeClass("hideTheNavBar");
			$('#theNavBar').addClass("showTheNavBar");
		}
	});

	$(".holdThumbs").stick_in_parent();

	$(".inspirLinks").stick_in_parent();

	$(".shopWrapper").stick_in_parent();

	$(".toBlog").on("click", function() {
		$("#theBlog").animatescroll();
	});

	$('a.back-to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});

	//upbutton
	var amountScrolled = 300;

	$(window).scroll(function() {

		if ($(window).scrollTop() > amountScrolled) {
			$('a.back-to-top').fadeIn('slow');
			$('.scrollMore').fadeOut('slow');

		} else {
			$('a.back-to-top').fadeOut('slow');
			$('.scrollMore').fadIn('slow');
		}
	});



	$(function() {
		$('[data-toggle="popover"]').popover()
	});

	var image1 = '<p> Some description about the product.</p>  <hr> <button> $000.00 AUD </button>';
	$('.tagIcon').popover({
		content: image1,
		html: true
	});

	//shop items icons

	$(".mainArticle").mouseover(function() {
		var showQuickLike = $(this).find($(".quickLike"));
		showQuickLike.css("opacity", "1");
	});
	$(".mainArticle").mouseout(function() {
		var showQuickLike = $(this).find($(".quickLike"));
		showQuickLike.css("opacity", "0");
	});

	$(".quick").mouseover(function() {
		$(this).find($(".unfilled")).css("display", "none");
		$(this).find($(".filled")).css("display", "initial");
	});

	$(".quick").mouseout(function() {
		var showdeye = $(this).find($(".theeye"));
		$(this).find($(".unfilled")).css("display", "initial");
		$(this).find($(".filled")).css("display", "none");
	});

	//before and after slideshow

	$(function() {
		$(".shopWrapper").hover(function() {
			$("img", this).stop().animate({
				left: "-296px"
			}, {
				queue: false,
				duration: 300
			});
		}, function() {
			$("img", this).stop().animate({
				left: "0px"
			}, {
				queue: false,
				duration: 300
			});
		});
	});



});