
var listOfActivities = [];
var randomizeAct = listOfActivities;
var randomizeAct = Math.random();

function insert() {
for (var i = 0; i < textActivity.length; i++) {
	listOfActivities.push(textActivity[i].value);
}

//shows array position and activity associated
//for (var i in listOfActivities) {
//	alert(i + ': ' + listOfActivities[i]);
//}

if (randomizeAct < 0.34) {
	randomizeAct = listOfActivities[0];
} else if (randomizeAct <= 0.67) {
	randomizeAct = listOfActivities[1];
} else {
	randomizeAct = listOfActivities[2];
}
document.write("Here are your activities " + listOfActivities + "<br>")
document.write("You should do " + randomizeAct + " " + "today.");
}	
