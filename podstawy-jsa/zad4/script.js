const selectorKilometry = "#kilometry";
const selectorGdansk = "#gdansk";

[selectorKilometry, selectorGdansk].forEach((sel) =>
    document.querySelector(sel).addEventListener("input", oblicz)
);

function oblicz() {
    const kilometry = parseInt(document.querySelector(selectorKilometry).value);
    const gdansk = document.querySelector(selectorGdansk).checked;

    let wynik;
    if (gdansk) wynik = "Dowieziemy Twoją pizzę za darmo";
    else if (kilometry) wynik = kilometry * 2;
    else wynik = "";

    document.querySelector("#koszt").textContent = wynik;
}
