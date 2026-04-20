function toggleInfo() {
    const section = document.getElementById("extra-info");
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function changeTheme() {
    const theme = document.getElementById("theme-style");
    if (theme.getAttribute("href") === "red.css") {
        theme.setAttribute("href", "green.css");
    } else {
        theme.setAttribute("href", "red.css");
    }
}

function showMessage() {
    alert("Witaj na moim CV!");
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim(); // Soyismi alıyor
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    // 1. Boş alan kontrolü (surname buraya eklendi)
    if (name === "" || surname === "" || email === "" || message === "") {
        error.textContent = "Wszystkie pola są wymagane!";
        return false;
    }

    // 2. Rakam kontrolü (surname buraya eklendi)
    const hasNumber = /\d/;
    // HEM name HEM surname kontrol ediliyor
    if (hasNumber.test(name) || hasNumber.test(surname)) {
        error.textContent = "Imię i nazwisko nie mogą zawierać cyfr!";
        return false;
    }

    // 3. Email kontrolü
    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Niepoprawny email!";
        return false;
    }

    // Eğer yukarıdaki hiçbir 'if'e girmezse buraya ulaşır:
    success.textContent = "Formularz został wysłany!";
    return false; 
}