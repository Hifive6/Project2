// Adds Items to DB and Displays

$('#addItem').on('click', function() {
    event.preventDefault();
    // Append new item to screen for user to see
    var newItem = {
        name: $('#name').val().trim()
    }
    addItem();
    // Post new item to database
    $.post("/api/items", newItem)
        .then(function(data) {
            console.log(data);
        })


})

// Creates a new item and displays on screen
function addItem() {
    var newListItem = $("#name").val();
    if (newListItem.length > 0) {
        $("#itemList").append("<li>" + newListItem + "</li>");
        $('#name').val("");
    }
}
