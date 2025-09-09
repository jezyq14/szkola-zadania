const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
const e = document.querySelector("#e");

const aCheckbox = document.querySelector("#check-a");
const bCheckbox = document.querySelector("#check-b");
const cCheckbox = document.querySelector("#check-c");
const dCheckbox = document.querySelector("#check-d");
const eCheckbox = document.querySelector("#check-e");

[a, b, c, d, e, aCheckbox, bCheckbox, cCheckbox, dCheckbox, eCheckbox].forEach(
    (el) => {
        el.addEventListener("input", () => {
            let sum = 0;

            const a = document.querySelector("#a");
            const b = document.querySelector("#b");
            const c = document.querySelector("#c");
            const d = document.querySelector("#d");
            const e = document.querySelector("#e");

            if (
                [a.value, b.value, c.value, d.value, e.value].some((val) =>
                    isNaN(Number(val))
                )
            )
                return;

            const aCheckbox = document.querySelector("#check-a");
            const bCheckbox = document.querySelector("#check-b");
            const cCheckbox = document.querySelector("#check-c");
            const dCheckbox = document.querySelector("#check-d");
            const eCheckbox = document.querySelector("#check-e");

            [
                [a.value, aCheckbox.checked],
                [b.value, bCheckbox.checked],
                [c.value, cCheckbox.checked],
                [d.value, dCheckbox.checked],
                [e.value, eCheckbox.checked],
            ].forEach(([val, isChecked]) => {
                if (isChecked) {
                    sum += Number(val);
                }
            });

            document.querySelector("#sum").textContent = sum;
        });
    }
);
