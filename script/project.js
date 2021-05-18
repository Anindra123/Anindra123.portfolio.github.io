const projects_link = () => {
  const web_portfolio_project = document.getElementById("web-portfolio");
  const sorting_visualizer_project = document.getElementById(
    "sorting-algo-visualizer"
  );

  web_portfolio_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/portfolio");
  });
  sorting_visualizer_project.addEventListener("click", () => {
    window.open("https://github.com/Anindra123/SortingAlgorithmVisualizer");
  });
};

projects_link();
