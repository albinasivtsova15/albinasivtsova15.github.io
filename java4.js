function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$(document).ready(function () {
    $(".pushButton").click(function (event) {
        openForm();
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#Form").css("display", "block").animate({opacity: 1}, 198);
        });
        if (localStorage.getItem("name").length > 0) {
            document.querySelector("#name_p").value =
            localStorage.getItem("name");
        }
        if (localStorage.getItem("email").length > 0) {
            document.querySelector("#email_p").value =
            localStorage.getItem("email");
        }
        if (localStorage.getItem("mes").length > 0) {
            document.querySelector("#mes").value =
            localStorage.getItem("mes");
        }
        if (localStorage.getItem("check") === "true") {
            document.querySelector("#check").checked = true;
        }
    });

    $("#myOverlay, #back").click(function () {
        $("#Form").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    });

    $("#send").click(function () {
        var slapform = new Slapform();
        $("#send").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("mes"),
                name: localStorage.getItem("name")
            },
            form: "aXHxW8DxN"
        }).then(function () {
            alert("Ваше сообщение успешно отправлено!");
        }).catch(function () {
            alert("Ошибка отправки сообщения. Попробуйте ещё раз.");
        });
        document.querySelector("#name_p").value = "";
        document.querySelector("#email_p").value = "";
        document.querySelector("#mes").value = "";
        document.querySelector("#check").checked = false;
        localStorage.clear();
        return false;
    });

    addEventListener("popstate", function () {
        $("#Form").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    }, false);

    $("#name_p, #email_p, #mes, #check").change(function () {
        var nam = $("#name_p").val();
        var email = $("#email_p").val();
        var mes = $("#mes").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("name", nam);
        localStorage.setItem("email", email);
        localStorage.setItem("mes", mes);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (nam.length > 0 && email.length > 0 && mes.length > 0 && check) {
            $("#send").prop("disabled", false);
        } else {
            $("#send").prop("disabled", true);
        }
        return false;
    });
});
