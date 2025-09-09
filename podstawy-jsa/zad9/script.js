const selectorNormalne = "liczba-biletow-normalnych";
const selectorUlgowe = "liczba-biletow-ulgowych";
const selectorGodziny = "liczba-godzin";
const selectorKartaDuzejRodziny = "karta-duzej-rodziny";
[
    selectorNormalne,
    selectorUlgowe,
    selectorGodziny,
    selectorKartaDuzejRodziny,
].forEach((selector) => {
    document.getElementById(selector).addEventListener("input", obliczCene);
});

function obliczCene() {
    const liczbaBiletowNormalnych =
        parseInt(document.getElementById(selectorNormalne).value) || 0;
    const liczbaBiletowUlgowych =
        parseInt(document.getElementById(selectorUlgowe).value) || 0;
    const liczbaGodzin =
        parseInt(document.getElementById(selectorGodziny).value) || 0;
    const kartaDuzejRodziny = document.getElementById(
        selectorKartaDuzejRodziny
    ).checked;

    if (
        liczbaGodzin <= 0 ||
        liczbaBiletowNormalnych + liczbaBiletowUlgowych <= 0
    )
        return (document.getElementById("wynik").innerText = "");

    let koszt = 0;

    let gratisNormalne = Math.floor(liczbaBiletowUlgowych / 15);
    let platneNormalne = Math.max(liczbaBiletowNormalnych - gratisNormalne, 0);

    if (liczbaGodzin <= 4) {
        koszt += platneNormalne * 10 + liczbaBiletowUlgowych * 5;
    } else {
        koszt += platneNormalne * 50 + liczbaBiletowUlgowych * 25;
    }

    if (kartaDuzejRodziny) koszt *= 0.9;

    document.getElementById(
        "wynik"
    ).innerText = `Całkowity koszt wstępu do aquaparku: ${koszt} zł`;
}
