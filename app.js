const clock = document.querySelector(".clock");

const displayTime = function () {
  const time = new Date();
  let hours = time.getHours();
  hours = 23;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPm;

  if (hours >= 12) {
    amPm = "PM";
  } else {
    amPm = "AM";
  }

  if (hours > 12) {
    hours -= 12;
  }

  if (hours == 0) {
    hours = 12;
  }

  clock.textContent = `${hours}:${minutes}:${seconds}${amPm}`;
};

setInterval(displayTime, 1000);
