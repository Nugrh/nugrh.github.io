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

        $("#content1").animate({bottom: '512'}, "slow");
        $("#content2").animate({bottom: '512'}, "slow");
        $("#content3").animate({bottom: '512'}, "slow");
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

    $("#about-btn-res").click(function() {
        $("#about").fadeIn();
        $("#project").hide();
        $("#cv").hide();
        $("#contact").hide();
    })

    $("#project-btn-rev").click(function() {
        $("#about").hide();
        $("#project").fadeIn();
        $("#cv").hide();
        $("#contact").hide();

        $("#content1").animate({bottom: '512'}, "slow");
        $("#content2").animate({bottom: '512'}, "slow");
        $("#content3").animate({bottom: '512'}, "slow");
    })

    $("#cv-btn-rev").click(function() {
        $("#about").hide();
        $("#project").hide();
        $("#cv").fadeIn();
        $("#contact").hide();
    })

    $("#contact-btn-rev").click(function() {
        $("#about").hide();
        $("#project").hide();
        $("#cv").hide();
        $("#contact").fadeIn();
    })



})