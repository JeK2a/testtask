$(document).ready(function() {
    $(".box").hover(function() {
        // при наведении курсора мыши
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        $(this).children("p").show();
        $(this).children("button").show();
        $(this).parent().parent().css("z-index", 1);
        $(this).animate({
            height  : "450",
            // width   : "250",
            // left    : "-=50",
            // top     : "-=150"
        }, "fast");
    }, function() {
        // hover out
        $(this).css("background-color", "");
        $(this).css("color", "white");
        $(this).children("p"). hide();
        $(this).children("button").hide();
        $(this).parent().parent().css("z-index", 0);
        $(this).animate({
            height  : "200",
            // width   : "150",
            // left    : "+=50",
            // top     : "+=150"
        }, "fast");
    });
});