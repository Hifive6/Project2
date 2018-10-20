$("#search-btn").on("click", function(event) {
    event.preventDefault();
    idSearch = $("#search-input").val().trim();
    console.log(idSearch);
    validateId() 
    
})

function validateId() {
$.get("api/events/" + idSearch, function(data){
    if(!data){
        alert("go home, you are drunk")
    }
    console.log(data.name);
    var display = '<h1>Name: ' + data.name + '</h1>';
    var newBtn = '<button>Search Pin</button>';
    newBtn.attr("width", 

    $('.button_box2').append(display);
    console.log("worked");
    // jknuckles.jk111@gmail.com
    
})
}

$("#btn").on("click", function(event) {
    event.preventDefault();
    pinSearch = $("#pin-input").val().trim();
    console.log(pinSearch);
    validatePin() 
})

function validatePin() {
$.get("api/events/" + idSearch + "/" + pinSearch, function(data){
    console.log(data);
})
}

function sendToBrowser() {

}