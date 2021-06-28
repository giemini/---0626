$(function() {
    $("#storelink").click(() => {
        $("#memberlink").removeClass("color");
        $("#storelink").toggleClass("color");
        $("#netlink").removeClass("color");
        $("#member").removeClass("apear");
        $("#net").removeClass("apear");
        $("#store").addClass("apear");
    })
    $("#memberlink").click(() => {
        $("#storelink").removeClass("color");
        $("#netlink").removeClass("color");
        $("#memberlink").toggleClass("color");
        $("#net").removeClass("apear");
        $("#store").removeClass("apear");
        $("#member").addClass("apear");
    })
    $("#netlink").click(() => {
        $("#memberlink").removeClass("color");
        $("#storelink").removeClass("color");
        $("#netlink").toggleClass("color");
        $("#store").removeClass("apear");
        $("#member").removeClass("apear");
        $("#net").addClass("apear");
    })
})