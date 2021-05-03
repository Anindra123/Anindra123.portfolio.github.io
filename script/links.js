const goToUrl = (e) => {
  window.location.href = e;
};
const linkClick = () => {
  const skills_links = document.querySelectorAll(".prog-lang-container");

  skills_links.forEach((l) => {
    l.addEventListener("click", (e) => {
      if (e.target.classList.contains("java")) {
        e.preventDefault();
        window.alert("clicked Java");
      }
    });
  });
};
linkClick();
// https://www.oracle.com/java
// https://www.javascript.com
// https://www.python.org
