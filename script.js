function whatYear(){
	if (document.getElementById("male").checked){
		var gender = "He";
	}
	else if (document.getElementById("female").checked){
		var gender = "She";
	}
	var yearNum = (document.getElementById("year").value)
		if (yearNum == 1){
			year = "freshman";
		}
		else if (yearNum == 2){
			year = "sophomore";
		}
		else if (yearNum == 3) {
			year = "junior";
		}
		else if (yearNum == 4){
			year = "senior"
		}
	alert (gender + " is a " + year);
}