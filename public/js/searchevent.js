var idSearch;
var pinSearch;

$("#search-btn").on("click", function(event) {
    event.preventDefault();
    idSearch = $("#search-input").val().trim();
    console.log(idSearch);
    validateId() 
    // addInfo()
});

$("#pin-btn").on("click", function(event) {
    event.preventDefault();
    pinSearch = $("#pin-input").val().trim();
    console.log(pinSearch);
    validatePin();
});

function validateId() {
    $.get("api/events/" + idSearch, function(data){
        //var time = moment(data.time, "hmm").format("HH:mm");
        if(!data){
            // $(".modal").removeClass("modal-close")
            // $(".modal").addClass("modal-open")
            alert("Please enter correct id");
            return;
            
        } else{
            $("#search-input").val('');    
            let event = data;
            console.log(event)
            
            $("#eventName").append(event.name);
            $("#time").append(event.time);
            $("#location").append(event.location);
            // validatePin()
        }
    })
}



function addInfo(){
    window.open('event.html','_self');
    //$.get("api/events/" + idSearch, function(data){


    //})
}

function validatePin() {
    $.get("api/events/" + idSearch + "/" + pinSearch, function(data){
        if(!data){
            // change this
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

// function sendToBrowser() {

// }