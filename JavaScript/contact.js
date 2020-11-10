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

    var message =   "Name: " + last_name + ", " + first_name + "\r\n" +
                    "Email: " + email + "\r\n" +
                    "Phone Number: " + phone + "\r\n\r\n" +
                    comment + "\r\n";
    console.log(message);

    message = encodeURIComponent(message);

    window.open('mailto:jn.cfpservices@gmail.com' + 
                '?subject=' + 'JN Financial - ' + first_name + ' ' + last_name +
                '&body='+ message);
});