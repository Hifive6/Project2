var idSearch;
var pinSearch;

$("#search").on("click", function(event) {
    event.preventDefault();
    //console.log("here")
    idSearch = $("#search-input").val().trim();
    //console.log(idSearch);
    validateId() 
    
    // addInfo()
});

// $("#pin-btn").on("click", function(event) {
//     event.preventDefault();
//     pinSearch = $("#pin-input").val().trim();
//     console.log(pinSearch);
//     validatePin();
// });

// function showModal() {
//     $("#modal").on("keypress", function(event){
//         var keycode = (event.keyCode ? event.keyCode : event.which);
//         if(keycode == "13"){
//             $()
//         }
//     })
//     $("#modal").addClass("modal-show")

// }

function validateId() {
    $.get("api/events/" + idSearch, function(data){
        const event = data;
        const name = event.name
        const location = event.location
        const time = event.time

        console.log(event)
        console.log(name)
        console.log(location)
        console.log(time)

        // const info = {
            // name: 
            $("#eventName").append(name);
            // location: 
            $("#eventLocation").append(location);
            // time: 
            $("#eventTime").append(time);

        // }
        
        // console.log(info);
        
        
        // console.log(eventid)

        
        
        
        
        // if (!data === false){
        //     console.log("false")
           
            
        // }
        // else{
            
        //     console.log("true")
        // }
    })
}
        
//         if(!data){
//             
//             $("#modal").addId("modal-open")
            
            
//         } else{
//             $("#search-input").val('');    
//             let event = data;
//             console.log(event)
            
//             $("#eventName").append(event.name);
//             $("#time").append(event.time);
//             $("#location").append(event.location);
//             // validatePin()
//         }
//     })
// }





// function validatePin() {
//     $.get("api/events/" + idSearch + "/" + pinSearch, function(data){
//         if(!data){
//             // change this
//             alert("not valid pin")
//         }else{
//             display = `${data["name"]}`
//             display += "<ul>";
        
//             display += "<li>" + "Name: "+ data.name + "<br>";
//             display += "Location: "+ data.location + "<br>";
//             display += "Time: "+ data.time + "</li>";
//         // `
//         // Name:         ${data["name"]}
//         // Location:     ${data["location"]}
//         // Time:         ${data["time"]}
//         // `
        
        
//             display += "</ul>";
        
//             $("#stuff").prepend(display);
//         }
//         console.log(data);
//     })
// }

// function sendToBrowser() {

// }