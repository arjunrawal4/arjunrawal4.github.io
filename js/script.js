$(function(){
	var container = $("#container")
	container.shuffleLetters();
	setTimeout(function(){
	},4000);

	var container1 = $("#container1")
	container1.shuffleLetters();
	setTimeout(function(){
	},6000);
	
	var container2 = $("#container2")
	container2.shuffleLetters();
	setTimeout(function(){
	},8000);

});

$(document).ready(function () {
	$('#resume').click(function () {
		$("#resume_pdf").show();
	});
});    
