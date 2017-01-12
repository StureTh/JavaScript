/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {


    HideMedia();

    $("#addBookBtn").on('click', function () {

        $("#addBookForm").slideToggle(100);

    })
    $("#allItems").on('click', function () {
        HideMedia();
        $("#mediaTable").slideToggle(100);

    })
    $("#allBooks").on('click', function () {
        HideMedia();
        $("#bookTable").slideToggle(100);

    })

})


function HideMedia() {
    $("#bookTable").hide();
    $("#mediaTable").hide();
    $("#addBookForm").hide();
}
