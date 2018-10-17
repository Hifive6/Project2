$("#addbtn").on("click", function(event) {
event.preventDefault();

    // make a newCharacter obj
    var newEvent = {
        // name from name input
        name: $("#name").val().trim(),
        // role from role input
        location: $("#location").val().trim(),
        // age from age input
        time: $("#time").val().trim(),
        // points from force-points input
        pin: $("#pin").val().trim()
    };

console.log(newEvent);
    // send an AJAX POST-request with jQuery
    $.post("/api/newEvent", newEvent)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a character with an alert window
            
        });

    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#location").val("");
    $("#time").val("");
    $("#pin").val("");

});