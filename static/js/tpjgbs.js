$(function () {
    $(".fontsize").on("mouseover", function () {
        var src = $(this).find("img").attr('src');
        if (src.indexOf("_a") < 0) {
            console.log(src);
            src = src.replace(".png", "_a.png");
            console.log(src);
            $(this).find("img").attr("src", src);
        }
    }).on("mouseleave", function () {
        var src = $(this).find("img").attr('src');
        if (src.indexOf("_a") >= 0) {
            console.log(src);
            src = src.replace("_a.png", ".png");
            console.log(src);
            $(this).find("img").attr("src", src);
        }
    });
});