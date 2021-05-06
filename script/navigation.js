const Nav = () => {
  const mobile_nav_icon = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navList = document.querySelectorAll(".nav-links");
  const close_btn = document.querySelector(".cross-btn");
  const home_section = document.getElementById("home-section");
  const skills_section = document.getElementById("skills-section");
  const projects_section = document.getElementById("projects-section");
  const home_nav = document.getElementById("home-nav");
  const skills_nav = document.getElementById("skills-nav");
  const projects_nav = document.getElementById("projects-nav");
  //const link = document.querySelectorAll(".nav-links .item");
  mobile_nav_icon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  close_btn.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });

  home_nav.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    home_section.scrollIntoView({ behavior: "smooth" });
  });
  skills_nav.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    skills_section.scrollIntoView({ behavior: "smooth" });
  });
  projects_nav.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    projects_section.scrollIntoView({ behavior: "smooth" });
  });
};

Nav();
