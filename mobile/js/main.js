$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 100) {
        $(".scrolltop").css("opacity", "1");
    } else {
        $(".scrolltop").css("opacity", "0");
    }
});
$(function() {
    $(".scrolltop").click((e) => {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })
})
$(function() {
    $(".loadheader .humber").click(function() {
        $(this).children(".humberline").toggleClass("action");
        $(".navbar").toggleClass("apear");
    });
    $(".subtn").on("click", function() {
        $(".sub").stop().slideUp(600);
        $(this).children(".sub").stop().slideToggle(600);
    });
    $(".fruit").mouseover(() => {
        $("#fruit").css("display", "block")
        $("#vegitable").css("display", "none")
        $("#seafood").css("display", "none")
    });

    $(".vegitable").mouseover(() => {
        $("#fruit").css("display", "none")
        $("#vegitable").css("display", "block")
        $("#seafood").css("display", "none")
    });

    $(".seafood").mouseover(() => {
        $("#fruit").css("display", "none")
        $("#vegitable").css("display", "none")
        $("#seafood").css("display", "block")
    });
})