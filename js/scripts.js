$(document).ready(function() {
     //for tooltip implementation
       // $(document).ready(function () {
        //    $('[data-toggle = "tooltip"').tooltip();
        //});

        //for carousel pause and plau
    //seems the interval is not working for me
    $("#mycarousel").carousel({ interval: 2000});

    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause")
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        };
        
    });

    //Modal Tables with jQuery
    $("#reservation").click(function () {
        $('#reservationModal').modal('show')
    });

    $("#loginstuff").click(function () {
        $('#loginModal').modal('show')
    });

});