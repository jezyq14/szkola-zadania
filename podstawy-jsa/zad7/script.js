const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const liczba = parseInt(document.querySelector("#liczba").value);
    const stalyKlient = document.querySelector("#staly-klient").checked;

    let wynik;
    if (isNaN(liczba) || liczba < 0) {
        wynik = "Podaj poprawną liczbę";
    } else if (liczba >= 1 && liczba <= 50) {
        wynik = liczba * 2;
    } else if (liczba >= 51 && liczba < 100) {
        wynik = liczba * 1.5;
    } else {
        wynik = liczba;
    }

    if (wynik && stalyKlient) wynik *= 0.8;

    document.querySelector("#wynik").textContent = !isNaN(wynik)
        ? `${wynik.toFixed(2)} zł`
        : wynik;
});
