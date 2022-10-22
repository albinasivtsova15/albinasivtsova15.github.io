var document;
var alert;
var console;

function onClick() {
    var r;
    var f1;
    var f2;
    r = document.getElementById("result");
    r.innerHTML = "";
    f1 = document.getElementById("kol").value;
    f2 = document.getElementById("price").value;
    if ((/\D/.test(f1)) || (/\D/.test(f2))) {
        alert("!!!Допускаются только цифры: 0-9!!!");
        return;
    }
    r.innerHTML = f1 * f2;

}

document.addEventListener("DOMContentLoaded", function (event) {
    var b = document.getElementById("btn");
    console.log(event.type + " на " + event.currentTarget);
    b.addEventListener("click", onClick);

});
