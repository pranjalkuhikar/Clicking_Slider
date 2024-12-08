let box = document.querySelectorAll(".box");

box.forEach((box) => {
  box.addEventListener("click", () => {
    removeClassList();
    box.classList.add("boxes");
  });
});

function removeClassList() {
  box.forEach((box) => {
    box.classList.remove("boxes");
  });
}
