const projects_link = () => {
  const web_portfolio_project = document.getElementById("web-portfolio");

  web_portfolio_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/portfolio");
  });
};

projects_link();
