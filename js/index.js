const mvLinks = document.querySelectorAll(".pageTransition__link");

mvLinks.forEach((box) => {
  box.addEventListener("mouseover", () => {
  if (window.innerWidth >= 649) {
      box.classList.add("hovered");
    }
  });
});

window.addEventListener("resize", () => {
  mvLinks.forEach((box) => {
    if (window.innerWidth < 649) {
      box.classList.remove("hovered");
    }
  });
});

let moveRight;

document
  .querySelector(".mainVisual__sideArea.--right")
  .addEventListener("click", function () {
    moveRight = true;
    swapPositions();
  });
document
  .querySelector(".mainVisual__sideArea.--left")
  .addEventListener("click", function () {
    moveRight = false;
    swapPositions();
  });

function swapPositions() {
  mvLinks.forEach((link) => {
    link.classList.toggle("--back");
    link.style.animation = 'none';
    link.offsetHeight;
  });

  if (moveRight) {
    if (mvLinks[0].classList.contains("--back")) {
      mvLinks[0].style.animation = "link-trade-right 1s linear forwards";
      mvLinks[1].style.animation = "link-trade-left 1s linear forwards reverse";
    } else {
      mvLinks[0].style.animation = "link-trade-left 1s linear forwards reverse";
      mvLinks[1].style.animation = "link-trade-right 1s linear forwards";
    }
  } else {
    if (mvLinks[0].classList.contains("--back")) {
      mvLinks[0].style.animation = "link-trade-left 1s linear forwards";
      mvLinks[1].style.animation = "link-trade-right 1s linear forwards reverse";
    } else {
      mvLinks[0].style.animation = "link-trade-right 1s linear forwards reverse";
      mvLinks[1].style.animation = "link-trade-left 1s linear forwards";
    }
  }
}
