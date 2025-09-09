const selectorLiczbaCegiel = "#liczba-cegiel";
const selectorCeglaPremium = "#cegla-premium";

const cegly = {
    standard: {
        waga: 1.5,
        cena: 2,
    },
    premium: {
        waga: 1.75,
        cena: 2 * 1.3,
    },
};

[selectorLiczbaCegiel, selectorCeglaPremium].forEach((selector) =>
    document.querySelector(selector).addEventListener("input", oblicz)
);

function oblicz() {
    const liczbaCegiel =
        parseInt(document.querySelector(selectorLiczbaCegiel).value) || 0;
    const ceglaPremium = document.querySelector(selectorCeglaPremium).checked;

    const rodzajCegly = ceglaPremium ? cegly.premium : cegly.standard;

    if (liczbaCegiel <= 0)
        return (document.querySelector("#wynik").textContent = "");

    document.querySelector(
        "#wynik"
    ).textContent = `Zakupiona ilość cegieł: ${liczbaCegiel}, cegła ${
        ceglaPremium ? "premium" : "standardowa"
    }, koszt zakupu cegieł: ${liczbaCegiel * rodzajCegly.cena}, waga cegieł: ${
        liczbaCegiel * rodzajCegly.waga
    }kg`;
}
