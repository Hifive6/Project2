var idSearch;
var pinSearch;

$("#search").on("click", function(event) {
    event.preventDefault();
    idSearch = $("#search-input").val().trim();
    validateId()
    $("#search-input").val(''); 
});

$("#pin-btn").on("click", function(event) {
    event.preventDefault();
    pinSearch = $("#pin-input").val().trim();
    console.log(pinSearch);
    validatePin();
});

function showModal() {
    $("#modal").on("keypress", function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == "13"){
            $()
        }
    })
    $("#modal").addClass("modal-show")
}

function validateId() {
    $.get("/api/events/" + idSearch, function(data) {
        
        if(!data){
            $("#error-message").show()
        }

        else {
            $("#error-message").hide();
            $("#pin-box").show();
        }
        console.log(data);
    })
}

function validatePin() {
    $.get("api/events/" + idSearch + "/" + pinSearch, function(data){
        if(!data){
            $("#error-message2").show()
            $("#pin-input").val('');
        } else {
            window.location.href = "#t4"
            $("#error-message2").hide()
            $("#pin-box").hide();
            $("#pin-input").val('');
            displayEvent(data);
        }
    })
}

function displayEvent(data) {
    console.log(data);
    $("#eventDate").html(data.date);
    $("#eventTime").html(data.time);
    $("#eventName").html(data.name);
    $("#eventLocation").html(data.location);
    $("#eventItems").html("<h3>Items with corresponding events are currently unavailable</h3>");
    $("#eventItems").attr("style", "text-align: center");
}

