const wynik = document.querySelector("#wynik");
const blad = document.querySelector("#blad");

document
    .querySelector("#dodawanie")
    .addEventListener("click", () => oblicz("+"));
document
    .querySelector("#odejmowanie")
    .addEventListener("click", () => oblicz("-"));
document
    .querySelector("#mnozenie")
    .addEventListener("click", () => oblicz("*"));
document
    .querySelector("#dzielenie")
    .addEventListener("click", () => oblicz("/"));
document.querySelector("#modulo").addEventListener("click", () => oblicz("%"));
document
    .querySelector("#dzielenie-calkowite")
    .addEventListener("click", () => oblicz("//"));

function oblicz(akcja) {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        wynik.textContent = "";
        blad.textContent = "Brakuje danych!";
        return;
    } else blad.textContent = "";

    let wynik;
    switch (akcja) {
        case "+":
            wynik = a + b;
            break;
        case "-":
            wynik = a - b;
            break;
        case "*":
            wynik = a * b;
            break;
        case "/":
            if (b !== 0) {
                wynik = a / b;
            } else {
                blad.textContent = "Nie można dzielić przez zero!";
            }
            break;
        case "%":
            wynik = a % b;
            break;
        case "//":
            if (b !== 0) {
                wynik = Math.floor(a / b);
            } else {
                blad.textContent = "Nie można dzielić przez zero!";
            }
            break;
    }

    if (wynik !== undefined) {
        document.getElementById("wynik").textContent = wynik;
    }
}
