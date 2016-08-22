
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

var randomActivity = listOfActivities[Math.floor(Math.random() * listOfActivities.length)];

document.write("Here are your activities " + listOfActivities + "<br>")
document.write("You should do " + randomActivity + " " + "today.");
}	
