//  Getting current date
var date = moment();
var currentTime =  date.format("dddd, MMMM Do")
$("#currentDay").text(currentTime);
// current hour
var currentHour = date.format("H");
console.log(currentHour);

// save localy
$("#nine-btn").click(function(){
    var nineStored = $("#nine-task").val() ;
    localStorage.setItem("9AM", nineStored);
});
$("#ten-btn").click(function(){
    var tenStored = $("#ten-task").val() ;
    localStorage.setItem("10AM", tenStored);
});
$("#eleven-btn").click(function(){
    var elevenStored = $("#eleven-task").val() ;
    localStorage.setItem("11AM", elevenStored);
});
$("#mid-btn").click(function(){
    var midStored = $("#mid-task").val() ;
    localStorage.setItem("12PM", midStored);
});
$("#one-btn").click(function(){
    var oneStored = $("#one-task").val() ;
    localStorage.setItem("1PM", oneStored);
});
$("#two-btn").click(function(){
    var twoStored = $("#two-task").val() ;
    localStorage.setItem("2PM", twoStored);
});
$("#three-btn").click(function(){
    var threeStored = $("#three-task").val() ;
    localStorage.setItem("3PM", threeStored);
});
$("#four-btn").click(function(){
    var fourStored = $("#four-task").val() ;
    localStorage.setItem("4PM", fourStored);
});
$("#five-btn").click(function(){
    var fiveStored = $("#five-task").val() ;
    localStorage.setItem("5PM", fiveStored);
});

function renderTasks(){    
    // nine am
    nineSaved = localStorage.getItem("9AM");
    $("#nine-task").text(nineSaved);
    // ten am
    tenSaved = localStorage.getItem("10AM");
    $("#ten-task").text(tenSaved);
    // eleven am
    elevenSaved = localStorage.getItem("11AM");
    $("#eleven-task").text(elevenSaved);
    // mid-day
    midSaved = localStorage.getItem("12PM");
    $("#mid-task").text(midSaved);
    // one pm
    oneSaved = localStorage.getItem("1PM");
    $("#one-task").text(oneSaved);
    // two pm
    twoSaved = localStorage.getItem("2PM");
    $("#two-task").text(twoSaved);
    // three pm
    threeSaved = localStorage.getItem("3PM");
    $("#three-task").text(threeSaved);
    // four pm
    fourSaved = localStorage.getItem("4PM");
    $("#four-task").text(fourSaved);
    // five pm
    fiveSaved = localStorage.getItem("5PM");
    $("#five-task").text(fiveSaved);
}

