var n = 0;
while (n < 80) {
var r = [30,40,50];
r[0] += n * 1;
r[1] += n * 20;
r[2] += n * 20;
$("body > *").eq(n).css("background-color","rgb("+r+")");
n++
}
