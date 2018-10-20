$("#search-btn").on("click", function(event) {
    event.preventDefault();
    idSearch = $("#search-input").val().trim();
    // console.log(idSearch);
    validateId() 
})

function validateId() {
$.get("api/events/" + idSearch, function(data){
//    var time = moment(data.time, "hmm").format("HH:mm");
    if(!data){
        alert("go home, you are drunk")
    }else{    
        validatePin()
    }
    // console.log(data);
    
})
}



// function addInfo(data){
//     var display = '<h1>Name: ' + data.name + '</h1>';
//    $("#p3").append(display);
// }
///on .on("listener", "keyup"
//if listern which 10, 14 submit form
// $("#btn").on("click", function(event) {
//     event.preventDefault();
//     pinSearch = $("#pin-input").val().trim();
//     console.log(pinSearch);
//     validatePin() 
// })

function validatePin() {
$.get("api/events/" + idSearch + "/" + pinSearch, function(data){
    if(!data){
        alert("not valid pin")
    }else{
        display = `${data["name"]}`
        display += "<ul>";
    
        display += "<li>" + "Name: "+ data.name + "<br>";
        display += "Location: "+ data.location + "<br>";
        display += "Time: "+ data.time + "</li>";
    // `
    // Name:         ${data["name"]}
    // Location:     ${data["location"]}
    // Time:         ${data["time"]}
    // `
    
     
        display += "</ul>";
    
        $("#stuff").prepend(display);
    }
    console.log(data);
})
}

function sendToBrowser() {

}