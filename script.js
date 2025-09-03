
const times = ["5 min","56 min","120 min"];
const slider = document.getElementById("cooking-time");
const output = document.getElementById("timeValue");

output.textContent = times[slider.value];

slider.addEventListener("input", fuction() {
    output.textContent = times[this.value]
});