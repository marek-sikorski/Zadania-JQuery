
var span = $("span");
span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});
var paragraphs = $('p');
paragraphs.each(function(index, element) {
var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
$(element).append(button) 
});
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
$(function(){
  var li = $('nav').find('li').last().css('color', 'blue');
  var li = $('nav').find('li').first().css('text-transform', 'uppercase');
  console.log(li);
});