
var listOfActivities = [];
var listOfActivitiesInput = document.getElementById("textActivity");
var randomizeAct = listOfActivitiesInput;
var randomizeAct = Math.random();

function insert() {
listOfActivities.push(listOfActivitiesInput);
if (randomizeAct < 0.34) {
	randomizeAct = listOfActivities[0];
} else if (randomizeAct <= 0.67) {
	randomizeAct = listOfActivities[1];
} else {
	randomizeAct = listOfActivities[2];
}
document.write("Here are your activities " + listOfActivitiesInput + "<br>")
document.write("Do " + randomizeAct);
}	

