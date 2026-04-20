// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {
    console.log("Strona załadowana!");
});

// 🔥 Gizli alan aç/kapa
function toggleInfo() {
    const section = document.getElementById("extra-info");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// 🔥 Tema değiştir (red ↔ green)
function changeTheme() {
    const theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "red.css") {
        theme.setAttribute("href", "green.css");
    } else {
        theme.setAttribute("href", "red.css");
    }
}

// 🔥 Alert mesaj
function showMessage() {
    alert("Witaj na moim CV!");
}

function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    if (name === "" || email === "" || message === "") {
        error.textContent = "Wszystkie pola są wymagane!";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Niepoprawny email!";
        return false;
    }

    success.textContent = "Formularz został wysłany!";
    return false; 
}