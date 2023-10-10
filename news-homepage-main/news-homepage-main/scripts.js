let sidebar = document.querySelector(".sidebar");
let menuBtn = document.querySelector("#menuBtn");
let menuClose = document.querySelector("#menuClose");

menuBtn.addEventListener("click", function () {
  sidebar.style.display = "flex";
});

menuClose.addEventListener("click", function () {
  sidebar.style.display = "none";
});
