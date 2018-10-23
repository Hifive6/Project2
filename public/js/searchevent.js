$("#search-btn").on("click", function(event) {
    event.preventDefault();
    idSearch = $("#search-input").val().trim();
    console.log(idSearch);
    validateId() 
    addInfo()
})

function validateId() {
$.get("api/events/" + idSearch, function(data){
//    var time = moment(data.time, "hmm").format("HH:mm");
    if(!data){
        // $(".modal").removeClass("modal-close")
        // $(".modal").addClass("modal-open")
        
    }else{    
        
        console.log(data);
        let event = data;
        
        // location = data.location;
        
        console.log(event)
        //display_date = data.date
        
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
// function validatePin() {
// $.get("api/events/" + idSearch + "/" + pinSearch, function(data){
//     if(!data){
//         alert("not valid pin")
//     }else{
//         display = `${data["name"]}`
//         display += "<ul>";
    
//         display += "<li>" + "Name: "+ data.name + "<br>";
//         display += "Location: "+ data.location + "<br>";
//         display += "Time: "+ data.time + "</li>";
//     // `
//     // Name:         ${data["name"]}
//     // Location:     ${data["location"]}
//     // Time:         ${data["time"]}
//     // `
    
     
//         display += "</ul>";
    
//         $("#stuff").prepend(display);
//     }
//     console.log(data);
// })
// }

// function sendToBrowser() {

// }