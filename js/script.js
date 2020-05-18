$(document).ready(function() {
    $("#aboutlink").click(function() {
        $("#homelink").removeClass("active");
        $("#contactlink").removeClass("active");
        $("#aboutlink").addClass("active");
        $("#home").hide();
        $("#contact").hide();
        $("#about").fadeIn("slow");
    });
    $("#contactlink").click(function() {
        $("#homelink").removeClass("active");
        $("#aboutlink").removeClass("active");
        $("#contactlink").addClass("active");
        $("#home").hide();
        $("#about").hide();
        $("#contact").fadeIn("slow");
    });
    $("#homelink").click(function() {
        $("#aboutlink").removeClass("active")
        $("#contactlink").removeClass("active")
        $("#homelink").addClass("active")
        $("#contact").hide();
        $("#about").hide();
        $("#home").fadeIn("slow");
    });
});