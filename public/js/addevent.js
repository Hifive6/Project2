// Global variables are declared here for reference later
var newEvent;
var newItem;
var itemList = [];

$("#addbtn").on("click", function(event) {
event.preventDefault();

    // Create new event object to send to db
    newEvent = {
        name: $("#name").val().trim(),
        location: $("#location").val().trim(),
        date: $("#date").val().trim(),
        time: $("#time").val().trim(),
        pin: $("#pin").val().trim()
    };

console.log(newEvent);
    // send an AJAX POST-request with jQuery
    $.post("/api/newEvent", newEvent)
        // on success, run this callback
        .then(function (data) {
            // log the data we found
            console.log(data.name);
            // tell the user we're adding a character with an alert window
            $("#event-name").html(data.name);
        });

    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#location").val("");
    $("#time").val("");
    $("#pin").val("");

    window.location.href = "/#t5";

});

// Adds Items to DB and Displays

var eventSelect = $('#name');

$('#addItem').on('click', function() {
    event.preventDefault();

    // Need to get Event ID where event name is created
    // $.get("/api/events/" + )
    // Append new item to screen for user to see
    var newItem = {
        name: $('#newItem').val().trim(),
        // EventId: newEvent.name
    }
    console.log(newItem);
    addItem();
    // Post new item to database
    $.post("/api/items", newItem).then(function(data) {
        console.log(data);
    })
})

// Creates a new item and displays on screen
function addItem() {
    var newListItem = $("#newItem").val();
    if (newListItem.length > 0) {
        itemList.push(newListItem);
        $("#itemList").append("<li>" + newListItem + "</li>");
        $('#newItem').val("");
    }
}

// Finished button for adding items takes user to Event Summary Page
// Displays the summary for the newly created event with the items
$("#final").on('click', function() {
    $("#eventItems").empty();
    window.location.href = "/#t4";
    $("#itemList").empty();
    $("#eventDate").html(newEvent.date);
    $("#eventTime").html(newEvent.time);
    $("#eventName").html(newEvent.name);
    $("#eventLocation").html(newEvent.location);
    itemList.forEach(element => {
        $("#eventItems").append("<li>" + element + "</li>");
    })
    emptyItemArray();
})

// function to empty itemList array
function emptyItemArray() {
    itemList.length = 0;
}
