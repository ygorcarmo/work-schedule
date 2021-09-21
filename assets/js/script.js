//  Getting current date
var date = moment();
var currentTime =  date.format("dddd, MMMM Do")
$("#currentDay").text(currentTime);
// current hour
var currentHour = date.format("HH");
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
if(currentHour >= 22 ){
    console.log("yes");
    $("#nine-task").removeClass("bg-light");
    $("#nine-task").addClass("bg-success");
}


renderTasks();