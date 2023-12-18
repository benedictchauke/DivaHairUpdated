$(function () {
    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#Buy");
    button.on("click", function() {
        console.log("Buying Item");
    });

    var info = $(".prop li");
    info.on("click", function() {
        console.log("you clicked on" + $(this).text());
    });

    var $loggin = $("#log-in");
    var $logForm = $(".logForm");

    $loggin.on("click", function () {
        $logForm.toggle(1000);
    });
});