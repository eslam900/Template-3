// the click option to menu
let button = document.querySelector(".push");
let mega_menu = document.getElementById("mega-menu");
button.addEventListener("click", function (e) {
  mega_menu.classList.toggle("show-mega");
});
window.addEventListener("click", function () {
  if (!event.target.matches(".push")) {
    if (mega_menu.classList.contains("show-mega")) {
      mega_menu.classList.remove("show-mega");
    }
  }
});
// Event option
let CounterDownDate = new Date("Nov 22, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  // get time now
  let dateNow = new Date().getTime();
  // find difference
  let datdiff = CounterDownDate - dateNow;
  let days = Math.floor(datdiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datdiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((datdiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((datdiff % (1000 * 60)) / 1000);
  // put the date to element
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = Math.floor(hours);
  document.querySelector(".minutes").innerHTML = Math.floor(minutes);
  document.querySelector(".seconds").innerHTML = Math.floor(seconds);
  if (datdiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// scrolling option
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(" .scroll .score");
let stat = document.querySelector(".stats");
const nummber = document.querySelectorAll(".info-box .num");
let started = false;
// first scroll
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((score) => {
      score.style.width = score.dataset.width;
    });
  }
  // counter nummber auto
  if (window.scrollY >= stat.offsetTop) {
    if (!started) {
      nummber.forEach((num) => startcount(num));
    }
    started = true;
  }
};
// start count function
function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
