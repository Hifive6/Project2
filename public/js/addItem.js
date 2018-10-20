// Adds Items to DB and Displays

$('#add-item').on('click', function() {
    event.preventDefault();

    var newItem = {
        name: $('#item').val().trim()
    }

    console.log(newItem);

    $.post('/api/newItem', newItem)
        .then(function(data) {
            console.log(data);
        })

    $('#item').val("");

})