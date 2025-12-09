emailjs.init("YEWQNXjHrI21nh2Re"); // ключ
document.getElementById("booking").addEventListener("submit", function(e) { // форма
    e.preventDefault();

        const chooseRadio = document.querySelector('input[name="choose"]:checked'); // выбирать только выбраны
        const choose = chooseRadio ? chooseRadio.value : "Не выбрано";

        const checkboxList = document.querySelectorAll('#styleB');
        const checkboxValues = [];
        checkboxList.forEach((c, i) => {
            if (c.checked) checkboxValues.push(i + 1);
        });

    const params = {
    surname: document.getElementById("surname").value,
    name: document.getElementById("name").value,
    patronymic: document.getElementById("patronymic").value,
    tel: document.getElementById("tel").value,
    email: document.getElementById("email").value,
    text: document.getElementById("text").value,
    choose: choose,
    checkboxs: checkboxValues.join(", ")
    };

    emailjs.send("service_errorsans22", "template_pque6xm", params) // отправка emailjs
        .then(function() {
            alert("Отправлено!");
        }, function(error) {
            alert("Ошибка: " + JSON.stringify(error));
        });
    console.log(checkboxValues)
});