// setting background by the hour
if(currentHour == 9){
    console.log("yes");
    $("#nine-task").removeClass("bg-light");
    $("#nine-task").removeClass("bg-success");
    $("#nine-task").addClass("bg-danger");
    $("#nine-task").addClass("text-light");
}else if(currentHour > 9){
    $("#nine-task").removeClass("bg-danger");
    $("#nine-task").removeClass("bg-success");
    $("#nine-task").addClass("bg-light");
    $("#nine-task").removeClass("text-light");
}else{
    $("#nine-task").removeClass("bg-light");
    $("#nine-task").removeClass("bg-danger");
    $("#nine-task").addClass("bg-success");
    $("#nine-task").addClass("text-light");
}
// 10 AM
if(currentHour == 10){
    console.log("yes");
    $("#ten-task").removeClass("bg-light");
    $("#ten-task").removeClass("bg-success");
    $("#ten-task").addClass("bg-danger");
    $("#ten-task").addClass("text-light");
}else if(currentHour > 10){
    $("#ten-task").removeClass("bg-danger");
    $("#ten-task").removeClass("bg-success");
    $("#ten-task").addClass("bg-light");
    $("#ten-task").removeClass("text-light");
}else{
    $("#ten-task").removeClass("bg-light");
    $("#ten-task").removeClass("bg-danger");
    $("#ten-task").addClass("bg-success");
    $("#ten-task").addClass("text-light");
}
// 11AM
if(currentHour == 11){
    console.log("yes");
    $("#eleven-task").removeClass("bg-light");
    $("#eleven-task").removeClass("bg-success");
    $("#eleven-task").addClass("bg-danger");
    $("#eleven-task").addClass("text-light");
}else if(currentHour > 11){
    $("#eleven-task").removeClass("bg-danger");
    $("#eleven-task").removeClass("bg-success");
    $("#eleven-task").addClass("bg-light");
    $("#eleven-task").removeClass("text-light");
}else{
    $("#eleven-task").removeClass("bg-light");
    $("#eleven-task").removeClass("bg-danger");
    $("#eleven-task").addClass("bg-success");
    $("#eleven-task").addClass("text-light");
}
// MID DAY
if(currentHour == 12){
    console.log("yes");
    $("#mid-task").removeClass("bg-light");
    $("#mid-task").removeClass("bg-success");
    $("#mid-task").addClass("bg-danger");
    $("#mid-task").addClass("text-light");
}else if(currentHour > 12){
    $("#mid-task").removeClass("bg-danger");
    $("#mid-task").removeClass("bg-success");
    $("#mid-task").addClass("bg-light");
    $("#mid-task").removeClass("text-light");
}else{
    $("#mid-task").removeClass("bg-light");
    $("#mid-task").removeClass("bg-danger");
    $("#mid-task").addClass("bg-success");
    $("#mid-task").addClass("text-light");
}
// 1 PM
if(currentHour == 13){
    console.log("yes");
    $("#one-task").removeClass("bg-light");
    $("#one-task").removeClass("bg-success");
    $("#one-task").addClass("bg-danger");
    $("#one-task").addClass("text-light");
}else if(currentHour > 13){
    $("#one-task").removeClass("bg-danger");
    $("#one-task").removeClass("bg-success");
    $("#one-task").addClass("bg-light");
    $("#one-task").removeClass("text-light");
}else{
    $("#one-task").removeClass("bg-light");
    $("#one-task").removeClass("bg-danger");
    $("#one-task").addClass("bg-success");
    $("#one-task").addClass("text-light");
}
// 2 PM
if(currentHour == 14){
    console.log("yes");
    $("#two-task").removeClass("bg-light");
    $("#two-task").removeClass("bg-success");
    $("#two-task").addClass("bg-danger");
    $("#two-task").addClass("text-light");
}else if(currentHour > 14){
    $("#two-task").removeClass("bg-danger");
    $("#two-task").removeClass("bg-success");
    $("#two-task").addClass("bg-light");
    $("#two-task").removeClass("text-light");
}else{
    $("#two-task").removeClass("bg-light");
    $("#two-task").removeClass("bg-danger");
    $("#two-task").addClass("bg-success");
    $("#two-task").addClass("text-light");
}
// 3 PM
if(currentHour == 15){
    console.log("yes");
    $("#three-task").removeClass("bg-light");
    $("#three-task").removeClass("bg-success");
    $("#three-task").addClass("bg-danger");
    $("#three-task").addClass("text-light");
}else if(currentHour > 15){
    $("#three-task").removeClass("bg-danger");
    $("#three-task").removeClass("bg-success");
    $("#three-task").addClass("bg-light");
    $("#three-task").removeClass("text-light");
}else{
    $("#three-task").removeClass("bg-light");
    $("#three-task").removeClass("bg-danger");
    $("#three-task").addClass("bg-success");
    $("#three-task").addClass("text-light");
}
// 4 PM
if(currentHour == 16){
    console.log("yes");
    $("#four-task").removeClass("bg-light");
    $("#four-task").removeClass("bg-success");
    $("#four-task").addClass("bg-danger");
    $("#four-task").addClass("text-light");
}else if(currentHour > 16){
    $("#four-task").removeClass("bg-danger");
    $("#four-task").removeClass("bg-success");
    $("#four-task").addClass("bg-light");
    $("#four-task").removeClass("text-light");
}else{
    $("#four-task").removeClass("bg-light");
    $("#four-task").removeClass("bg-danger");
    $("#four-task").addClass("bg-success");
    $("#four-task").addClass("text-light");
}
// 5PM
if(currentHour == 17){
    console.log("yes");
    $("#five-task").removeClass("bg-light");
    $("#five-task").removeClass("bg-success");
    $("#five-task").addClass("bg-danger");
    $("#five-task").addClass("text-light");
}else if(currentHour > 17){
    $("#five-task").removeClass("bg-danger");
    $("#five-task").removeClass("bg-success");
    $("#five-task").addClass("bg-light");
    $("#five-task").removeClass("text-light");
}else{
    $("#five-task").removeClass("bg-light");
    $("#five-task").removeClass("bg-danger");
    $("#five-task").addClass("bg-success");
    $("#five-task").addClass("text-light");
}

renderTasks();