const app = () => {
  const learn_more_btn = document.querySelector(".learn-more");
  const contact_me_btn = document.querySelector(".contact-me");
  const skills_section = document.getElementById("skills-section");
  const contacts_section = document.getElementById("contacts-section");
  learn_more_btn.addEventListener("click", () => {
    skills_section.scrollIntoView({ behavior: "smooth" });
  });

  contact_me_btn.addEventListener("click", () => {
    contacts_section.scrollIntoView({ behavior: "smooth" });
  });
};
app();
