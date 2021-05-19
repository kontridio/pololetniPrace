$(function () {
    const cas = 900;
    let ids = ["#1c", "#2c", "#3c", "#4c", "#5c", "#6c", "#7c", "#8c",];
    $('div .dropdown-menu').children().click(function () {
        switch ($(this).attr("href")) {
            case ids[0]:
                $("html, body").animate({ scrollTop: $(ids[0]).offset().top }, 2000)
                break;
            case ids[1]:
                $("html, body").animate({ scrollTop: $(ids[1]).offset().top }, 2000)
                break;
            case ids[2]:
                $("html, body").animate({ scrollTop: $(ids[2]).offset().top }, 2000)
                break;
            case ids[3]:
                $("html, body").animate({ scrollTop: $(ids[3]).offset().top }, 2000)
                break;
            case ids[4]:
                $("html, body").animate({ scrollTop: $(ids[3]).offset().top }, 2000)
                break;
            case ids[5]:
                $("html, body").animate({ scrollTop: $(ids[3]).offset().top }, 2000)
                break;
            case ids[6]:
                $("html, body").animate({ scrollTop: $(ids[3]).offset().top }, 2000)
                break;
            case ids[7]:
                $("html, body").animate({ scrollTop: $(ids[3]).offset().top }, 2000)
                break;
        }
    });
});