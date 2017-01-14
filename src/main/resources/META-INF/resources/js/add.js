
function submit_card() {
	var fData = $('#fData').val();
	if (fData.trim().length < 1) {
		alert("Please Enter Front Data...");
	    return; 
	}
	var bData = $('#bData').val();
	sendData = {"frontData": fData, "backData": bData}
	
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/card",
		dataType: "json",
		data: JSON.stringify(sendData),
		contentType: "application/json",
		async:false,
		success: function(response) {
			alert("Card submitted successfully!");
			location.reload(true);
		},
		failure: function(response) {
			alert("Card submission failed. Try again!");
		}
	});
}