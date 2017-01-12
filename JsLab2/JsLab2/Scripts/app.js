$(document).ready(function () {

    var users = [

        {
            username: "user1",
            firstname: "sture",
            lastname: "thuren",
            phonenumber: "0704059585",
            city: "Munka",
            age: 27
        },

        {
            username: "user2",
            firstname: "Issa",
            lastname: "Simonsson",
            phonenumber: "0704059333",
            city: "Munka",
            age: 26
        },

        {
            username: "user3",
            firstname: "Daniel",
            lastname: "Dahlberg",
            phonenumber: "070405999",
            city: "Halmstad",
            age: 27
        }

    ]

    var errordiv = $("#errorDiv");
    var form = $("#form");
    var hiddentext = $("#hiddentext");
    var button = $("#submit");
    var getuser = $("#getuserbutton");
    var usernotfound = $("#nouser");

    var usernameFrominput = $('#userName');
    var firstname = $("#name");
    var lastname = $("#lastname");
    var phonenumber = $("#phone")
    var city = $("#city");
    var age = $("#age");


    button.on("click", function (e) {

        if (age.val() < 1 || age.val() > 100) {

            errordiv.show();
            errordiv.html(age.val() + "Not a valid age! Enter only numbers");
            errordiv.css('background-color', "#FFA5A5");

        } else {

            var newAge = age.val() - 10;
            hiddentext.show();
            form.hide();
            hiddentext.css('background-color', "#BEF24A");S
            hiddentext.val(

                $('#userName').val() + "\n" +
                $('#name').val() + "\n" +
                $('#lastname').val() + "\n" +
                $('#phone').val() + "\n" +
                $('#city').val() + "\n" +
                $('#age').val() + "\n" +
                "Ten years ago you where" + newAge + "years old"
                );
        };

    });

    getuser.on('click', function (e) {

        

        var user = {

            username: ""
 };

       

        $.each(users, function (key, value) {
            if (usernameFrominput.val() == value.username) {
                user = value;
            } 

        });

        if (user.username != "") {

            usernameFrominput.val(user.username);
            firstname.val(user.firstname);
            lastname.val(user.lastname);
            phonenumber.val(user.phonenumber);
            city.val(user.city);
            age.val(user.age);
            usernotfound.hide();
        } else {

            usernotfound.show();
            usernotfound.text("User not found");
            usernotfound.css('color', 'red');
        };


        
    });

});