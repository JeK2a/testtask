$(document).ready(function() {

    //пременная отступа
    // var cont_left = $(".box").position().left;

    // рапределяем миниатюра по длинне,
    // смещая их по горизонтали
    // $(".box").each(function(index) {
    //     var left = (index * 160) + cont_left;
    //     $(this).css("left", left + "px");
    // });


    // $(".box").bind({
    //     'mouseover':function() { $(this).css("background-color", "lightblue"); },
    //     'mouseout':function() { $(this).css("background-color", "none"); },
    // });

    $(".box").hover(function() {
        // при наведении курсора мыши
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        $(this).parent().parent().css("z-index", 1);
        $(this).animate({
            height  : "+=150",
            // width   : "250",
            // left    : "-=50",
            top     : "-=150"
        }, "fast");
    }, function() {
        // hover out
        $(this).css("background-color", "");
        $(this).css("color", "white");
        $(this).parent().parent().css("z-index", 0);
        $(this).animate({
            height  : "300",
            // width   : "150",
            // left    : "+=50",
            top     : "+=150"
        }, "fast");
    });

});