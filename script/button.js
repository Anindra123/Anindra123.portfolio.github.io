const app = () => {
  const learn_more_btn = document.querySelector(".learn-more");
  const skills_section = document.getElementById("skills-section");
  learn_more_btn.addEventListener("click", () => {
    skills_section.scrollIntoView({ behavior: "smooth" });
  });
};
app();
