const selectorLiczbGosci = "#liczba";
const selectorPoprawiny = "#poprawiny";

[selectorLiczbGosci, selectorPoprawiny].forEach((sel) =>
    document.querySelector(sel).addEventListener("input", oblicz)
);

function oblicz() {
    const liczbaGosci = parseInt(
        document.querySelector(selectorLiczbGosci).value
    );
    const poprawiny = document.querySelector(selectorPoprawiny).checked;

    let koszt = liczbaGosci * 100 * (poprawiny ? 1.3 : 1);

    document.querySelector("#koszt").textContent =
        koszt?.toFixed(2) + " zł" ?? "";
}
