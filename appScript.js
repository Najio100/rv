// default
$("div").fadeOut();
$("div").eq(0).fadeIn();

// div 1
$("div").eq(0).children("button").click( function () {
$("div").eq(0).fadeOut();
$("div").eq(1).fadeIn();
});

// div 2
$("div").eq(1).children("button").click( function () {
$("div").eq(1).fadeOut();
setInterval(ur,00)
alert("please wait...");
});

// 3+4
var n = 0;
function ur() {
n++;
if (n == 1) {
$("div").eq(2).fadeIn();
}
if (n==2) {
$("div").eq(2).fadeOut();
$("div").eq(3).fadeIn();
} 
if (n == 3) {
$("div").eq(3).fadeOut();
$("div").eq(4).fadeIn();
var val = $("input").val();
$("div").eq(4).children("p").html("you thought of <b> "+ val +"</b>");
}
}