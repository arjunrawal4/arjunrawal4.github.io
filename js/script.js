$(function(){
	var container = $("#container")
	container.shuffleLetters();
	setTimeout(function(){
	},8000);
});

$(document).ready(function () {
	$('#resume').click(function () {
		$("#resume_pdf").show();
	});
});    