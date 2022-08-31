function initialize() {
    $("#main").height("100%");
    $("#main").width("100%");

    var height = $("#main").height();
    var width = $("#main").width();

    if (height < width) {
        // alert("横に向けて");
        // return;
    }

    var resizedWidth = height / 16 * 9;

    if (resizedWidth < width) {
        $("#main").width(height / 16 * 9);
        $("#main").height(height);
    } else {
        $("#main").width(width);
        $("#main").height(width / 9 * 16);
    }
}
