// Adds Items to DB and Displays

$('#item-input').on('click', function() {
    event.preventDefault();

    var newItem = {
        name: $('#name').val().trim()
    }

    console.log(newItem);

    addItem();



    // $.post('/api/newItem', newItem)
    //     .then(function(data) {
    //         console.log(data);
    //     })


})

function addItem() {
    var newListItem = $("#name").val();
    if (newListItem.length > 0) {
        $("itemsList").append("<li>" + newListItem + "</li>");
        $('#name').val("");
    }
}