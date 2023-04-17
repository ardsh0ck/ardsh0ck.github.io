$(function() {
    $(".premium-highlights-detail-link").on("click", function() {
        return $('#premium-highlights-tab-menu a[href="#highlights"]').tab("show"), $("html, body").animate({
            scrollTop: $("#highlights").offset().top - 100
        }, 300), !1
    })
});