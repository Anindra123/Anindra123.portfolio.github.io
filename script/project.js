const projects_link = () => {
  const web_portfolio_project = document.getElementById("web-portfolio");
  const sorting_visualizer_project = document.getElementById(
    "sorting-algo-visualizer"
  );
  const password_manager_project = document.getElementById("Password-Manager");
  const project_management_app = document.getElementById(
    "Project-Management-App"
  );
  const etone_app = document.getElementById("Etone-App");
  const path_finding_visualizer = document.getElementById(
    "pathfinding-visualizer"
  );
  const idea_x = document.getElementById("idea-x");

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

  etone_app.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/Etone");
  });
  path_finding_visualizer.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/PathFindingVisualizer");
  });
  idea_x.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/IDEA-X-final_backend");
  });
};

projects_link();
