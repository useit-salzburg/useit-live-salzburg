const title = document.querySelector(".intro h1[data-title]");
const firstPart = title?.querySelector(".typewriter-part-first");
const secondPart = title?.querySelector(".typewriter-part-second");
const thirdPart = title?.querySelector(".typewriter-part-third");

if (title && firstPart && secondPart && thirdPart && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const firstText = title.dataset.typedFirst;
  const secondText = title.dataset.typedSecond;
  const thirdText = title.dataset.typedThird;
  let currentIndex = 0;

  firstPart.textContent = "";
  secondPart.textContent = "";
  thirdPart.textContent = "";

  function typeNextCharacter() {
    if (currentIndex < firstText.length) {
      firstPart.textContent += firstText[currentIndex];
    } else if (currentIndex < firstText.length + secondText.length) {
      secondPart.textContent += secondText[currentIndex - firstText.length];
    } else {
      thirdPart.textContent += thirdText[currentIndex - firstText.length - secondText.length];
    }

    currentIndex += 1;
    if (currentIndex < firstText.length + secondText.length + thirdText.length) {
      window.setTimeout(typeNextCharacter, 55);
    }
  }

  window.setTimeout(typeNextCharacter, 180);
}