// // Adds Items to DB and Displays

// var eventSelect = $('#name');

// $('#addItem').on('click', function() {
//     event.preventDefault();
//     // Append new item to screen for user to see
//     var newItem = {
//         name: $('#newItem').val().trim(),
//         // EventId: $("#event-name")
//     }
//     console.log($("#event-name").val());
//     addItem();
//     // Post new item to database
//     $.post("/api/items", newItem).then(function(data) {
//         console.log(data);
//     })
// })

// $("#final").on('click', function() {
//     window.location.href = "/#t4";
// })


// // Creates a new item and displays on screen
// function addItem() {
//     var newListItem = $("#newItem").val();
//     if (newListItem.length > 0) {
//         $("#itemList").append("<li>" + newListItem + "</li>");
//         $('#newItem').val("");
//     }
// }
