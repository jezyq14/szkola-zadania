const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    const number = parseInt(document.querySelector("#number").value);
    let output = "";

    if (number > 0) output = "Dodatnia";
    else if (number < 0) output = "Ujemna";
    else if (number === 0) output = "Równa zero";
    else output = "";

    document.querySelector("#output").textContent = output;
});
