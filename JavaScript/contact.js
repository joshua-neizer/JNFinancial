$('#submit').click(function () {
    var first_name = $("#first-name").val(),
        last_name = $("#last-name").val(),
        email = $("#email").val(),
        phone = $("#telephone").val(),
        comment = $("#comment").val();
    
    if(
        first_name == "" ||
        last_name == "" ||
        email == "" ||
        phone == "" ||
        comment == ""
    ){
        alert("Please fill out the form");
        return;
    }

    var message =   "Hello Joseph,\n\n" + 
                    "There has been a message from a new client:\n\n" +
                    "Name: " + last_name +", " + first_name + "\n" +
                    "Email: " + email + "\n" +
                    "Phone Number: " + phone + "\n" +
                    "Message: " + comment;
    console.log(message);
});