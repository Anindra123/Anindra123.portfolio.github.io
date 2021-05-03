const mobileNav = () => {
  const mobile_nav_icon = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navList = document.querySelectorAll(".nav-links");
  const close_btn = document.querySelector(".cross-btn");
  //const link = document.querySelectorAll(".nav-links .item");
  mobile_nav_icon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  close_btn.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
  navList.forEach((l) => {
    l.addEventListener("click", () => {
      nav.classList.remove("nav-active");
    });
  });
};

mobileNav();
