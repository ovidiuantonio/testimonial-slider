const buttons = document.querySelector(".testimonial__controls");
const text = document.querySelector(".testimonial__text");
const author = document.querySelector(".testimonial__author");
const imageBoy = document.querySelector(".image-boy");
const imageGirl = document.querySelector(".image-girl");

var index = 0;

const time = 10000;

function change() {
  index++;
  setTimeout(() => {
    if (index % 2 == 1) {
      imageBoy.style.opacity = "0";
      imageGirl.style.opacity = "1";
      text.textContent = `“ I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”`;
      author.innerHTML = "Tanya Sinclair <span>UX Engineer</span>";
    } else {
      imageBoy.style.opacity = "1";
      imageGirl.style.opacity = "0";
      text.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this
        course. The depth the instructors go into is incredible. I now feel so
        confident about starting up as a professional developer. ”`;
      author.innerHTML =
        "John Tarkpor <span>Junior Front-end Developer </span>";
    }
    change();
  }, time);
}

change();

buttons.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn-next") ||
    e.target.classList.contains("btn-prev")
  ) {
    index++;
  }

  if (index % 2 == 1) {
    imageBoy.style.opacity = "0";
    imageGirl.style.opacity = "1";
    text.textContent = `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`;
    author.innerHTML = "Tanya Sinclair <span>UX Engineer</span>";
  } else {
    imageBoy.style.opacity = "1";
    imageGirl.style.opacity = "0";
    text.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ”`;
    author.innerHTML = "John Tarkpor <span>Junior Front-end Developer </span>";
  }
});
