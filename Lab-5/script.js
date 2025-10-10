function validateForm() {
    let name = document.getElementById('name');
    let group = document.getElementById('group');
    let phone = document.getElementById('phone');
    let addres = document.getElementById('addres');
    let email = document.getElementById('e-mail');

    let valid = true;

    // ПІБ: 6 літер + пробіл + Л.Л.
    if (!/^[\p{L}]{6}\s[\p{L}]\.[\p{L}]\.$/u.test(name.value)) {
        name.style.borderColor = 'red';
        valid = false;
    } else {
        name.style.borderColor = '';
    }

    // Група: ТТ-ЧЧ
    if (!/^[А-ЯІЇЄҐ]{2}-\d{2}$/u.test(group.value)) {
        group.style.borderColor = 'red';
        valid = false;
    } else {
        group.style.borderColor = '';
    }

    // Адреса: м. ЧЧЧЧЧЧ
    if (!/^м\.\s\d{6}$/.test(addres.value)) {
        addres.style.borderColor = 'red';
        valid = false;
    } else {
        addres.style.borderColor = '';
    }

    // Телефон: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
    if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone.value)) {
        phone.style.borderColor = 'red';
        valid = false;
    } else {
        phone.style.borderColor = '';
    }

    // Email: тттттт@ттттт.com
    if (!/^[\p{L}]{6}@[A-Za-z]{6}\.com$/u.test(email.value)) {
        email.style.borderColor = 'red';
        valid = false;
    } else {
        email.style.borderColor = '';
    }

    if (valid) {
        document.getElementById("outputTable").style.display = "table";
        document.getElementById("outputName").innerText = name.value;
        document.getElementById("outputGroup").innerText = group.value;
        document.getElementById("outputPhone").innerText = phone.value;
        document.getElementById("outputAddres").innerText = addres.value;
        document.getElementById("outputEmail").innerText = email.value;

    }
}
