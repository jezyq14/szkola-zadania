const btn = document.querySelector("#button");

const namesList = [
    "Jan",
    "Krzysztof",
    "Anna",
    "Maria",
    "Zofia",
    "Piotr",
    "Paweł",
    "Katarzyna",
];

btn.addEventListener("click", () => {
    document.querySelector("#list").innerHTML = namesList
        .map((name) => `<li>${name}</li>`)
        .join("");
});
