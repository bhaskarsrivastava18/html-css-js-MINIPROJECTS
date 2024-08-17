let passwordInput = document.getElementById("password");
let strengthLevel = document.getElementById("strength-level");
let strengthText = document.getElementById("strength-text");

passwordInput.oninput = function () {
    let value = passwordInput.value;
    let point = 0;

    if (value.length >= 6) {
        let patterns = [/\d/, /[a-z]/, /[A-Z]/, /[^a-zA-Z0-9]/];
        patterns.forEach((pattern) => {
            if (pattern.test(value)) {
                point++;
            }
        });
    }

    let width = ["w-0", "w-1/4", "w-1/2", "w-3/4", "w-full"];
    let colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-green-700"];
    let descriptions = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

    strengthLevel.className = `${width[point]} ${colors[point]} h-full`;
    strengthText.innerText = descriptions[point];
};
