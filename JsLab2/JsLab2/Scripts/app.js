$(document).ready(function () {

    var errordiv = $("#errorDiv");
    var form = $("#form");
    var hiddentext = $("#hiddentext");
    var button = $("#submit");
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
            hiddentext.css('background-color', "#BEF24A");
            hiddentext.val(

                $('#username').val() + "\n" +
                $('#name').val() + "\n" +
                $('#lastname').val() + "\n" +
                $('#phone').val() + "\n" +
                $('#city').val() + "\n" +
                $('#age').val() + "\n" +
                "Ten years ago you where" + newAge + "years old"
                );
        };

    });

});