$(document).ready(function(){
    $("#about-btn").click(function() {
        $("#about").fadeIn();
        $("#project").hide();
        $("#cv").hide();
        $("#contact").hide();
    })

    $("#project-btn").click(function() {
        $("#about").hide();
        $("#project").fadeIn();
        $("#cv").hide();
        $("#contact").hide();
    })

    $("#cv-btn").click(function() {
        $("#about").hide();
        $("#project").hide();
        $("#cv").fadeIn();
        $("#contact").hide();
    })

    $("#contact-btn").click(function() {
        $("#about").hide();
        $("#project").hide();
        $("#cv").hide();
        $("#contact").fadeIn();
    })
})