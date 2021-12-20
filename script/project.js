const projects_link = () => {
  const web_portfolio_project = document.getElementById("web-portfolio");
  const sorting_visualizer_project = document.getElementById(
    "sorting-algo-visualizer"
  );
  const password_manager_project = document.getElementById("Password-Manager");
  const project_management_app = document.getElementById(
    "Project-Management-App"
  );
  web_portfolio_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/portfolio");
  });
  sorting_visualizer_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/SortingAlgorithmVisualizer");
  });
  password_manager_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/PasswordManagerCli");
  });
  project_management_app.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/ProjectManagementApp");
  });
};

projects_link();
