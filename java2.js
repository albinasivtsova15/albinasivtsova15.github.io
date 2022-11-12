var document;
var window;
var alert;
var console;

function updatePrice() {
    var kol = document.getElementById("kol").value;
    var s = document.getElementsByName("prodType");
    var select = s[0];
    var price ;
    var optionPrice;
    var checkDiv;
    var propPrice;
    var prodPrice;
    var checkboxes;
    var prices = getPrices();
    var priceIndex = parseInt(select.value) - 1;
    var radioDiv = document.getElementById("radios");
    var radios = document.getElementsByName("prodOptions");
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    if (select.value === "3" || select.value === "1") {
        radioDiv.style.display = "none";
    } else {
        radioDiv.style.display = "block";
    }
    radios.forEach(function (radio) {
        if (radio.checked) {
            optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });


    checkDiv = document.getElementById("checkboxes");
    if (select.value === "2" || select.value === "1") {
        checkDiv.style.display = "none";
    } else {
        checkDiv.style.display = "block";
    }


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    prodPrice = document.getElementById("result2");
    prodPrice.innerHTML = (price * kol);
    if (/\D/.test(kol)) {
        prodPrice.innerHTML = "Неверные данные";
    }
}

function getPrices() {
    return {
        prodOptions: {
            option2: 10,
            option3: 5
        },
        prodProperties: {
            prop1: 1
        },
        prodTypes: [100, 200, 150]
    };
}

window.addEventListener("DOMContentLoaded", function () {

    var radioDiv = document.getElementById("radios");
    var s;
    var select;
    var radios;
    var checkboxes;
    var kol;
    radioDiv.style.display = "none";


    s = document.getElementsByName("prodType");
    select = s[0];

    select.addEventListener("change", function () {
        updatePrice();
    });


    radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updatePrice();
        });
    });


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updatePrice();
        });
    });

    kol = document.getElementById("kol");
    kol.oninput = function () {
        updatePrice();
    };

    updatePrice();
});




function onClick() {
    var r;
    var f1;
    var f2;
    r = document.getElementById("result1");
    r.innerHTML = "";
    f1 = document.getElementById("kol1").value;
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
