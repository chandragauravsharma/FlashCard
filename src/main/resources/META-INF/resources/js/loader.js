var count = 0;
var ajaxResult=[];

var counter = 0;

$(document).ready(function() {
$.ajax({ 
	type: "GET",
	url: "http://localhost:8080/card",
	dataType: "json",
	contentType: "application/json",
	async:false,
    success: function(data) {
    	count = data.totalCards;
    	ajaxResult.push(data.cards);
    	$('#id-front').html(ajaxResult[0][0].frontData);
    	$('#id-back').html(ajaxResult[0][0].backData);
    },
    failure: function() {
    	alert("Failed to fetch flashcards from db");
    }}).done(function() {
    	console.log("Done! Ajax Call Finished");
    });
});


function show_next_card() {
	if (counter < count-1) {
		counter++;
		var fData = ajaxResult[0][counter].frontData;
		var bData = ajaxResult[0][counter].backData;
		fData = fData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		bData = bData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		$('#id-front').html(fData);
    	$('#id-back').html(bData);
	}
}

function show_previous_card() {
	if (counter > 0) {
		counter--;
		var fData = ajaxResult[0][counter].frontData;
		var bData = ajaxResult[0][counter].backData;
		fData = fData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		bData = bData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		$('#id-front').html(fData);
    	$('#id-back').html(bData);    	
	}
}

