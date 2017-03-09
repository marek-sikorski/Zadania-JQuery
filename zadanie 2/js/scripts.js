$(function(){
	var carouselList = $("#carousel ul");
	var button = $("button");
	//button.click(moveLeft);
	setInterval(moveRight, 1200); 
function moveLeft() {
	carouselList.animate({'marginLeft':-1200}, 1200, moveFirstSlide);
	//ten kod wykona się po załadowaniu DOM
}
function moveRight() {
	moveLastSlide();
	carouselList.animate({'marginRight':-1200}, 1200);
}
function moveLastSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.before(lastItem);
	carouselList.css({marginRight:0});
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}
});
