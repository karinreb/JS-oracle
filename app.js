const parent = document.getElementById("parent");
const timer = document.getElementById("timer");
const textPrediction = document.getElementById("text-prediction");
const startTimer = document.getElementById("start-timer");
const showPrediction = document.getElementById("show-prediction");
const predictions = [
  "You will receive a valentine",
  "You will be robbed",
  "You will get a lot of money",
  "You will have health problems",
  "Stay at home today",
  "No homework",
  "Your love will deceive you",
  "You will understand JavaScript",
  "You will get a promotion soon",
  "You will be fired",
];

let timerId;

const mixed = predictions.sort(() => Math.random() - 0.5);

startTimer.addEventListener("click", setTimer);

function setTimer() {
  startTimer.classList.remove("active");
  timerId = setInterval(() => {
    timer.textContent = Math.floor(Math.random() * mixed.length);
    showPrediction.classList.add("active");
  }, 100);
}

showPrediction.addEventListener("click", () => {
  clearInterval(timerId);
  showPrediction.classList.remove("active");
  addPrediction(+timer.textContent);
});

function addPrediction(number) {
  textPrediction.textContent = mixed[number];
}
