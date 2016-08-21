<script type="text/javascript">
var listOfActivities = [];
var listOfActivitiesInput = document.getElementById("textActivity");
var randomizeAct = listOfActivities;
var randomizeAct = Math.random();

//testing commit

function insert() {
listOfActivities.push(listOfActivitiesInput.value);
if (randomizeAct < 0.34) {
	randomizeAct = listOfActivities[0];
} else if (randomizeAct <= 0.67) {
	randomizeAct = listOfActivities[1];
} else {
	randomizeAct = listOfActivities[2];
}

document.write("Do " + randomizeAct});


//should probably change this to a while loop
//for(var i = 0; i < 3; i++)
//	listOfActivities.push(prompt("What is your activity?"));
//	document.write("Your activities include " + listOfActivities + "<br>");

//document.write("Do " + randomizeAct);





</script>