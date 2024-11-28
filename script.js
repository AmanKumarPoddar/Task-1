const containerA = document.querySelector(".containerA");
const containerB = document.querySelector(".containerB");
const containerC = document.querySelector(".containerC");

containerB.addEventListener("mousedown", () => {
  containerA.classList.add("moveToBottom");
  containerB.classList.add("moveToTop");
  containerC.classList.add("moveToMid");

  setTimeout(() => {
    containerA.classList.remove("moveToBottom");
    containerB.classList.remove("moveToTop");
    containerC.classList.remove("moveToMid");
  }, 500);
});
