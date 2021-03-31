$(window).load(function () {
    setTimeout(function () {
        $(".loading").fadeOut(1000);
        $("body").removeClass("on");
    }, 3000);
}); //loading
$(function () {
    $(".btn,#gnb ul li a").click(function () {
        $(".wrap").toggleClass("open");
    }); //Toggle btn
    $("#topBtn").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            400
        ); //topBtn
    });
});
